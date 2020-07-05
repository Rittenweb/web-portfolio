import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const BackgroundSmall = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "ocean.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      fluid={data.backgroundImage.childImageSharp.fluid}
      style={{
        position: "fixed",
        top: "4vw",
        left: "5vw",
        height: "calc(100vh - 8vw)",
        width: "90vw",
        zIndex: -1,
        backgroundRepeat: "repeat",
        backgroundSize: "auto auto",
      }}
    ></BackgroundImage>
  )
}

export default BackgroundSmall
