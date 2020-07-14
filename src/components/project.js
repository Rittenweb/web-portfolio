import React from "react"
import GitHubImageSmall from "./githubImageSmall"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default function Project({ title, video, source, live, text }) {
  return (
    <div className="project-block">
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
            <OutboundLink href={source}>
              <GitHubImageSmall />
            </OutboundLink>
            <OutboundLink href={live} className="orange-box live-button">
              <div className="gradient-text orange-button-text">Live</div>
            </OutboundLink>
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
            <div className="challenge-pair">
              <div className="challenge-single">
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
              <div className="challenge-single">
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
