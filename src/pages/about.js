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
        <div className="about-scroll">
          <div className="about-text">
            Before getting into web development, I earned an undergraduate
            degree in English literature and a graduate degree in creative
            writing. I've taught university-level writing in both fiction and
            essay forms. I believe that as crafts, writing and coding share a
            ton of skills, and I'll be thrilled to bore you with the details of
            that analogy if you ask!
          </div>
          <div className="about-text">
            Writing taught me to prioritize strong architecture/planning,
            clarity, and above all, user perception, and these have become my
            assets as a developer, too. To write quality code, you first need to
            have clear, quality thought about the problem at hand. To write
            maintainable, comprehensible code, you have to see it through the
            brain of another developer. To create a successful product, you have
            to see it through the emotions of the user. Being a self-taught
            developer has cultivated my tenacity and love for self-improvement
            in a craft as near-infinite, and as rewarding, as coding is.
          </div>
          <div className="about-text">
            I love the creativity and problem-solving inherent in coding,
            especially on the front end, where the feedback is quick and the raw
            potential to <i>create something</i> increases every year, as
            browsers get more powerful and APIs more ingenious. I'm no
            professional designer, but I get excited about beautiful UI and UX.
            I love creating products that look smooth and cohesive on the
            surface, but solve complex problems behind-the-screen. I love
            debugging. Maybe the task I love most on the front end is
            architecting React components and state for maintainability,
            extensibility, and efficient rendering.
          </div>
          <div className="about-text">
            I'm looking for a team where I can contribute immediately, but just
            as importantly, one where I'll be pushed to improve by learning
            better practices, more technologies, more difficult patterns, and
            more truths about the industry. A strong code review culture would
            be great. If you read all this, wow, that's pretty cool of you! I'd
            love to work with you! Contact me, and thanks for reading :)
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
