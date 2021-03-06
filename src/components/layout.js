import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm"
import Bio from "./bio"

deckDeckGoHighlightElement()

const layoutCenterStyle = {
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(24),
  position: "relative",
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
}

const headerStyle = {
  ...layoutCenterStyle,
  paddingBottom: 0,
}
const mainStyle = {
  ...layoutCenterStyle,
  paddingTop: 0,
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
      <div
        className="logo-header"
        style={{
          ...scale(1.5),
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
      </div>
    )
  } else {
    header = (
      <div
        className="logo-header"
        style={{
          ...scale(0.7),
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
      </div>
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
      <header style={headerStyle}>{header}</header>
      <main style={mainStyle}>{children}</main>
      <section className="sub-container" style={{ marginTop: rhythm(1.5) }}>
        <div className="sub-container__content" style={layoutCenterStyle}>
          <SubscriptionForm />
        </div>
      </section>
      <section
        style={{
          ...layoutCenterStyle,
          marginTop: rhythm(1.5),
          padding: rhythm(1),
        }}
        className="bio-container"
      >
        <Bio />
      </section>
    </div>
  )
}

export default Layout
