/* libraries */
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// components
import ContactMe from "../components/contact-me"
import Layout from "../components/Layout"
import AdjacentProjectButtons from "../components/AdjacentProjectButtons"
import SEO from "../components/seo"

/* types */
type OtherProject = {
  frontmatter: {
    id: number
    title: string
  } | null
}
type CurrentProject = {
  frontmatter: {
    background: string
    hero: any
    id: number
    img2Preview: any
    imgPreview: any
    intro: string
    jobTitle: string
    techStack: string
    title: string
  }
}

const ProjectsDetail = ({ pageContext }) => {
  const {
    current,
    next,
    previous,
  }: {
    current: CurrentProject
    next: OtherProject
    previous: OtherProject
  } = pageContext

  return (
    <Layout>
      <SEO
        // to uppercase current project title
        title={current.frontmatter.title.replace(/\w\S*/g, w =>
          w.replace(/^\w/, c => c.toUpperCase())
        )}
      />
      <article className="website__pages project">
        <GatsbyImage
          image={getImage(current.frontmatter.hero)}
          alt={`Desktop preview of the ${current.frontmatter.title} project`}
          className="project__hero"
        />
        <article className="project__intro intro">
          <div className="horizontal-line intro__horizontal-line-top" />
          <h1 className="title  intro__title">{current.frontmatter.title}</h1>
          <p className="project__message project__intro-message intro__message">
            {current.frontmatter.intro}
          </p>
          <div className="intro__job-title-tech-stack">
            <p className="intro__job-title">{current.frontmatter.jobTitle}</p>
            <p className="intro__tech-stack">{current.frontmatter.techStack}</p>
          </div>
          <button className="secondary-button secondary-normal intro__button">
            VIEW WEBSITE
          </button>
          <div className="horizontal-line intro__horizontal-line-bottom" />
        </article>
        <article className="project__background background">
          <h2 className="project__title background__title">
            Project Background
          </h2>
          <p className="project__message background__message">
            {current.frontmatter.background}
          </p>
        </article>
        {/* show alternative previews */}
        <article className="project__previews previews">
          <h2 className="project__title previews__title">Static Previews</h2>
          <GatsbyImage
            image={getImage(current.frontmatter.imgPreview)}
            alt={`Desktop preview of ${current.frontmatter.title} project`}
            className="previews__preview-1"
          />
          <GatsbyImage
            image={getImage(current.frontmatter.img2Preview)}
            alt={`Mobile preview of ${current.frontmatter.title} project`}
            className="previews__preview-2"
          />
        </article>
        {/* Link to previous and next projects on the project list */}
        <article className="project__others-project other-project">
          <AdjacentProjectButtons previous={previous} next={next} />
        </article>
        <ContactMe page="project" />
      </article>
    </Layout>
  )
}

export default ProjectsDetail
