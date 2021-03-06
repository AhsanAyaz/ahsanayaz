import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./SubscriptionForm.scss"

const SubscriptionForm = () => {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [mailChimpResult, setResult] = useState({
    result: null,
    msg: null,
  })
  const _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email, {
      FNAME: firstName,
    })
    setResult(processResult(result))
  }

  function processResult({ result, msg }) {
    const message = msg.includes("already subscribed")
      ? "You are already subscribed to the newsletter"
      : msg
    return {
      result: result === "error" ? "danger" : result,
      msg: message,
    }
  }

  return (
    <div className="sub-form">
      {mailChimpResult.result && (
        <div className="sub-form__message">
          <div
            className={`alert alert-${mailChimpResult.result}`}
            dangerouslySetInnerHTML={{
              __html: mailChimpResult.msg,
            }}
          ></div>
          <button
            onClick={() => {
              setResult({
                result: null,
                msg: null,
              })
            }}
            type="button"
            className="btn-close close"
            aria-label="Close"
          ></button>
        </div>
      )}
      <form onSubmit={_handleSubmit} noValidate>
        <div className="sub-form__main">
          <h4 className="sub-form__main__heading" htmlFor="mce-EMAIL">
            Join the Newsletter
          </h4>
          <div className="mb-3 form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              defaultValue=""
              className="form-control"
              onChange={e => setFirstName(e.target.value)}
              placeholder="Your first name"
              required
            />
          </div>
          <div className="mb-3 form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              defaultValue=""
              className="form-control"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-3">
            <button
              disabled={!firstName || !email}
              type="submit"
              defaultValue="Subscribe"
              className="btn btn-success"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SubscriptionForm
