/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import "./layout.css"
import Footer from "./Footer"
import Animation from "./Animation"
import Background from "./Background"

const Layout = ({ children, header }) => {
  return (
    <>
      <Background />
      <Animation />
      <div className="app">
        {header}
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout
