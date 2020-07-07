import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GitHubImageSmall = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "GitHub-Mark-Light-64px.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default GitHubImageSmall
