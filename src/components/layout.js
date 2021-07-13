/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import "./typography.css"

export const breakpoints = {
  xs: 375,
  s: 576,
  m: 768,
  l: 992,
  xl: 1290,
  xxl: 1400,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            image
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Navbar siteTitle={data.site.siteMetadata.title} /> */}
        {/* <head image={data.site.siteMetadata.image}/> */}
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
