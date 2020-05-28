import { Link, StaticQuery, graphql} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {Helmet} from 'react-helmet'

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `#457b9d`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{marginTop: '10px'}}>
          {menuLinks.map((item, i) => {
            return <Link
              style={{
                color: 'white',
                fontWeight: 700,
                textDecoration: 'none',
                marginRight: '15px'
              }}
              to={item.link}>{
                item.name}
              </Link>
          })}
      </div>
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
