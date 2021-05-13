import React from "react"
import "./BuyMeACoffee.css"

const BuyMeACoffee = () => {
  return (
    <div className="bmac-wrapper">
      <a
        title="Like Ahsan's work? Buy him a coffee"
        className="bmac"
        target="_blank"
        rel="noopener noreferer"
        href="https://www.buymeacoffee.com/muhd.ahsanayaz"
      >
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=muhd.ahsanayaz&button_colour=BD5FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00" />
      </a>
    </div>
  )
}

export default BuyMeACoffee
