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
      }}
    >
      <div>
        <h1>Bennett Winters</h1>
        <h4>I'm a self-taught Front-End Developer</h4>
        <h4>...and general Creative Type Guy</h4>
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
    <div>
      <h1>About Me</h1>
      <div>
        I have an undergraduate degree in English literature and a graduate
        degree in creative writing. I've come to believe that writing—essay,
        fiction, whatever—has a ton in common with coding, and I'll be thrilled
        to bore you with the details of that analogy if you ask!
      </div>
      <div>For now I'll just say...</div>
    </div>
    <div>
      <h1>Skills</h1>
      <h2>Proficient In:</h2>
      <div style={{ display: "flex" }}>
        <div className="skill">JavaScript</div>
        <div className="skill">React</div>
        <div className="skill">Gatsby</div>
        <div className="skill">Serverless/JAMStack</div>
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">Jest</div>
      </div>
      <h3>Learning:</h3>
      <div style={{ display: "flex" }}>
        <div className="skill">Webpack</div>
        <div className="skill">SQL</div>
        <div className="skill">Python (Flask)</div>
        <div className="skill">GraphQL</div>
        <div className="skill">Canvas</div>
        <div className="skill">SVG</div>
        <div className="skill">Node.js</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
