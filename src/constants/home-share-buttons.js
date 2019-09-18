import {FaTwitter, FaFacebook, FaGooglePlus, FaEnvelope, FaPinterest, FaLinkedin} from "react-icons/fa";
import { ShareButtonCircle } from "react-custom-share";

export const HOME_SHARE_BUTTONS_CONTENT = {
  url: "https://ahsanayaz.com/",
  button: ShareButtonCircle,
  buttons: [
    { network: "Twitter", icon: FaTwitter },
    { network: "Facebook", icon: FaFacebook },
    { network: "GooglePlus", icon: FaGooglePlus },
    { network: "Email", icon: FaEnvelope },
    { network: "Pinterest", icon: FaPinterest, media: "https://ahsanayaz.com/site-icon.png" },
    { network: "Linkedin", icon: FaLinkedin }
  ],
  text: `Check out Muhammad Ahsan Ayaz's Website`,
  longtext: `https://ahsanayaz.com . Ahsan is a GDE in Angular & Web Technologies and posts amazing content frequently. Do bookmark it to see more of the amazing stuff!`
}