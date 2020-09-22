import React, { useState } from "react"
import { Link } from "gatsby"

export default function Button({ to, text, isBig }) {
  const [hovering, setHovering] = useState(false)

  const handleMouseEnter = function handleMouseEnter(e) {
    setHovering(true)
  }

  const handleMouseLeave = function handleMouseLeave(e) {
    setHovering(false)
  }

  let backgroundClass
  if (hovering) {
    if (isBig) {
      backgroundClass = "button-image button-image-highlight-big"
    } else {
      backgroundClass = "button-image button-image-highlight-small"
    }
  } else {
    if (isBig) {
      backgroundClass = "button-image button-image-nohighlight-big"
    } else {
      backgroundClass = "button-image button-image-nohighlight-small"
    }
  }

  return (
    <Link to={to} style={{ height: "9%" }}>
      <div
        className="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          fontSize: isBig ? "calc(0.2rem + 1.1vw)" : "calc(0.7rem + 0.4vw)",
        }}
      >
        <div className="button-text">{text}</div>
        <div className={backgroundClass}></div>
        <div
          className={
            isBig
              ? "button-image button-image-nohighlight-big-backup"
              : "button-image button-image-nohighlight-small-backup"
          }
        ></div>
      </div>
    </Link>
  )
}
