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

const LinkedInIcon = ({ color, size, className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 14"
        height={size}
        width={size}
    >
        <path
            fill={color}
            fillRule="nonzero"
            d="M2.258 3.378c.928 0 1.68-.769 1.68-1.697a1.682 1.682 0 00-3.36 0c0 .928.752 1.697 1.68 1.697zM8.428 14V9.372c0-1.22.232-2.397 1.74-2.397 1.433 0 1.506 1.29 1.51 2.353V14h2.899V8.865c0-2.512-.54-4.447-3.477-4.447-1.413 0-2.36.775-2.747 1.51h-.04V4.653H5.529V14h2.9zm-4.717 0V4.653H.808V14h2.903z"
        />
    </svg>
);

LinkedInIcon.propTypes = propTypes;
LinkedInIcon.defaultProps = defaultProps;

export default React.memo(LinkedInIcon);
