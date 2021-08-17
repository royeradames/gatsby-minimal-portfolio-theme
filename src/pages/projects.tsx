// // libraries
// import React from "react"
// import { Link } from "gatsby"

// // data
// import projectsDetail from "../projectsDetail"

// //variables
// import mediaQueries from "../viewPortsSize"

// // components
// import ContactMeArticle from "../components/contact-me"

// // SVGs
// import { ReactComponent as LeftArrow } from "../images/icons/arrow-left.svg"
// import { ReactComponent as RightArrow } from "../images/icons/arrow-right.svg"

// const Project = props => {
//   // get url params to identify the project
//   const { id, title } = props.locations
//   // convert the id from a strin to a number
//   const currentProjectId = parseInt(id)

//   const projectDetails = () => {
//     // current project data
//     const currentProjectArrayId = currentProjectId - 1
//     const currentProjectDetail = projectsDetail[currentProjectArrayId]

//     // previous project data
//     let previousProjectTitleGetter
//     if (currentProjectId - 2 >= 0) {
//       previousProjectTitleGetter = projectsDetail[currentProjectId - 2]
//     } else {
//       const lastProject = projectsDetail.length - 1
//       previousProjectTitleGetter = projectsDetail[lastProject]
//     }
//     const previousProjectDetail = previousProjectTitleGetter

//     // previous project data
//     let nextProjectTitleGetter
//     const nextProjectArrayId = currentProjectId
//     if (nextProjectArrayId < projectsDetail.length) {
//       nextProjectTitleGetter = projectsDetail[nextProjectArrayId]
//     } else {
//       const firstProjectId = 0
//       nextProjectTitleGetter = projectsDetail[firstProjectId]
//     }
//     const nextProjectDetail = nextProjectTitleGetter

//     return (
//       <>
//         {/* unpack project data identify by params */}
//         {/* show the images depending on the sizes, and the px density */}
//         <picture className="project__hero">
//           <source
//             media={mediaQueries.desktop}
//             srcSet={`${currentProjectDetail.heroDesktop} 1x, `}
//           />
//           <source
//             media={mediaQueries.tablet}
//             srcSet={`${currentProjectDetail.heroTablet} 1x, `}
//           />
//           <source srcSet={currentProjectDetail.heroMobile} />
//           <img
//             src={currentProjectDetail.heroMobile}
//             alt={`Desktop preview of the ${title} project`}
//           />
//         </picture>
//         <article className="project__intro intro">
//           <div className="horizontal-line intro__horizontal-line-top" />
//           <h1 className="title  intro__title">{currentProjectDetail.title}</h1>
//           <p className="project__message project__intro-message intro__message">
//             {currentProjectDetail.intro}
//           </p>
//           <div className="intro__job-title-tech-stack">
//             <p className="intro__job-title">{currentProjectDetail.jobTitle}</p>
//             <p className="intro__tech-stack">
//               {currentProjectDetail.techStack}
//             </p>
//           </div>
//           <button className="secondary-button secondary-normal intro__button">
//             VIEW WEBSITE
//           </button>
//           <div className="horizontal-line intro__horizontal-line-bottom" />
//         </article>
//         <article className="project__background background">
//           <h2 className="project__title background__title">
//             Project Background
//           </h2>
//           <p className="project__message background__message">
//             {currentProjectDetail.background}
//           </p>
//         </article>
//         <article className="project__previews previews">
//           <h2 className="project__title previews__title">Static Previews</h2>

//           <picture className="previews__preview-1">
//             <source
//               srcSet={`${currentProjectDetail.imgDesktopPreview} 1x, ${currentProjectDetail.imgDesktopPreview2x} 2x`}
//             />
//             <source
//               srcSet={`${currentProjectDetail.imgTabletPreview} 1x, ${currentProjectDetail.imgTabletPreview2x} 2x`}
//               media={mediaQueries.tablet}
//             />
//             <source srcSet={`${currentProjectDetail.imgMobilePreview}`} />
//             <img
//               src={currentProjectDetail.imgMobilePreview}
//               alt={`Desktop preview of ${currentProjectDetail.title} project`}
//             />
//           </picture>

//           <picture className="previews__preview-2">
//             <source
//               srcSet={`${currentProjectDetail.imgDesktop2Preview} 1x, ${currentProjectDetail.imgDesktop2Preview2x} 2x`}
//               media={mediaQueries.desktop}
//             />
//             <source
//               srcSet={`${currentProjectDetail.imgTablet2Preview} 1x, ${currentProjectDetail.imgTablet2Preview2x} 2x`}
//               media={mediaQueries.tablet}
//             />
//             <source srcSet={`${currentProjectDetail.imgMobile2Preview}`} />
//             <img
//               src={currentProjectDetail.imgMobile2Preview}
//               alt={`Mobile preview of ${currentProjectDetail.title} project`}
//             />
//           </picture>
//         </article>
//         <article className="project__others-project other-project">
//           {/* Link to previous and next projects on the project list */}
//           <Link
//             to={`/projects/${previousProjectDetail.id}/${previousProjectDetail.title}`}
//             className="other-project__previous-project-link"
//             onClick={() => {
//               window.scroll(0, 0)
//             }}
//           >
//             <button className="other-project__previous-project other-project__button">
//               <LeftArrow className="other-project__button-icon other-project__previous-project-icon" />
//               <h2
//                 className="project__title
//               other-project__button-title
//               other-project__previous-project-title "
//               >
//                 {previousProjectDetail.title}
//               </h2>
//               <h2 className="other-project__label other-project__button-label other-project__previous-project-label">
//                 Previous Project
//               </h2>
//             </button>
//           </Link>
//           <Link
//             to={`/projects/${nextProjectDetail.id}/${nextProjectDetail.title}`}
//             className="other-project__next-project-link"
//             onClick={() => {
//               window.scroll(0, 0)
//             }}
//           >
//             <button className="other-project__next-project other-project__button">
//               <RightArrow className="other-project__button-icon other-project__next-project-icon" />
//               <h2 className="project__title other-project__button-title other-project__next-project-title ">
//                 {nextProjectDetail.title}
//               </h2>
//               <h2 className="other-project__label other-project__button-label other-project__next-project-label">
//                 Next Project
//               </h2>
//             </button>
//           </Link>
//         </article>
//       </>
//     )
//   }
//   return (
//     <main className="website__pages project">
//       {projectDetails()}
//       <ContactMeArticle page="project" />
//     </main>
//   )
// }

// export default Project
