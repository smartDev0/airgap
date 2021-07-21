import React from 'react';
import PropTypes from '../util/PropTypes';

const propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};

const defaultProps = {
    title: null,
    link: null,
};

const HubspotCTA = ({ title, link }) => (
  <span className="hs-cta-wrapper" id={`hs-cta-wrapper-${link}`}>
    <span className={`hs-cta-node hs-cta-${link}`} id={`hs-cta-${link}`}>
      <div id="hs-cta-ie-element"></div>
      <a href={`https://cta-redirect.hubspot.com/cta/redirect/6848218/${link}`} target="_blank" rel="noreferrer">
        <img
          className="hs-cta-img"
          id={`hs-cta-img-${link}`}
          style={{ borderWidth: '0px' }}
          src={`https://no-cache.hubspot.com/cta/default/6848218/${link}.png`}
          alt={title}
        />
      </a>
    </span>
    <script charSet="utf-8" src="https://js.hscta.net/cta/current.js"></script>
    <script type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `hbspt.cta.load(6848218, '${link}', {});`,
      }}
    />
  </span>
);

HubspotCTA.propTypes = propTypes;
HubspotCTA.defaultProps = defaultProps;

export default HubspotCTA;




