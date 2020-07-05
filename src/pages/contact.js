import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Buttons from "../components/buttons"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
    <h2 style={{ margin: 0 }}>
      <a
        href="https://github.com/Rittenweb"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        GitHub
      </a>
    </h2>
    <h2 style={{ margin: 0 }}>
      <a
        href="https://www.linkedin.com/in/bennett-winters-18a0024a/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        LinkedIn
      </a>
    </h2>
    <h2 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Resume
      </Link>
    </h2>
    <Buttons current={"contact"} />
  </Layout>
)

export default IndexPage
