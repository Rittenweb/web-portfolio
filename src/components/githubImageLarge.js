import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GitHubImageLarge = () => {
  const data = useStaticQuery(graphql`
    query {
      theImage: file(relativePath: { eq: "GitHub-Mark-Light-120px-plus.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
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

export default GitHubImageLarge
