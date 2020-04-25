import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <p>hello from examples</p>
      <Header />
      <h4>Author: {author}</h4>
      <HeaderStatic />
    </Layout>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
export default examples
