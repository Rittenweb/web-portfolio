import React from "react"
import Button from "./button"

export default function Buttons({ current, isBig }) {
  return (
    <div className={isBig ? "buttons buttons-big" : "buttons buttons-small"}>
      {current !== "" && <Button to="/" text="Home" isBig={isBig} />}
      {current !== "about" && (
        <Button to="/about" text="About Me" isBig={isBig} />
      )}
      {current !== "fairychess" && (
        <Button to="/fairychess" text="Fairy Chess" isBig={isBig} />
      )}
      {current !== "antiadj" && (
        <Button to="/antiadj" text="Anti-Adjective Editor" isBig={isBig} />
      )}
      {current !== "iclibrary" && (
        <Button to="/iclibrary" text="I.C. Library Homepage" isBig={isBig} />
      )}
      {current !== "reviews" && (
        <Button to="/reviews" text="Flask Book Reviews" isBig={isBig} />
      )}
      {current !== "pokecard" && (
        <Button to="/pokecard" text="PokéCard Scrambler" isBig={isBig} />
      )}
      {current !== "intimpossible" && (
        <Button
          to="/intimpossible"
          text="Intermediate Impossible"
          isBig={isBig}
        />
      )}
      {current !== "contact" && (
        <Button to="/contact" text="Contact Me" isBig={isBig} />
      )}
    </div>
  )
}
