import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const IclibraryPage = function () {
  let text = [
    [
      "Static site with lots of images and fonts",
      `gatsby-image to blur in images and gatsby-prefetch-google-fonts to save http requests. DRY up the
      gatsby-image pattern with a wrapper component that clips the <Img/> with an SVG and runs a GraphQL query that
      dynamically fetches the passed-in filename.`,
    ],
    [
      `Some <a href=""></a> query strings need to contain secrets to allow one-click login.`,
      `Make a function run onClick which dynamically assembles the query string by fetching
      the secrets with Netlify lambda functions.`,
    ],
    [
      "Books and Teachers pages should be hidden from public view.",
      `Simple auth pattern in which the currently guessed password is saved in localStorage, and checked against a
      sitewide fixed password that the students know, fetched from a cloud function. Even the private routes
      are pre-rendered using Gatsby's node APIs, and hidden using Reach Router navigation.`,
    ],
  ]

  return (
    <Layout>
      <SEO title="Bennett Winters: I.C. Library" />

      <Project
        title="Immaculate Conception Library Homepage"
        video="https://www.youtube.com/embed/Zhawgd0REhA"
        source="http://google.com"
        live="http://google.com"
        text={text}
      />
      <Buttons current={"iclibrary"} isBig={false} />
    </Layout>
  )
}

export default IclibraryPage
