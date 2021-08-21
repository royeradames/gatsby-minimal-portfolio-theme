/* Libraries */
import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/* component */
import ContactMeArticle from "../../components/contact-me"
import SEO from "../../components/seo"

/* types */
type snippet = {
  thumbnail: string
  snippetMessage: string
  id: number
  title: string
}

export default function ProjectsSnippet({ data }) {
  const { projectsSnippet } = data.allMarkdownRemark

  const pattern = (id: number) => {
    const even = id % 2 === 0
    if (even) {
      return "portfolio__project-even-pattern"
    } else {
      // odd
      return "portfolio__project-odd-pattern"
    }
  }

  /* unpackage the list of thumbnails */
  const UnpackPortfolioList = () => {
    return projectsSnippet.map(aProject => {
      const project = aProject.project.data
      const img = getImage(project.thumbnail)
      return (
        <article
          className={`portfolio__project ${pattern(project.id)}`}
          key={project.id}
        >
          <GatsbyImage image={img} alt="Thumbnail" className="portfolio__img" />
          <div className="horizontal-line portfolio__horizontal-line portfolio__horizontal-line-top" />
          <h1 className="title portfolio__title">{project.title}</h1>
          <p className="portfolio__message">{project.snippetMessage}</p>
          <Link
            to={`/portfolio/${project.id}/${project.title}`}
            className="portfolio__button-link"
          >
            <button className="secondary-button secondary-normal portfolio__button">
              View Project
            </button>
          </Link>
          <div className="horizontal-line portfolio__horizontal-line portfolio__horizontal-line-bottom" />
        </article>
      )
    })
  }
  return (
    <Layout>
      <SEO title="Portfolio" />
      <main className="website__pages portfolio">
        {UnpackPortfolioList()}
        <ContactMeArticle page="portfolio" />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___id, order: ASC }) {
      projectsSnippet: edges {
        project: node {
          data: frontmatter {
            snippetMessage
            id
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
