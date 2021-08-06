import React from "react"
import PromotionBanner from "../PromotionBanner/PromotionBanner"
const AngularCookbook = () => {
  return (
    <PromotionBanner title="">
      <div className="text-center">
        <a
          rel="noopener noreferrer"
          href="https://www.amazon.com/Angular-Cookbook-recipes-enterprise-scale-development-dp-1838989439/dp/1838989439/?"
        >
          <span role="img" aria-label="fire emoji">
            🔥
          </span>{" "}
          Angular Cookbook{" "}
          <span role="img" aria-label="book emoji">
            📖
          </span>
          &nbsp; - Over 80 actionable recipes every Angular developer should
          know
        </a>{" "}
      </div>
      <br />
      <div className="text-center">Get your copy today!</div>
    </PromotionBanner>
  )
}

export default AngularCookbook
