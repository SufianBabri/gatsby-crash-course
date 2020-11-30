import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  const linkStyle = {
    color: "#333",
    textDecoration: "none",
  }
  return (
    <div style={{ background: "#f4f4f4", paddingTop: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" style={linkStyle}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/blog" style={linkStyle}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
