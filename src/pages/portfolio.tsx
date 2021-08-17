// import React from "react"
// import { Link } from "gatsby"
// // component
// import ContactMeArticle from "../components/contact-me"

// type Project = {
//   id: number
//   title: string
//   message: string
//   imgLinkMobile: string
//   imgLinkMobile2x: string
//   imgLinkTablet: string
//   imgLinkTablet2x: string
//   imgLinkDesktop: string
//   imgLinkDesktop2x: string
// }
// const Portfolio = () => {
//   const pattern = (id: number) => {
//     const even = id % 2 === 0
//     if (even) {
//       return "portfolio__project-even-pattern"
//     } else {
//       // odd
//       return "portfolio__project-odd-pattern"
//     }
//   }

//   const portfolioList = (projectSnipeDetails: Project[]) => {
//     return projectSnipeDetails.map((project: Project) => {
//       return (
//         <article
//           className={`portfolio__project ${pattern(project.id)}`}
//           key={project.id}
//         >
//           {/* show the images depending on the sizes, and the px density */}
//           <picture className="portfolio__img">
//             <source
//               srcSet={`${project.imgLinkDesktop} 1x, ${project.imgLinkDesktop2x} 2x`}
//               media={mediaQueries.desktop}
//             />
//             <source
//               srcSet={`${project.imgLinkTablet} 1x, ${project.imgLinkTablet2x} 2x`}
//               media={mediaQueries.tablet}
//             />
//             <source
//               srcSet={`${project.imgLinkMobile} 1x, ${project.imgLinkMobile2x}`}
//             />
//             <img src={project.imgLinkMobile} alt={`${project.title} project`} />
//           </picture>
//           <div className="horizontal-line portfolio__horizontal-line portfolio__horizontal-line-top" />
//           <h1 className="title portfolio__title">{project.title}</h1>
//           <p className="portfolio__message">{project.message}</p>
//           <Link
//             to={`projects/${project.id}/${project.title}`}
//             className="portfolio__button-link"
//           >
//             <button className="secondary-button secondary-normal portfolio__button">
//               View Project
//             </button>
//           </Link>
//           <div className="horizontal-line portfolio__horizontal-line portfolio__horizontal-line-bottom" />
//         </article>
//       )
//     })
//   }
//   return (
//     <main className="website__pages portfolio">
//       {portfolioList(projectSnipeDetails)}
//       <ContactMeArticle page="portfolio" />
//     </main>
//   )
// }

// export default Portfolio
