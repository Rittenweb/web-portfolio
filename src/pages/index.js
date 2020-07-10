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
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "40px",
              fontFamily: '"Kodchasan", sans-serif',
            }}
          >
            Hi, I'm <span>Bennett</span> :)
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.4rem",
              fontFamily: '"Gayathri", sans-serif',
            }}
          >
            <div className="gradient-bar" style={{ marginRight: "16px" }}></div>
            <div>
              <h3 style={{ paddingTop: "8px" }}>
                I'm a self-taught{" "}
                <span className="orange">Front-End Developer</span>
              </h3>
              <h3 style={{ paddingTop: "8px" }}>
                ...and a <span className="red">writer</span>, and generally a{" "}
                <span className="yellow">Creative Type Guy</span>
              </h3>
            </div>
          </div>
        </div>
        <h4
          style={{
            marginBottom: "40px",
            fontFamily: '"Gayathri", sans-serif',
          }}
        >
          Check out some of my web projects! (I recommend "Fairy Chess")
        </h4>
      </div>
      <Buttons current={""} isBig={true} />
    </Layout>
  )
}

export default IndexPage
