/* eslint-disable react/jsx-props-no-spreading */

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    in: PropTypes.bool,
    tagName: PropTypes.oneOf(['div', 'li']),
};

const defaultProps = {
    children: null,
    className: null,
    in: null,
    tagName: 'div',
};

function Reveal({ children, className, in: visible, tagName }) {
    const Element = motion[tagName];
    let animate;

    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                when: 'beforeChildren',
                ease: 'easeInOut',
                duration: 0.25,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    if (visible !== null) {
        animate = visible ? 'visible' : 'hidden';
    }

    return (
        <Element
            animate={animate}
            variants={variants}
            className={className}
        >
            {children}
        </Element>
    );
}

Reveal.defaultProps = defaultProps;
Reveal.propTypes = propTypes;

export default Reveal;
