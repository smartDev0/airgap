import classnames from 'classnames';
import React from 'react';
import PropTypes from '../util/PropTypes';
import styles from './Box.module.scss';

const Box = ({ children, className }) => (
    <div className={classnames([styles.container, className])}>
        {children}
    </div>
);

Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

Box.defaultProps = {
    children: null,
    className: null,
};

export default Box;
