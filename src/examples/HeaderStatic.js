import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <h2>{data.site.info.description}</h2>}
  ></StaticQuery>
)

export default HeaderStatic
