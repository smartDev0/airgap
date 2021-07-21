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
        <g>
            <circle r="50%" cx="50%" cy="50%" fill={color} />
        </g>
    </svg>
);

CheckIcon.propTypes = propTypes;
CheckIcon.defaultProps = defaultProps;

export default React.memo(CheckIcon);
