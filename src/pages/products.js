import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../components/products.module.css'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const ComponentName = ({ data }) => {
  const {allContentfulProduct:{nodes: products}} = data;
    
  return <Layout>
    <h1>Hello from products</h1>
    <section className={styles.page}>
      {products.map((product)=>{
        console.log(product)
        return (
          <article key={product.id}>
            <Image fluid={product.image.fluid} />
            <h3>{product.title} <span>${product.price}</span></h3>
            <Link to={`/products/${product.slug}`} >more details</Link>
          </article>
        )
      })}
    </section>
  </Layout>
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        slug
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
