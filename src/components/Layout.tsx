/* libraries */
import React from "react"
import SEO from "./seo"
import { useStaticQuery, graphql } from "gatsby"

/* styles */
import "../styles/main.scss"

/* components */
import Header from "./header"
import Footer from "./footer"
export default function Layout({ children }: any) {
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
      <article className="website">
        <Header />
        {children}
        <Footer />
      </article>
    </>
  )
}
