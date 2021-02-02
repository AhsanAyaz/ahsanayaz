/**
 * Socials component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./tag.css"
import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import { TAG_SIZE } from "../../constants/tag-size"

const Tag = ({ tag, size }) => {
  const { name } = tag
  return (
    <a className={`tag ${size}`} href={`/tags/${kebabCase(name)}`}>
      {name}
    </a>
  )
}

Tag.defaultProps = {
  size: TAG_SIZE.MEDIUM
}

Tag.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  size: PropTypes.string
}

export default Tag
