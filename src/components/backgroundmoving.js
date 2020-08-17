import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function BackgroundMoving({ path }) {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "twoocean.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: -2,
          // animation: path ? "fadeIn 4s ease-in" : "",
        }}
      >
        <Img
          fluid={data.backgroundImage.childImageSharp.fluid}
          style={{
            // filter: "url(#turbulence)",
            minWidth: "100vw",
            minHeight: "100vh",
          }}
        />
      </div>
      {/* <svg style={{ position: "fixed" }}>
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
      </svg> */}
    </>
  )
}
