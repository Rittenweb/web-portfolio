import React from "react"
import Buttons from "../components/buttons"
import GitHubImageLarge from "../components/githubImageLarge"
import LinkedInImage from "../components/linkedInImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Bennett Winters: Home" />
      <div className="home-block">
        <div style={{ display: "flex" }}>
          <a href="https://github.com/Rittenweb">
            <GitHubImageLarge />
          </a>
          <a
            href="https://www.linkedin.com/in/bennett-winters-18a0024a/"
            style={{ marginLeft: "16px" }}
          >
            <LinkedInImage />
          </a>
        </div>
        <div style={{ margin: "30px 0" }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "40px" }}>
            Hi, I'm Bennett
          </h1>
          <div>
            <h3 style={{ marginBottom: "10px" }}>
              I'm a self-taught Front-End Developer
            </h3>
            <h3>...and a writer, and generally a Creative Type Guy</h3>
          </div>
        </div>
        <h5 style={{ marginBottom: "40px" }}>
          Check out some of my web projects! (I recommend "Fairy Chess")
        </h5>
      </div>
      <Buttons current={""} isBig={true} />
    </Layout>
  )
}

export default IndexPage
