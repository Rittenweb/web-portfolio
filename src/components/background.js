import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Background() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "160.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [hasTurbulence, setHasTurbulence] = useState(false)
  const handleScroll = function handleScroll() {
    if (hasTurbulence) {
      return
    }
    setHasTurbulence(true)
    setTimeout(() => {
      setHasTurbulence(false)
    }, 200)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -2,
        filter: "url(#turbulence)",
      }}
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <svg>
        <filter id="turbulence" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            id="sea-filter"
            numOctaves="3"
            seed="2"
            baseFrequency="0.02 0.05"
          ></feTurbulence>
          <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
          <animate
            href="#sea-filter"
            attributeName="baseFrequency"
            dur="60s"
            keyTimes="0;0.5;1"
            values="0.02 0.06;0.04 0.08;0.02 0.06"
            repeatCount="indefinite"
          />
        </filter>
      </svg>
    </div>
  )
}
