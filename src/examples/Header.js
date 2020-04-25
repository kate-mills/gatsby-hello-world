import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  {
    site {
      siteMetadata {
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

const Header = () => {
  const data = useStaticQuery(getData)

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  )
}

export default Header
