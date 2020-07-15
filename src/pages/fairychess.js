import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const FairychessPage = function () {
  let text = [
    [
      "Large, deeply-nested, and inter-dependent state objects that determine view rendering.",
      "Unidirectional data-flow with a single useReducer. Its dispatch is shared app-wide with useContext.",
    ],
    [
      `~150 different chess pieces with precise, non-random movement algorithms.`,
      `A concise but readable encoding system that translates into movement algorithms. And, a higher-level algorithm to recursively 
      recombine pieces, so complex pieces can be defined in the model by listing "component" pieces rather than listing moves.`,
    ],
    [
      `"background-attachment: fixed;" broken in Chrome with animations.`,
      `Wrapper component that reads the element's boundingClientRect and adjusts its
                 background position to simulate a fixed position relative to viewport point (0, 0)`,
    ],
  ]

  return (
    <Layout>
      <SEO title="Fairy Chess" />

      <Project
        title="Fairy Chess"
        video="https://www.youtube.com/embed/Zhawgd0REhA"
        source="https://github.com/Rittenweb/fairy-chess"
        live="https://fairychess.app/"
        text={text}
      />
      <Buttons current={"fairychess"} isBig={false} />
    </Layout>
  )
}

export default FairychessPage
