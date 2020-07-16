import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import resume from "../downloads/bennett_winters_resume.pdf"

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
    <a href={resume}>
      <Img
        fluid={data.theImage.childImageSharp.fluid}
        style={{ minWidth: "64px" }}
      />
    </a>
  )
}

export default PdfImage
