// Fixes the build warnings and the lack of styles in the RSS feed.
// https://github.com/gatsbyjs/gatsby/issues/20543
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import shortCodes from "./constants/short-codes"

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={shortCodes}>{element}</MDXProvider>
)
