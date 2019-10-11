import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined' && 'HTMLPortalElement' in window) {
      this.addPortalToHome();
    }
  }

  addPortalToHome() {
    // Adding some styles with transitions
    const style = document.createElement('style');
    const initialScale = 0.4;
    style.innerHTML = `
      portal {
        cursor: pointer;
        position:fixed;
        opacity: 0;
        box-shadow: 0 0 20px 10px #999;
        border-radius: 10%;
        transform: scale(${initialScale});
        bottom: calc(20px + 30% * 0.4 - 50%);
        left: 0;
        right: 0;
        top: 0;
        margin: auto;
        z-index: 10000;
        width: 100%;
        height: 400px;
      }
      .portal-transition {
        transition:
          transform 1.5s,
          height 0.3s,
          width 0.3s,
          border-radius 0.2s,
          opacity 0.8s;
      }
      @media (prefers-reduced-motion: reduce) {
        .portal-transition {
          transition: all 0.001s;
        }
      }
      .portal-reveal {
        transform: scale(1.0);
        bottom: 0px;
        left: 0px;
        border-radius: 0;
        width: 100%;
        height: 100%;
      }
      .fade-in {
        opacity: 1.0;
      }
    `;
    const portal = document.createElement('portal');
    // Let's navigate into the WICG Portals spec page
    portal.src = 'https://ahsanayaz.com';
    // Add a class that defines the transition. Consider using 
    // `prefers-reduced-motion` media query to control the animation. 
    // https://developers.google.com/web/updates/2019/03/prefers-reduced-motion
    portal.classList.add('portal-transition');
    portal.addEventListener('click', evt => {
      // Animate the portal once user interacts
      portal.classList.add('portal-reveal');
    });
    portal.addEventListener('transitionend', evt => {
      if (evt.propertyName == 'transform') {
        // Activate the portal once the transition has completed
        portal.activate();
      }
    });
    document.body.append(style, portal);

    // Waiting for the page to load.
    // using setTimeout is a suboptimal way and it's best to fade-in
    // when receiving a load complete message from the portal via postMessage
    setTimeout(_ => portal.classList.add('fade-in'), 800);
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
