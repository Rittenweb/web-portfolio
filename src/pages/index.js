import React from "react"
import Buttons from "../components/buttons"
import GitHubImageLarge from "../components/githubImageLarge"
import LinkedInImage from "../components/linkedInImage"
import ProfileImage from "../components/profileImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const IndexPage = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <div
        className="home-block"
        // style={{ animation: "fadeIn 2s ease-in" }}
      >
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
        <div style={{ marginBottom: "30px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "9vw",
                minWidth: "75px",
                margin: "40px 40px 40px 0",
              }}
            >
              <ProfileImage />
            </div>

            <h1
              style={{
                fontSize: "calc(0.8rem + 2.5vw)",
                fontFamily: '"Kodchasan", sans-serif',
              }}
            >
              Hi, I'm Bennett :)
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "calc(1.1rem + 0.6vw)",
              fontFamily: '"Gayathri", sans-serif',
            }}
          >
            <div className="gradient-bar" style={{ marginRight: "16px" }}></div>
            <div>
              <h3 style={{ paddingTop: "8px" }}>
                I'm a <span className="red">Front</span>-
                <span className="orange">End</span>{" "}
                <span className="yellow">Developer </span>
                with a background
              </h3>
              <h3 style={{ paddingTop: "8px" }}>
                in <span className="">technical</span>,{" "}
                <span className="">expository</span>, and{" "}
                <span className="">creative</span> writing.
              </h3>
            </div>
          </div>
        </div>
        <h4
          style={{
            marginBottom: "40px",
            fontFamily: '"Gayathri", sans-serif',
            fontSize: "calc(0.6rem + .6vw)",
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
