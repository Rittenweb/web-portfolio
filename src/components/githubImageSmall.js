import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GitHubImageSmall = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "GitHub-Mark-32px.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default GitHubImageSmall
