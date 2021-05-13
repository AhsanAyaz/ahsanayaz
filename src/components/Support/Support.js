import React from "react"
import BuyMeACoffee from "../BuyMeACoffee/BuyMeACoffee"
import "./Support.css"

const Support = ({ size = 20 }) => {
  const socials = [
    {
      link: "https://youtube.com/c/Ahsanayaz",
      image:
        "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white",
    },
    {
      link: `https://www.github.com/ahsanayaz`,
      image:
        "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
    },
    {
      link: `https://twitter.com/muhd_ahsanayaz`,
      image:
        "https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white",
    },
    {
      link: `https://www.linkedin.com/in/ahsanayaz`,
      image:
        "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    },
    {
      link: `https://www.instagram.com/muhd.ahsanayaz`,
      image:
        "https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white",
    },
    {
      link: `https://www.facebook.com/muhd.ahsanayaz`,
      image:
        "https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white",
    },
    {
      link: `https://www.tiktok.com/@muhd.ahsanayaz`,
      image:
        "https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white",
    },
    {
      link: `https://discord.gg/rEBSSh926k`,
      image:
        "https://img.shields.io/discord/814191682282717194.svg?label=CodeZen&logo=Discord&colorB=7289da&style=for-the-badge",
    },
  ]
  return (
    <div className="support">
      <h2>Like my work?</h2>
      <BuyMeACoffee />
      <div>Or follow &amp; connect with me on my Socials:</div>
      <p className="support__socials">
        {socials.map(social => {
          return (
            <a
              key={social.link}
              title={social.link}
              className="support__socials__social"
              target="_blank"
              rel="noopener noreferer"
              href={social.link}
            >
              <img src={social.image} />
            </a>
          )
        })}
      </p>
    </div>
  )
}

export default Support
