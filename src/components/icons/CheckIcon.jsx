import React from 'react';
import PropTypes from '../../util/PropTypes';

const propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
};

const defaultProps = {
    className: null,
    size: '20',
    color: 'inherit',
};

const CheckIcon = ({ color, size, className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        height={size}
        width={size}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42L7 14.17z"
            fill={color}
        />
    </svg>
);

CheckIcon.propTypes = propTypes;
CheckIcon.defaultProps = defaultProps;

export default React.memo(CheckIcon);
