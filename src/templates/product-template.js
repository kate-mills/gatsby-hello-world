import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'

const ComponentName = ({ data }) => {
  const {product:{
    price, title, image:{fixed}, info:{info}
  }} = data;


  return (<Layout>
    <div style={{textAlign: "center"}}>
      <Link to="/products">back to products</Link>
      <h1>Single Product : {title}</h1>
      <section className="single-product">
         <article>
           <Image fixed={fixed} alt={title} />
         </article>
         <article>
            <h3>{title}</h3>
            <h3>${price}</h3>
            <p>{info}</p>
            <button>add to cart</button>
         </article>
        </section>
      </div>
    </Layout>);
}

export const query = graphql`
query GetSingleProduct($slug: String) {
  product: contentfulProduct(slug: {eq: $slug}) {
    title
    price
    info {
      info
    }
    image {
      fixed(width: 300) {
        ...GatsbyContentfulFixed
      }
    }
  }
}
`

export default ComponentName

