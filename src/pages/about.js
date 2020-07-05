import React from "react"
import Buttons from "../components/buttons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Buttons current={"about"} />
    </div>
    <div>
      <h1>About Me</h1>
      <div>
        I have an undergraduate degree in English literature and a graduate
        degree in creative writing. I believe that writing—essay, fiction,
        whatever—has a ton in common with coding, and I'll be thrilled to bore
        you with the details of that analogy if you ask!
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

export default AboutPage
