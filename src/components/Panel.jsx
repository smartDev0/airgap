import classnames from 'classnames';
import React from 'react';
import capitalize from '../util/capitalize';
import PropTypes from '../util/PropTypes';
import styles from './Panel.module.scss';

const Panel = ({ children, className, theme, background, rounded }) => (
    <div className={classnames([
        styles.container,
        className,
        styles[`theme${capitalize(theme)}`],
        {
            [styles.rounded]: rounded,
            [styles[`background${capitalize(background)}`]]: background,
        },
    ])}
    >
        {children}
    </div>
);

Panel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'dark', 'white', 'light', 'gradient']),
    background: PropTypes.oneOf(['', 'globe']),
    rounded: PropTypes.bool,
};

Panel.defaultProps = {
    children: null,
    className: null,
    theme: 'white',
    background: '',
    rounded: false,
};

export default Panel;
