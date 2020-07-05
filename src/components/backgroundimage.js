import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

const BackgroundImage = () => {
  return (
    <div
      className="background"
      style={{
        position: "fixed",
        top: "4vw",
        left: "5vw",
        height: "calc(100vh - 8vw)",
        width: "90vw",
        zIndex: -1,
      }}
    ></div>
  )
}

export default BackgroundImage
