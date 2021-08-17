import React from "react"
import { Link } from "gatsby"
import { ReactComponent as Logo } from "../images/logo.svg"
import Nav from "./nav"
import SocialMedia from "./social-media"
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
