/* Libraries */
import React, { useState } from "react"
import { Link } from "gatsby"

/* component */
import Nav from "./nav"

/* SVGs */
import Logo from "../images/logo.svg"
import Hamburger from "../images/icons/hamburger.svg"
import Close from "../images/icons/close.svg"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileMenuLogic = (
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    // hide and show hambur, close icons and menu links
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="website__header header">
      <Link to="/" className="header__logo">
        <Logo />
      </Link>
      <Hamburger
        className={`header__hamburger ${isMenuOpen ? "header__hide" : ""}`}
        onClick={() => mobileMenuLogic(isMenuOpen, setIsMenuOpen)}
      />
      <Close
        className={`header__close ${isMenuOpen ? "" : "header__hide"}`}
        onClick={() => mobileMenuLogic(isMenuOpen, setIsMenuOpen)}
      />
      <Nav menu={`header__nav ${isMenuOpen ? " header__open" : ""}`} />
      <div
        className={`header__close-anywhere ${isMenuOpen ? "" : "header__hide"}`}
        onClick={() => mobileMenuLogic(isMenuOpen, setIsMenuOpen)}
      />
    </header>
  )
}

export default Header
