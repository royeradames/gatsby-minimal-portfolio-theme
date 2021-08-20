/* libraries */
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  /* get projects data */
  const { data } = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___id, order: ASC }) {
        projects: edges {
          current: node {
            frontmatter {
              background
              hero {
                childImageSharp {
                  gatsbyImageData
                }
              }
              id
              img2Preview {
                childImageSharp {
                  gatsbyImageData
                }
              }
              imgPreview {
                childImageSharp {
                  gatsbyImageData
                }
              }
              intro
              jobTitle
              techStack
              title
            }
          }
          next {
            frontmatter {
              id
              title
              hero {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          previous {
            frontmatter {
              id
              title
            }
          }
        }
      }
    }
  `)

  /* Use node to write files on the specify path and to fill it's content with the component template */
  // each time it creates a new page the context will pass the data to make the page unic
  data.allMarkdownRemark.projects.forEach(aProject => {
    console.log({ aProject })
    const { current, next, previous } = aProject
    console.log({ current })
    console.log({ next })
    console.log({ previous })

    actions.createPage({
      path: `portfolio/${current.frontmatter.id}/${current.frontmatter.title}`,
      component: path.resolve("./src/template/projects-detail.tsx"),
      context: { current, next, previous },
    })
  })
}
