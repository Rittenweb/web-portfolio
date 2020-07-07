import React from "react"
import Buttons from "../components/buttons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksPage = () => {
  return (
    <Layout>
      <SEO title="Bennett Winters: Home" />
      <div className="home-block" style={{ justifyContent: "center" }}>
        <div style={{ margin: "30px 0" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "40px" }}>
            Thanks for the message :)
          </h1>
          <div>
            <h3 style={{ marginBottom: "10px" }}>
              I'll email you back shortly...
            </h3>
          </div>
        </div>
      </div>
      <Buttons current={""} isBig={false} />
    </Layout>
  )
}

export default ThanksPage
