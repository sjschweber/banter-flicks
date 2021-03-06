/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import NavBar from "./navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
            }
        }
      }
    }
  `)

  return (

      <>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />

        <div style={{position: 'relative'}}>
          {children}
        </div>




      </>
    )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
