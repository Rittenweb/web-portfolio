import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Button({ to, text, imgOffset, isBig }) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "160.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [hasTurbulence, setHasTurbulence] = useState(false)

  const handleMouseEnter = function handleMouseEnter(e) {
    setHasTurbulence(true)
  }

  const handleMouseLeave = function handleMouseLeave(e) {
    setHasTurbulence(false)
  }

  return (
    <Link to={to} style={{ height: "12.5%" }}>
      <div
        className="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          fontSize: isBig ? "calc(0.2rem + 1.1vw)" : "calc(0.7rem + 0.4vw)",
        }}
      >
        <div
          className="button-clip"
          style={{
            // filter: hasTurbulence ? "url(#lesserturbulence)" : "",
            clipPath: hasTurbulence
              ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
              : isBig
              ? "polygon(0 0, 50% 0, 60% 100%, 0% 100%)"
              : "polygon(0 0, 60% 0, 70% 100%, 0% 100%)",
          }}
        >
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{
              width: "110%",
              transform: `translate(0px, calc(${imgOffset} * var(--imgScaleRatio))`, //x was -10 to mask filter edge, no longer needed
            }}
          />
        </div>
        <div
          className="button-text"
          style={{
            filter: hasTurbulence ? "blur(0.06em)" : "blur(0.03em)",
          }}
        >
          {text}
        </div>
      </div>
    </Link>
  )
}
