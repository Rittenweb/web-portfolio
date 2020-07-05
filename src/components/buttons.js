import React from "react"
import { Link } from "gatsby"

export default function buttons({ current }) {
  return (
    <div>
      {current !== "" && (
        <Link to="/">
          <div className="button">Home</div>
        </Link>
      )}
      {current !== "about" && (
        <Link to="/about">
          <div className="button">About Me</div>
        </Link>
      )}
      {current !== "fairychess" && (
        <Link to="/fairychess">
          <div className="button">Fairy Chess</div>
        </Link>
      )}
      {current !== "antiadj" && (
        <Link to="/antiadj">
          <div className="button">Anti-Adjective Editor</div>
        </Link>
      )}
      {current !== "iclibrary" && (
        <Link to="/iclibrary">
          <div className="button">I.C. Library Homepage</div>
        </Link>
      )}
      {current !== "pokecard" && (
        <Link to="/pokecard">
          <div className="button">PokéCard Scrambler</div>
        </Link>
      )}
      {current !== "intimpossible" && (
        <Link to="/intimpossible">
          <div className="button">Intermediate Impossible</div>
        </Link>
      )}
      {current !== "contact" && (
        <Link to="/contact">
          <div className="button">Contact Me</div>
        </Link>
      )}
    </div>
  )
}
