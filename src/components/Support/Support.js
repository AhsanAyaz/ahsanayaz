import React from "react"
import BuyMeACoffee from "../BuyMeACoffee/BuyMeACoffee"
import SocialBadges from "../../components/SocialBadges/SocialBadges"

const Support = () => {
  return (
    <div className="support">
      <h2>Like my work?</h2>
      <BuyMeACoffee />
      <div>Or follow &amp; connect with me on my Socials:</div>

      <SocialBadges />
    </div>
  )
}

export default Support
