import React from "react"
import { Link } from "gatsby"
import Buttons from "../components/buttons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Bennett Winters</h1>
        <h4>I'm a self-taught Front-End Developer</h4>
        <h4>...and general Creative Type Guy</h4>
        <h4>Here's my resume</h4>
        <h4>Check out my projects:</h4>
      </div>
      <Buttons current={""} />
    </div>
  </Layout>
)

export default IndexPage
