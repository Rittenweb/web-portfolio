import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PdfImage = () => {
  const data = useStaticQuery(graphql`
    query {
      theImage: file(relativePath: { eq: "pdf.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.theImage.childImageSharp.fluid}
      style={{ minWidth: "64px" }}
    />
  )
}

export default PdfImage
