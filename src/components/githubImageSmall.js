import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GitHubImageSmall = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "GitHub-Mark-Light-32px.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="github-thumb">
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  )
}

export default GitHubImageSmall
