import React from "react"
import Img from "gatsby-image"
import GitHubImageSmall from "./githubImageSmall"

export default function Project({ title, video, source, live, text }) {
  return (
    <>
      <div className="video-block">
        <h2 className="video-header">
          {title}
          <div>
            <a href={source}>
              <GitHubImageSmall />
            </a>
            <a href={live} style={{ fontSize: "1rem" }}>
              Live
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
              <p className="challenge-text">
                <span className="challenge-header">Challenge: </span>
                {pair[0]}
              </p>
              <p className="challenge-text solution">
                <span className="challenge-header solution-header">
                  Solution:{" "}
                </span>
                {pair[1]}
              </p>
            </>
          )
        })}
      </div>
    </>
  )
}
