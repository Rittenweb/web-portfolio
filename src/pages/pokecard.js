import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const PokecardPage = function () {
  let text = [
    [
      `Laying out highly variant amounts of text (especially the "attack" text) in a fixed-size space, in a visual medium where spacing nuance is key`,
      "Some JavaScript that scales text size based on character count, and a whole lot of Flexbox.",
    ],
    [
      "External API is sometimes slow to respond, and app requires fluid click-response for proper UX",
      `Pre-fetch the first card on app load. When the user clicks the button, they are not fetching,
       but displaying already fetched data, and then pre-fetching the next set of data on the same click.`,
    ],
  ]

  return (
    <Layout>
      <SEO title="PokéCard Scrambler" />

      <Project
        title="PokéCard Scrambler"
        video="https://www.youtube.com/embed/Zhawgd0REhA"
        source="http://google.com"
        live="http://google.com"
        text={text}
      />
      <Buttons current={"pokecard"} isBig={false} />
    </Layout>
  )
}

export default PokecardPage
