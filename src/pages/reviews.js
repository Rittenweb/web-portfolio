import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const ReviewsPage = function () {
  let text = [
    [
      `A front-end developer tackling a full-stack app in a new language (!!)`,
      `No crazy feature design, just learn the framework and make it work! 
      Flask native sessions provide user login/registration security. 
      A search function reads the 5000 books that populate the PostgreSQL database,
      and Jinja-templating turns them into dynamic webpages with info cross-read from the Goodreads API.
      Users can leave reviews, which are written to the database.
      The database joins the Users, Books and Reviews tables on foreign ID keys.
      The app's api route (/api/<isbn>) allows public access to reviews left by site users!
      `,
    ],
  ]

  return (
    <Layout>
      <SEO title="Flask Book Reviews" />

      <Project
        title="Flask Book Reviews"
        video="https://www.youtube.com/embed/hkN7a6uw6as"
        source="https://github.com/Rittenweb/flask-book-reviews"
        live="https://winterreviews.herokuapp.com/"
        text={text}
      />
      <Buttons current={"reviews"} isBig={false} />
    </Layout>
  )
}

export default ReviewsPage
