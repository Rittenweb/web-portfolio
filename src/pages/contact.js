import React from "react"
import Layout from "../components/layout"
import Buttons from "../components/buttons"
import SEO from "../components/seo"
import PdfImage from "../components/pdfImage"

const ContactPage = () => (
  <Layout>
    <SEO title="Bennett Winters: Contact Info" />
    <div>
      <div
        className="contact-block"
        style={{ fontFamily: `'Gayathri', sans-serif` }}
      >
        <h1
          className="gradient-text"
          style={{ width: "calc(140px + 8vw)", fontSize: "calc(1.4rem + 1vw)" }}
        >
          Contact Me
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ margin: "0 1.5vw 0 0" }}>
            My email and phone are on my resume:
          </h3>
          <PdfImage />
        </div>
        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thanks"
        >
          <input type="hidden" name="form-name" value="contact" />
          <h3>Or, send me a message here, and I'll email you back!</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="contact-input"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="contact-input"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-input contact-message"
          ></textarea>
          <button type="submit" className="contact-send orange-box">
            <div className="gradient-text orange-button-text">{"Send >>"}</div>
          </button>
        </form>
      </div>
    </div>
    <Buttons current={"contact"} isBig={false} />
  </Layout>
)

export default ContactPage
