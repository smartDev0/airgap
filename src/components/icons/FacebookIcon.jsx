import React from 'react';
import PropTypes from '../../util/PropTypes';

const propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
};

const defaultProps = {
    className: null,
    size: '24',
    color: '#3A3A3A',
};

const FacebookIcon = ({ color, size, className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9 16"
        height={size}
        width={size}
    >
        <path
            fill={color}
            fillRule="nonzero"
            d="M5.674 16V9h2.334l.444-2.896H5.674V4.225c0-.792.388-1.564 1.632-1.564H8.57V.196S7.423 0 6.327 0C4.04 0 2.543 1.387 2.543 3.897v2.207H0V9h2.543v7h3.13z"
        />
    </svg>
);

FacebookIcon.propTypes = propTypes;
FacebookIcon.defaultProps = defaultProps;

export default React.memo(FacebookIcon);
