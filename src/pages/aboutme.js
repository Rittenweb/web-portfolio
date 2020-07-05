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
      <div>
        <h1>Bennett Winters</h1>
        <h4>I'm a self-taught Front-End Developer</h4>
        <h4>...and general Creative Type Guy</h4>
      </div>
      <div>
        <Link to="/">
          <div className="button">Home</div>
        </Link>
        <div className="button">Skills</div>
        <div className="button">Fairy Chess</div>
        <div className="button">Anti-Adjective Text Editor</div>
        <div className="button">Immaculate Conception Library Homepage</div>
        <div className="button">PokéCard Scrambler</div>
        <div className="button">Intermediate Impossible</div>
        <div className="button">Contact Me</div>
      </div>
    </div>
    <div style={{ marginBottom: "25%" }}>
      <h1>About Me</h1>
      <div>
        I have an undergraduate degree in English literature and a graduate
        degree in creative writing. I've come to believe that writing—essay,
        fiction, whatever—has a ton in common with coding, and I'll be thrilled
        to bore you with the details of that analogy if you ask!
      </div>
      <div>For now I'll just say...</div>
    </div>
    <div style={{ marginBottom: "25%" }}>
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
    <h1>Fairy Chess</h1>
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
    <h1>PokéCard Scrambler</h1>
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
    <h1>Intermediate Impossible</h1>
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
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div>
          <div>
            <input type="text" name="user_name" placeholder="Your Name" />
          </div>
          <div>
            <input type="email" name="user_email" placeholder="Your Email" />
          </div>
        </div>
        <div className="message">
          <textarea name="message" placeholder="Your Message"></textarea>
        </div>
        <input type="submit" value="SEND >>" className="send" />
      </form>
    </div>
  </Layout>
)

export default IndexPage
