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
    color: '#0F1E57',
};

const AngleDownIcon = ({ color, size, className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={size}
        width={size}
    >
        <path
            transform="translate(-1361.000000, -5898.000000)"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1373.7,5915.5l9.1-9.2c0.4-0.4,0.4-1,0-1.3l-0.6-0.6c-0.4-0.4-1-0.4-1.3,0l-7.8,8l-7.8-8 c-0.4-0.4-1-0.4-1.3,0l-0.6,0.6c-0.4,0.4-0.4,1,0,1.3l9.1,9.2C1372.7,5915.9,1373.3,5915.9,1373.7,5915.5z"
            fill={color}
        />
    </svg>
);

AngleDownIcon.propTypes = propTypes;
AngleDownIcon.defaultProps = defaultProps;

export default React.memo(AngleDownIcon);
