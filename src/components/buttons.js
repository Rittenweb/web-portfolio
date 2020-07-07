import React from "react"
import Button from "./button"

export default function Buttons({ current, isBig }) {
  return (
    <div className={isBig ? "buttons buttons-big" : "buttons buttons-small"}>
      {current !== "" && <Button to="/" text="Home" imgOffset={-4} />}
      {current !== "about" && (
        <Button to="/about" text="About Me" imgOffset={-3} />
      )}
      {current !== "fairychess" && (
        <Button to="/fairychess" text="Fairy Chess" imgOffset={-2} />
      )}
      {current !== "antiadj" && (
        <Button to="/antiadj" text="Anti-Adjective Editor" imgOffset={-1} />
      )}
      {current !== "iclibrary" && (
        <Button to="/iclibrary" text="I.C. Library Homepage" imgOffset={0} />
      )}
      {current !== "pokecard" && (
        <Button to="/pokecard" text="PokéCard Scrambler" imgOffset={1} />
      )}
      {current !== "intimpossible" && (
        <Button
          to="/intimpossible"
          text="Intermediate Impossible"
          imgOffset={2}
        />
      )}
      {current !== "contact" && (
        <Button to="/contact" text="Contact Me" imgOffset={3} />
      )}
      <svg style={{ position: "fixed", zIndex: -2 }}>
        <filter id="lesserturbulence" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            id="ripple-filter-lesser"
            numOctaves="3"
            seed="2"
            baseFrequency="0.02 0.05"
          ></feTurbulence>
          <feDisplacementMap scale="12" in="SourceGraphic"></feDisplacementMap>
          <animate
            href="#ripple-filter-lesser"
            attributeName="baseFrequency"
            dur="60s"
            keyTimes="0;0.5;1"
            values="0.02 0.06;0.04 0.08;0.02 0.06"
            repeatCount="indefinite"
          />
        </filter>
      </svg>
    </div>
  )
}
