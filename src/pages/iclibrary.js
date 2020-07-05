import React from "react"
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
        marginBottom: "25%",
      }}
    >
      <h1>Immaculate Conception Library Homepage</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25%",
        }}
      >
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Zhawgd0REhA"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h3>Challenge: Large, complex and inter-dependent state objects</h3>
          <h3>
            Solution: a single useReducer and app-wide dispatch with useContext
          </h3>
        </div>
      </div>
      <Buttons current={"iclibrary"} />
    </div>
  </Layout>
)

export default IndexPage
