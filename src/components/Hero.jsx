import classnames from 'classnames';
import React from 'react';
import capitalize from '../util/capitalize';
import PropTypes from '../util/PropTypes';
import styles from './Hero.module.scss';

const Hero = ({ children, container, theme, centered }) => (
    <div
        className={classnames([
            styles.container,
            {
                [styles[`container${capitalize(container)}`]]: container,
                [styles[`theme${capitalize(theme)}`]]: theme,
                [styles.centered]: centered,
            },
        ])}
    >
        {children}
    </div>
);

Hero.propTypes = {
    children: PropTypes.node,
    container: PropTypes.string,
    theme: PropTypes.string,
    centered: PropTypes.bool,
};

Hero.defaultProps = {
    children: null,
    container: '',
    theme: '',
    centered: false,
};

export default Hero;
