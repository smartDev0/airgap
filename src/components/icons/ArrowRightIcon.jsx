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
    color: 'inherit',
};

const ArrowRightIcon = ({ color, size, className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={size}
        width={size}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
            d="M14.6956 4.23824C14.2964 3.9019 13.6992 3.92169 13.3233 4.29759L13.264 4.36222C12.9276 4.76141 12.9474 5.35858 13.3233 5.73448L18.5892 11H2.31513L2.26176 11.0027C1.89172 11.0409 1.59998 11.4728 1.59998 12C1.59998 12.5523 1.92016 13 2.31513 13H18.4628L13.1976 18.2655L13.1382 18.3301C12.8019 18.7293 12.8217 19.3265 13.1976 19.7024C13.5944 20.0992 14.2377 20.0992 14.6345 19.7024L22.4 11.9371L14.7602 4.29759L14.6956 4.23824Z"
        />
    </svg>
);

ArrowRightIcon.propTypes = propTypes;
ArrowRightIcon.defaultProps = defaultProps;

export default React.memo(ArrowRightIcon);
