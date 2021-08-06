import React from "react"
import "./SocialBadges.css"

const SocialBadges = ({ size = 20, noHeading = false }) => {
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
        "https://img.shields.io/discord/814191682282717194.svg?label=CodeWithAhsan&logo=Discord&colorB=7289da&style=for-the-badge",
    },
  ]
  return (
    <p className="social-badges">
      {socials.map(social => {
        return (
          <a
            key={social.link}
            title={social.link}
            className="social-badges__social"
            target="_blank"
            rel="noopener noreferrer"
            href={social.link}
          >
            <img alt="social" src={social.image} />
          </a>
        )
      })}
    </p>
  )
}

export default SocialBadges
