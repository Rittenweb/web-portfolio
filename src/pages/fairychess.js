import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const FairychessPage = function () {
  let text = [
    [
      "Challenge: Large, complex and inter-dependent state objects",
      "Solution: a single useReducer and app-wide dispatch with useContext",
    ],
  ]

  return (
    <Layout>
      <SEO title="Fairy Chess" />

      <Project
        title="Fairy Chess"
        link="https://www.youtube.com/embed/Zhawgd0REhA"
        source="http://google.com"
        text={text}
      />
      <Buttons current={"fairychess"} />
    </Layout>
  )
}

export default FairychessPage
