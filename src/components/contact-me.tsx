/* libraries */
import React from "react"
import { Link } from "gatsby"

const ContactMeArticle = (props: { page: string }) => {
  return (
    <article className={`contact-me ${props.page}__contact-me`}>
      <h2 className="title home__title contact-me__title">
        Interested in doing a project together?
      </h2>
      <div className="horizontal-line contact-me__horizontal-line" />
      <Link
        to="/contact"
        className="contact-me__button"
        onClick={() => {
          window.scroll(0, 0)
        }}
      >
        <button className="secondary-button secondary-normal ">
          Contact Me
        </button>
      </Link>
    </article>
  )
}

export default ContactMeArticle
