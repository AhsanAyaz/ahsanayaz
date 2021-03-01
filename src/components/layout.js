import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm"

deckDeckGoHighlightElement()

const layoutCenterStyle = {
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(24),
  position: "relative",
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
}

function Layout({ location, title, children, slug }) {
  const [smallScreen, setSmallScreen] = useState(null)

  useEffect(() => {
    setSmallScreen(window.screen.width < 1000)
  }, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        className="logo-header"
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontSize: smallScreen ? 30 : 55,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        className="logo-header"
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div>
      <Helmet title={data.site.siteMetadata.title}>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${data.site.siteMetadata.siteUrl}${slug}twitter-card.jpg`}
        />
      </Helmet>
      <header style={layoutCenterStyle}>{header}</header>
      <main style={layoutCenterStyle}>{children}</main>
      <footer className="footer" style={{ marginTop: rhythm(1.5) }}>
        <div className="footer__content" style={layoutCenterStyle}>
          <SubscriptionForm />
        </div>
      </footer>
    </div>
  )
}

export default Layout
