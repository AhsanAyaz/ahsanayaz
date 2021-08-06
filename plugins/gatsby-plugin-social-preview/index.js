const path = require("path")
const jimp = require("jimp")

module.exports = ({ markdownNode }) => {
  const { frontmatter, fields } = markdownNode
  if (!fields || !fields.slug) {
    return Promise.resolve()
  }
  const output = path.join("./public", fields.slug, "seo.jpg")

  return Promise.all([
    jimp.read(path.join(__dirname, "meta-placeholder.png")),
    jimp.loadFont(jimp.FONT_SANS_128_BLACK),
  ]).then(([image, font]) => {
    image
      .print(
        font,
        300,
        450,
        frontmatter.title
          .replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
            ""
          )
          .trim(),
        2000
      )
      .write(output)
  })
}
