/* libraries */
import React from "react"

/* styles */
import "../styles/main.scss"

/* components */
import Header from "./header"
import Footer from "./footer"
export default function Layout({ children }: any) {
  return (
    <article className="website">
      <Header />
      {children}
      <Footer />
    </article>
  )
}
