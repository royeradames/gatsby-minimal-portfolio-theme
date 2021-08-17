import React from "react"
import { Link } from "gatsby"

const Nav = (props: any) => {
  return (
    <nav
      className={`nav ${props.menu ? props.menu : ""} ${
        props.footer ? "footer__nav" : ""
      }`}
    >
      <Link
        to="/"
        className={`nav__link ${props.footer ? "footer__nav-link" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/portfolio"
        className={`nav__link ${props.footer ? "footer__nav-link" : ""}`}
      >
        Portfolio
      </Link>
      <Link
        to="/contact"
        className={`nav__link ${props.footer ? "footer__nav-link" : ""}`}
      >
        Contact Me
      </Link>
    </nav>
  )
}

export default Nav
