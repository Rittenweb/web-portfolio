import React from "react"
import Buttons from "../components/buttons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PdfImage from "../components/pdfImage"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about-block">
      <div>
        <h1
          className="gradient-text"
          style={{
            width: "calc(140px + 8vw)",
            fontSize: "calc(1.4rem + 1vw)",
            marginBottom: "20px",
          }}
        >
          About Me
        </h1>
        <div className="about-scroll" style={{ maxHeight: "30vh" }}>
          <div className="about-text">
            I have an undergraduate degree in English literature and a graduate
            degree in creative writing. I've taught university-level writing in
            both fiction and essay forms. I believe writing has a ton in common
            with coding, and I'll be thrilled to bore you with the details of
            that analogy if you ask!
          </div>
          <div className="about-text">
            For now I'll just say... Writing has made me focused on the end
            product. What the reader/user sees and feels is what matters in the
            end. I'm no professional designer, but I get excited about UI and
            UX.
          </div>
          <div className="about-text">
            A lot about coding gets me excited, especially on the front end. I'm
            looking for a team. I love the front end. I love the creation
            potential. I love the immediate feedback. I love architecting React
            components and state.
          </div>
        </div>
      </div>
      <div className="skills-and-resume">
        <h1 style={{ margin: "16px", fontSize: "calc(.7rem + 1vw)" }}>
          Proficiencies:{" "}
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginRight: "16px",
          }}
        >
          <div className="orange-box">
            <div className="gradient-text">JavaScript</div>
          </div>
          <div className="orange-box">
            <div className="gradient-text">React</div>
          </div>
          <div className="orange-box">
            <div className="gradient-text">Gatsby</div>
          </div>
          <div className="orange-box">
            <div className="gradient-text">HTML</div>
          </div>
          <div className="orange-box">
            <div className="gradient-text">CSS</div>
          </div>
          <div className="orange-box">
            <div className="gradient-text">Jamstack</div>
          </div>
          <div className="orange-box">
            <div className="gradient-text">Jest</div>
          </div>
          <div className="orange-box">
            <div className="gradient-text">Git</div>
          </div>
        </div>
        <h1 style={{ margin: "16px", fontSize: "calc(.7rem + 1vw)" }}>
          Resume:{" "}
        </h1>
        <PdfImage />
      </div>
    </div>
    <Buttons current={"about"} isBig={false} />
  </Layout>
)

export default AboutPage
