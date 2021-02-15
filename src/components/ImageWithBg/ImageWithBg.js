import React from 'react'
import './ImageWithBg.css'
import { rhythm } from '../../utils/typography'

const ImageWithBg = ({
  src,
  backgroundColor = '#1E1E1E',
  alt = '',
  imageHeight
}) => {
  return (
    <div className="image-with-bg" style={{
      backgroundColor,
      marginBottom: rhythm(1.5),
    }}>
      <img src={src} alt={alt} style={{
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: imageHeight ? `${imageHeight}px` : ''
      }}/>
    </div>
  )
}

export default ImageWithBg
