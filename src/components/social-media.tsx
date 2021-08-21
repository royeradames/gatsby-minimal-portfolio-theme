/* Labraries */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

/* SVGs */
import Github from "../images/icons/github.svg"
import Twitter from "../images/icons/twitter.svg"
import LinkedIn from "../images/icons/linkedin.svg"
import Blog from "../images/icons/blog.svg"

const SocialMedia = (props: { page?: string }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          linkedIn
          github
          twitter
          blog
        }
      }
    }
  `)
  const { linkedIn, github, twitter, blog } = site.siteMetadata

  const socialLink = (socialMedia: string) => {
    /* convert the incoming key string to lowercase */
    socialMedia = socialMedia.toLowerCase()

    /* get the links from the sitemetadata */
    // if not then set it to #root
    switch (socialMedia) {
      case "twitter":
        return twitter || "#root"
      case "github":
        return github || "#root"
      case "linkedin":
        return linkedIn || "#root"
      case "blog":
        return blog || "#root"
      default:
        return "#root"
    }
  }
  return (
    <article
      className={`social-media ${
        props.page ? `${props.page}__social-media` : ""
      }`}
    >
      <a href={socialLink("github")} target="_blank" rel="noreferrer">
        <Github
          className={`social-media__icon social-media__github ${props.page}__social-media-icon`}
        />
      </a>
      <a href={socialLink("twitter")} target="_blank" rel="noreferrer">
        <Twitter
          className={`social-media__icon social-media__github ${props.page}__social-media-icon`}
        />
      </a>
      <a href={socialLink("linkedin")} target="_blank" rel="noreferrer">
        <LinkedIn
          className={`social-media__icon social-media__github ${props.page}__social-media-icon`}
        />
      </a>
      <a href={socialLink("blog")} target="_blank" rel="noreferrer">
        <Blog
          className={`social-media__icon social-media__github ${props.page}__social-media-icon`}
        />
      </a>
    </article>
  )
}

export default SocialMedia
