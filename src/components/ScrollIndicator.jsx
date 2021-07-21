import React from 'react';
import Link from './Link';
import PropTypes from '../util/PropTypes';

import MouseVisual from '../images/visuals/mouse.svg';

const ScrollIndicator = ({ to }) => (
    <Link to={to}>
        <img src={MouseVisual} className="mr-2" width="22" alt="scroll down mouse" />
        <span
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              paddingTop: '3px',
            }}
        >
            Tell me more
        </span>
    </Link>
);

ScrollIndicator.propTypes = {
    to: PropTypes.string.isRequired,
};

export default ScrollIndicator;
