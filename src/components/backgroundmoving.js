import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundMoving() {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "160.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.backgroundImage.childImageSharp.fluid}
      style={{
        position: "fixed",
        width: "120vw",
        minHeight: "125vh",
        top: "-10vw",
        left: "-10vw",
        zIndex: -2,
        filter: "url(#turbulence)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto auto",
      }}
    >
      <svg>
        <filter id="turbulence" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            id="ripple-filter"
            numOctaves="3"
            seed="2"
            baseFrequency="0.02 0.05"
          ></feTurbulence>
          <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
          <animate
            href="#ripple-filter"
            attributeName="baseFrequency"
            dur="60s"
            keyTimes="0;0.5;1"
            values="0.02 0.06;0.04 0.08;0.02 0.06"
            repeatCount="indefinite"
          />
        </filter>
      </svg>
    </BackgroundImage>
  )
}
