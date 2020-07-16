import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const IntimpossiblePage = function () {
  let text = [
    [
      "Simple app with simple logic and layout",
      "Build it framework-less with vanilla JS and direct DOM manipulation, just to practice!",
    ],
  ]

  return (
    <Layout>
      <SEO title="Intermediate Impossible" />

      <Project
        title="Intermediate Impossible"
        video="https://www.youtube.com/embed/Z4ppj413PDE"
        source="https://github.com/Rittenweb/intermediate-impossible"
        live="https://rittenweb.github.io/intermediate-impossible/"
        text={text}
      />
      <Buttons current={"intimpossible"} isBig={false} />
    </Layout>
  )
}

export default IntimpossiblePage
