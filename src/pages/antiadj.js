import React from "react"
import Buttons from "../components/buttons.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const AntiadjPage = function () {
  let text = [
    [
      `The editor-content parsing function disrupts UX, because language-processing and API calls both take time to resolve.`,
      `Debounce the function to only run after the user has not typed for two seconds. Then run NLP first, compare 
      the number of adjective-matches to last time, and only if the number of matches has changed, fetch synonyms and rebuild the editor DOM.`,
    ],
    [
      `Every time the language processing function runs and the innerHTML content of the editor is rebuilt, the caret resets to the beginning of the editor.`,
      `An algorithm that cheats by assuming new content the user has typed since last update is behind the current caret position. It counts 
      the DOM nodes backward from the end of the editor content to the current caret postion, and then counts the same way again in the updated DOM.`,
    ],
  ]

  return (
    <Layout>
      <SEO title="Anti-Adjective" />

      <Project
        title="Anti-Adjective Text Editor"
        video="https://drive.google.com/file/d/1lhksEkZ5W_nMXwEmDC1iZisatp0B_3hE/preview"
        source="https://github.com/Rittenweb/anti-adjective"
        live="https://anti-adjective.netlify.app/"
        text={text}
      />
      <Buttons current={"antiadj"} isBig={false} />
    </Layout>
  )
}

export default AntiadjPage
