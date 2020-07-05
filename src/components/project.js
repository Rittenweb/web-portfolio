import React from "react"

export default function Project({ title, link, source, text }) {
  return (
    <>
      <div style={{ marginLeft: "7vw" }}>
        <h1>{title}</h1>
        <div className="video-wrapper">
          <iframe
            src={link}
            frameBorder="0"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
        <a href={source}>Source</a>
      </div>
      <div style={{ margin: "1.5vw" }}>
        {text.map(pair => {
          return (
            <>
              <h3>{pair[0]}</h3>
              <h3>{pair[1]}</h3>
            </>
          )
        })}
        <h3>Challenge: Large, complex and inter-dependent state objects</h3>
        <h3>
          Solution: a single useReducer and app-wide dispatch with useContext
        </h3>
      </div>
    </>
  )
}
