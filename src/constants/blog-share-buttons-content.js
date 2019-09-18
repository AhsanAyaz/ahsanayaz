import {FaTwitter, FaFacebook, FaGooglePlus, FaEnvelope, FaPinterest, FaLinkedin} from "react-icons/fa";
import { ShareButtonCircle } from "react-custom-share";

export const BLOG_SHARE_BUTTONS_CONTENT = ({slug, media, title, description}) => {
  return {
    url: `https://ahsanayaz.com${slug}`,
    button: ShareButtonCircle,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "GooglePlus", icon: FaGooglePlus },
      { network: "Email", icon: FaEnvelope },
      { network: "Pinterest", icon: FaPinterest, media: `https://ahsanayaz.com/${media ? media : 'site-icon.png'}` },
      { network: "Linkedin", icon: FaLinkedin }
    ],
    text: `${title}`,
    longtext: `${description}`
  }
}