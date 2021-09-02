import React from "react"

const AmazonGearItem = ({
  width = 120,
  height = 240,
  marginWidth = 0,
  marginHeight = 0,
  frameBorder = 0,
  src = "",
}) => {
  return (
    <div className="gear__item">
      <iframe
        style={{
          width,
          height,
        }}
        marginWidth={marginWidth}
        marginHeight={marginHeight}
        scrolling="no"
        frameBorder={frameBorder}
        src={src}
      ></iframe>
    </div>
  )
}

export default AmazonGearItem
