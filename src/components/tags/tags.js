import React from 'react'
import Tag from '../tag/tag'
import PropTypes from 'prop-types'
import './tags.css'
import { TAG_SIZE } from '../../constants/tag-size'

const Tags = ({ tags, size }) => {
  return (
    <div className="tags">
      {
        tags.map((tag) => {
          return <Tag size={size} key={tag.name} tag={tag} />
        })
      }
    </div>
  )
}
Tags.defaultProps = {
  size: TAG_SIZE.MEDIUM
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  size: PropTypes.string
}

export default Tags
