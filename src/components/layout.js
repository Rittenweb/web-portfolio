import React from "react"
import BackgroundMoving from "./backgroundmoving"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100vw",
          }}
        >
          {children}
        </div>
        <div className="background"></div>
      </main>
      <BackgroundMoving />
    </>
  )
}

export default Layout
