import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const IntimpossiblePage = function () {
  let text = [
    [
      "Challenge: Large, complex and inter-dependent state objects",
      "Solution: a single useReducer and app-wide dispatch with useContext",
    ],
  ]

  return (
    <Layout>
      <SEO title="Intermediate Impossible" />

      <Project
        title="Intermediate Impossible"
        link="https://www.youtube.com/embed/Zhawgd0REhA"
        source="http://google.com"
        text={text}
      />
      <Buttons current={"intimpossible"} />
    </Layout>
  )
}

export default IntimpossiblePage
