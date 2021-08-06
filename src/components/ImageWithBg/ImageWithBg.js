import React from "react"
import "./ImageWithBg.css"
import { rhythm } from "../../utils/typography"

const ImageWithBg = ({
  src,
  backgroundColor = "#1E1E1E",
  alt = "",
  title = "",
  imageHeight,
  caption = "",
  textColor = "black",
  id = null,
  noLink = false,
  objectFit = "contain",
}) => {
  let linkId = null
  if (id) {
    linkId = id
  } else if (caption !== "") {
    linkId = caption.toLowerCase().replace(/ +/g, "-")
  }
  return (
    <div
      className="image-with-bg"
      style={{
        backgroundColor,
        marginBottom: rhythm(1.5),
      }}
    >
      {noLink === false && linkId !== null ? <div id={linkId} /> : null}
      <img
        src={src}
        alt={alt}
        title={title}
        style={{
          marginBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
          height: imageHeight ? `${imageHeight}px` : "",
          objectFit,
        }}
      />
      {caption ? (
        <div
          className="img-caption"
          style={{
            color: textColor,
          }}
        >
          {caption}
        </div>
      ) : null}
    </div>
  )
}

export default ImageWithBg
