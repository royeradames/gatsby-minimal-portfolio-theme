/* libraries */
import React from "react"
import { Link } from "gatsby"

/* SVGs */
import LeftArrow from "../images/icons/arrow-left.svg"
import RightArrow from "../images/icons/arrow-right.svg"

/* types */
type OtherProject = {
  frontmatter: {
    id: number
    title: string
  } | null
}

/* create 2 buttons for previous and next projects */
const AdjacentProjectButtons = ({
  previous,
  next,
}: {
  previous: OtherProject
  next: OtherProject
}) => {
  /* list the projects to give button to */
  let captureAdjacentProjects = []
  // if adjacent project exist add it to the list
  if (previous) captureAdjacentProjects.push(previous)
  if (next) captureAdjacentProjects.push(next)
  // make list unchangeable
  const adjacentProjects = captureAdjacentProjects

  /* pick arrow */
  const arrowSVG = (isPreviousProject: boolean) => {
    if (isPreviousProject) {
      // previous gets left arrow
      return (
        <LeftArrow className="other-project__button-icon other-project__previous-project-icon" />
      )
    } else {
      // next gets right arrow
      return (
        <RightArrow className="other-project__button-icon other-project__next-project-icon" />
      )
    }
  }

  const generateButtons = () => {
    /* show 1 - 2 buttons */
    return adjacentProjects.map(adjacent => {
      /* add button and specific class */
      // check which adjacent side is
      const isPreviousProject =
        adjacent.frontmatter.title === previous?.frontmatter.title
      const isNextProject =
        adjacent.frontmatter.title === next?.frontmatter.title

      return (
        <Link
          to={`/portfolio/${adjacent.frontmatter.id}/${adjacent.frontmatter.title}`}
          className={`
              ${isPreviousProject ? "other-project__previous-project-link" : ""}
              ${isNextProject ? "other-project__next-project-link" : ""}
            `}
          onClick={() => {
            window.scroll(0, 0)
          }}
        >
          <button
            className={`
                other-project__button  
                ${isPreviousProject ? "other-project__previous-project" : ""}
                ${isNextProject ? "other-project__next-project" : ""}
              `}
          >
            {arrowSVG(isPreviousProject)}
            <h2
              className={`
                  project__title 
                  other-project__button-title 
                  ${
                    isPreviousProject
                      ? "other-project__previous-project-title"
                      : ""
                  }
                  ${isNextProject ? "other-project__next-project-title " : ""}
                `}
            >
              {adjacent.frontmatter.title}
            </h2>
            <h2
              className={`
                  other-project__label 
                  other-project__button-label 
                  ${
                    isPreviousProject
                      ? "other-project__previous-project-label"
                      : ""
                  }
                    ${isNextProject ? "other-project__next-project-label " : ""}
                `}
            >
              Next Project
            </h2>
          </button>
        </Link>
      )
    })
  }
  /* only when their is 1*/
  // don't show any buttons
  if (adjacentProjects === []) return <></>
  else {
    return <>{generateButtons()}</>
  }
}

export default AdjacentProjectButtons
