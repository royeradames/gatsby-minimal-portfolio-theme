/* Labraries */
import React from "react"

/* SVGs */
import Github from "../images/icons/github.svg"
import Twitter from "../images/icons/twitter.svg"
import LinkedIn from "../images/icons/linkedin.svg"

const SocialMedia = (props: { page?: string }) => {
  return (
    <article
      className={`social-media ${
        props.page ? `${props.page}__social-media` : ""
      }`}
    >
      <a href="https://github.com/royeradames" target="_blank" rel="noreferrer">
        <Github
          className={`social-media__icon social-media__github ${props.page}__social-media-icon`}
        />
      </a>
      <a href="#root" target="_blank" rel="noreferrer">
        <Twitter
          className={`social-media__icon social-media__github ${props.page}__social-media-icon`}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/royer-adames/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn
          className={`social-media__icon social-media__github ${props.page}__social-media-icon`}
        />
      </a>
    </article>
  )
}

export default SocialMedia
