import React from "react"
import Buttons from "../components/buttons"
import GitHubImageLarge from "../components/githubImageLarge"
import LinkedInImage from "../components/linkedInImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const IndexPage = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <div className="home-block">
        <div style={{ display: "flex" }}>
          <OutboundLink href="https://github.com/Rittenweb">
            <GitHubImageLarge />
          </OutboundLink>
          <OutboundLink
            href="https://www.linkedin.com/in/bennett-winters-18a0024a/"
            style={{ marginLeft: "16px" }}
          >
            <LinkedInImage />
          </OutboundLink>
        </div>
        <div style={{ margin: "30px 0" }}>
          <h1
            style={{
              fontSize: "calc(1rem + 3.3vw)",
              marginBottom: "40px",
              fontFamily: '"Kodchasan", sans-serif',
            }}
          >
            Hi, I'm <span>Bennett</span> :)
          </h1>
          <div
            style={{
              display: "flex",
              fontSize: "calc(1rem + 0.5vw)",
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
            fontSize: "calc(0.5rem + .6vw)",
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
