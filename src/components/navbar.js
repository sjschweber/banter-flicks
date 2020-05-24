import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavBar = () => (
  <nav>
    <div>
    <Link to="/page-3">Page 3</Link>
    <Link to="/page-2">Page 2</Link>
    </div>
  </nav>
)

export default NavBar
