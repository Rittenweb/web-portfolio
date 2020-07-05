import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const PokecardPage = function () {
  let text = [
    [
      "Challenge: Large, complex and inter-dependent state objects",
      "Solution: a single useReducer and app-wide dispatch with useContext",
    ],
  ]

  return (
    <Layout>
      <SEO title="PokéCard Scrambler" />

      <Project
        title="PokéCard Scrambler"
        link="https://www.youtube.com/embed/Zhawgd0REhA"
        source="http://google.com"
        text={text}
      />
      <Buttons current={"pokecard"} />
    </Layout>
  )
}

export default PokecardPage
