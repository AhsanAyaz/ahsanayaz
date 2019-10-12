import React, {useEffect} from "react"
import { rhythm } from "../utils/typography"
import { EXTERNAL_URLS } from '../constants/external-urls';

function ProjectPortal({ project  }) {
  let embedContainer = null;
  let portal = null;
  let initialY = 0;
  let initialWidth = 0;
  let projectCardWidth = 0;
  const src = new URL(`${EXTERNAL_URLS.PROJECTS}/#/open-source/${project.id}?portal=true&ts=${Date.now()}`);
  const onEmbedContainerClick = ev => {
    if (ev.target === portal) {
      animateAndActivate()
    }
  }
  const animateAndActivate = () => {
    const clientCardMargin = 20;
    // Animate the embed container
    initialY = embedContainer.getBoundingClientRect().y;
    embedContainer.style.bottom = `${0}px`;
    embedContainer.style.transition = `bottom 0.6s cubic-bezier(.49,.86,.37,1.01),
    left 0.3s cubic-bezier(.49,.86,.37,1.01), 
    width 0.3s cubic-bezier(.49,.86,.37,1.01),
    padding-top 0.3s cubic-bezier(.49,.86,.37,1.01)`;
    
    initialWidth = embedContainer.getBoundingClientRect().width;
    embedContainer.style.margin = 'auto';
    embedContainer.style.width = `${initialWidth}px`;
    embedContainer.style.position = 'absolute';
    embedContainer.style.bottom = `${initialY - clientCardMargin}px`;
    if (embedContainer.clientWidth >= 800) {
      embedContainer.style.width = `${630 - clientCardMargin}px`;
      projectCardWidth = 630;
    } else {
      embedContainer.style.width = '100%';
      projectCardWidth = embedContainer.clientWidth;
    }
    projectCardWidth = projectCardWidth - clientCardMargin // 16 is the margin of the target page's card;
    embedContainer.style.paddingTop = 'calc(95% * 0.65)';
    portal.postMessage({ control: 'hide' }, src.origin);
    portal.postMessage({ projectCardWidth }, src.origin);
  }

  const initEventListeners = (ev) => {
    // Event fires when coming back from TTT Archive

    // Event fires after the portal on-click animation finishes
    embedContainer.addEventListener('transitionend', (evt) => {
      // We wait until the top transition finishes
      if (evt.propertyName !== 'bottom') {
          return;
      }
      activateAfterAnimation();
    });
  }

  const portalBackEvent = (evt) => {
    window.removeEventListener('portalactivate', portalBackEvent);
    embedContainer.style.opacity = 1;
    const predecessor = evt.adoptPredecessor();
    // show the scroll bar when coming back
    document.body.classList.remove('hide-scroll-bars');
    document.documentElement.style.overflowY = "scroll";
    embedContainer.style.width = `${initialWidth}px`;
    
    // embed predecessor
    returnFromEmbed(predecessor);
  };

  const activateAfterAnimation = () => {
    const scrollTop = window.scrollY;
    // Activate portal with data used in the activated page
    portal.activate({
        data: {
          initialY: initialY,
          activatedWidth: embedContainer.getBoundingClientRect().width,
          initialWidth: initialWidth
        }
    }).then((_) => {
        // Check if this page was adopted by the embedded content.
        if (!window.portalHost) {
            return;
        }

        window.addEventListener('portalactivate', portalBackEvent);

        // Listen to messages
        window.portalHost.addEventListener('message', (evt) => {
            // act upon receiving message
        });
        setTimeout(() => {
          window.scrollTo({
            top: scrollTop
          });
          // Reset the position of the container after the portal activates
          _resetPositionOfEmbedContainer();
        }, 0);
    });
  }

  const _resetPositionOfEmbedContainer =() => {
    // hide the scroll bar so that it won't show when used as a predecessor 
    embedContainer.style.transition = '';
    embedContainer.style.width = '100%';
    embedContainer.style.position = 'relative';
    embedContainer.style.paddingTop = '0';
    embedContainer.style.bottom = '0px';
    embedContainer.style.left = '0px';
    embedContainer.style.opacity = 0;
  }

  const returnFromEmbed = (predecessor) => {
    predecessor.style.width = '100%';
    predecessor.style.height = '400px';
    predecessor.style.borderRadius = '6px';
    portal.replaceWith(predecessor);
    portal = predecessor;
  }

  useEffect(() => {
    initEventListeners();
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        position: 'relative',
        width: '100%',
        height: '400px',
        display: 'block',
        maxWidth: rhythm(24),
        padding: 0,
      }}
    >
      <div style={{background: 'transparent'}} className="project" onClick={onEmbedContainerClick} ref={r => embedContainer = r}>
        <portal style={{width: '100%', height: '400px', borderRadius: '6px'}}
          ref={p => portal = p}
          src={src}>

          </portal>
      </div>
    </div>
  )
}

export default ProjectPortal