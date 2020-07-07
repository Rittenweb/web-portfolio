import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LinkedInImage = () => {
  const data = useStaticQuery(graphql`
    query {
      theImage: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.theImage.childImageSharp.fluid} style={{ width: 64 }} />
  )
}

export default LinkedInImage
