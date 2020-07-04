import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3053ab`,
      position: "fixed",
      top: 0,
      zIndex: 2,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100vw",
        height: "5vw",
      }}
    >
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
