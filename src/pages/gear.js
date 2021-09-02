import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import AmazonGearItem from "../components/AmazonGearItem/AmazonGearItem"
const GearsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const gears = [
    {
      title: "Audio Technica AT2020+ USB",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B00B5ZX9FM&asins=B00B5ZX9FM&linkId=3b471ab6add4b7df65ffa708ef3647ee&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title: "Blue Snowball Mic",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B014PYGTUQ&asins=B014PYGTUQ&linkId=b74f2b7f395174903edaccacd9fa8219&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title: "Elgato Key Light",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B07L755X9G&asins=B07L755X9G&linkId=56be4c244fcb8627f44781dafe7021b8&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title: "Sony a5100",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B00MHPAFAG&asins=B00MHPAFAG&linkId=bc9a2acba8bd74451e06acf50608a148&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title: "Sigma 16mm Lense",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B077BWD2BB&asins=B077BWD2BB&linkId=c50facf41bc8c1a9c40a39d1e947a9a4&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title: "Philips Hue Go",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B07Z8CNCLN&asins=B07Z8CNCLN&linkId=122ca3cd0ca1c8cf0c27bb9a0c4341c2&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title: "Logitech G PRO X Gaming Headset",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B07PDFBJZD&asins=B07PDFBJZD&linkId=556a5c8e651ff5ede7b61e714d980408&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title: 'ASUS TUF Gaming 27" 2K HDR Curved Monitor (VG27WQ1B)',
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B088MKHW7M&asins=B088MKHW7M&linkId=cf737f8e12a07b86fb2de5b813fcb990&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title:
        "SAMSUNG 27-Inch CRG5 240Hz Curved Gaming Monitor (LC27RG50FQNXZA)",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B07TGMC29J&asins=B07TGMC29J&linkId=0d74c9b810fd6452b852ac9bc80e0b8a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title: "Logitech G Pro Wireless Gaming Mouse",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B07GCKQD77&asins=B07GCKQD77&linkId=7e057ad94775286542fecc6d7e8564a6&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
    {
      title: "Corsair K70 RGB MK.2 Mechanical Gaming Keyboard",
      src:
        "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=ahsanayaz-20&marketplace=amazon&amp;region=US&placement=B07D5S54C6&asins=B07D5S54C6&linkId=4969139349a2c83f6fd42103f0b68c1e&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=5d1ad5&bg_color=ffffff",
    },
  ]
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Muhammad Ahsan Ayaz - Gear and Equipment" />
      <Bio />
      <h4>
        Gear and Equipment{" "}
        <span role="img" aria-label="point down emoji">
          👇
        </span>
      </h4>
      <div className="gear">
        {gears.map(gear => (
          <AmazonGearItem
            key={gear.src}
            src={gear.src?.replaceAll ? gear.src.replaceAll("&amp;", "&") : ""}
          />
        ))}
      </div>
    </Layout>
  )
}

export default GearsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
