import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const FairychessPage = function () {
  let text = [
    [
      "Large, complex and inter-dependent state objects",
      "A single useReducer and app-wide dispatch with useContext",
    ],
    [
      "ReactDnD too slow for desired UX",
      "Own drag and drop implementation atop of HTML5 API",
    ],
  ]

  return (
    <Layout>
      <SEO title="Bennett Winters: Fairy Chess" />

      <Project
        title="Fairy Chess"
        video="https://www.youtube.com/embed/Zhawgd0REhA"
        source="http://google.com"
        live="http://google.com"
        text={text}
      />
      <Buttons current={"fairychess"} isBig={false} />
    </Layout>
  )
}

export default FairychessPage
