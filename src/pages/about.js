import React from "react"
import Buttons from "../components/buttons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PdfImage from "../components/pdfImage"

const AboutPage = () => (
  <Layout>
    <SEO title="Bennett Winters: About" />
    <div className="about-block">
      <div>
        <h1>About Me</h1>
        <div className="about-text">
          I have an undergraduate degree in English literature and a graduate
          degree in creative writing. I've taught university-level writing in
          both fiction and essay forms. I believe writing has a ton in common
          with coding, and I'll be thrilled to bore you with the details of that
          analogy if you ask!
        </div>
        <div className="about-text">
          For now I'll just say... Writing has made me focused on the end
          product. What the reader/user sees and feels is what matters in the
          end. I'm no professional designer, but I get excited about UI and UX.
        </div>
        <div className="about-text">
          A lot about coding gets me excited, especially on the front end. I'm
          looking for a team. I love the front end. I love the creation
          potential. I love the immediate feedback. I love architecting React
          components and state.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: "0 16px 0 0" }}>Skills: </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginRight: "40px",
          }}
        >
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Gatsby</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Jest</div>
          <div className="skill">Node.js</div>
          <div className="skill">GraphQL</div>
          <div className="skill">Python (Flask)</div>
        </div>
        <h1 style={{ margin: "0 16px 0 0" }}>Resume: </h1>
        <PdfImage />
      </div>
    </div>
    <Buttons current={"about"} isBig={false} />
  </Layout>
)

export default AboutPage
