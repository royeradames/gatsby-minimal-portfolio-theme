/* libraries */
import React from "react"
import { Link } from "gatsby"

/* components */
import Nav from "./nav"
import SocialMedia from "./social-media"

/* SVGs */
import Logo from "../images/logo.svg"

function Footer() {
  return (
    <>
      <footer className="website__footer footer">
        <Link
          to="/"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }}
        >
          <Logo className="footer__logo" />
        </Link>
        <Nav footer="footer" />
        <SocialMedia page="footer" />
      </footer>
    </>
  )
}

export default Footer
