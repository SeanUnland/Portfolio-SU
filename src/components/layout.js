/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
          {/* <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}> */}
            {/* <h3 style={{ display: `inline` }}>Sean Unland</h3> */}
          {/* </Link> */}
          {/* <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>  
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
            <ListLink to="/work/">Work</ListLink>
          </ul> */}
        </header>
        {children}
      </div>
    </>
  )
}

export default Layout
