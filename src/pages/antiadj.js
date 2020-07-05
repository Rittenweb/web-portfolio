import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
      <h1>Anti-Adjective Text Editor</h1>
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
      <div>
        <Link to="/">
          <div className="button">About Me</div>
        </Link>
        <Link to="/fairychess">
          <div className="button">Fairy Chess</div>
        </Link>
        <Link to="/antiadj">
          <div className="button">Anti-Adjective Editor</div>
        </Link>
        <Link to="/iclibrary">
          <div className="button">I.C. Library Homepage</div>
        </Link>
        <Link to="/pokecard">
          <div className="button">PokéCard Scrambler</div>
        </Link>
        <Link to="/intimpossible">
          <div className="button">Intermediate Impossible</div>
        </Link>
        <Link to="/contact">
          <div className="button">Contact Me</div>
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
