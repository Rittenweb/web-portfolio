import React from "react"
import GitHubImageSmall from "./githubImageSmall"

export default function Project({ title, video, source, live, text }) {
  return (
    <>
      <div className="video-block">
        <h2 className="video-header">
          {title}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a href={source}>
              <GitHubImageSmall />
            </a>
            <a
              href={live}
              style={{ width: "28px", fontSize: "1rem" }}
              className="orange-box"
            >
              <div className="gradient-text orange-button-text">Live</div>
            </a>
          </div>
        </h2>
        <div className="video-wrapper">
          <iframe
            src={video}
            frameBorder="0"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      </div>
      <div className="challenge-block">
        {text.map(pair => {
          return (
            <>
              <div style={{ display: "flex" }}>
                <div
                  className="gradient-bar"
                  style={{
                    marginRight: "8px",
                  }}
                ></div>
                <div>
                  <span className="challenge-header">Challenge: </span>
                  {pair[0]}
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  className="gradient-bar"
                  style={{
                    marginRight: "8px",
                    marginLeft: "30px",
                  }}
                ></div>
                <div>
                  <span className="solution-header">Solution: </span>
                  {pair[1]}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
