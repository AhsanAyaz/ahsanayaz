import "./src/styles/global.css"
import "typeface-montserrat"
import "typeface-merriweather"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `AhsanAyaz.com has been updated. ` + `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
