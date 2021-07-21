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

const TwitterIcon = ({ color, size, className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 13"
        height={size}
        width={size}
    >
        <path
            fill={color}
            fillRule="nonzero"
            d="M5.613 12.995c6.03 0 9.33-4.995 9.33-9.33 0-.142 0-.284-.01-.426a7.048 7.048 0 001.644-1.696 6.574 6.574 0 01-1.888.508A3.27 3.27 0 0016.13.244c-.63.375-1.34.65-2.08.792A3.271 3.271 0 0011.652 0a3.278 3.278 0 00-3.279 3.28c0 .253.03.507.081.75A9.32 9.32 0 011.694.6a3.254 3.254 0 00-.447 1.655c0 1.137.579 2.142 1.462 2.73a3.302 3.302 0 01-1.482-.415v.04a3.28 3.28 0 002.63 3.218 3.467 3.467 0 01-.864.112c-.213 0-.416-.02-.619-.05a3.285 3.285 0 003.066 2.273 6.567 6.567 0 01-4.071 1.401c-.274 0-.528-.01-.792-.04a9.267 9.267 0 005.036 1.472z"
        />
    </svg>
);

TwitterIcon.propTypes = propTypes;
TwitterIcon.defaultProps = defaultProps;

export default React.memo(TwitterIcon);
