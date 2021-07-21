import PropTypes from 'prop-types';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Reveal from './Reveal';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    revealClassName: PropTypes.string,
};

const defaultProps = {
    children: null,
    className: null,
    revealClassName: null,
};

function RevealOnScroll({ children, className, revealClassName }) {
    const [ref, visible] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <div ref={ref} className={className}>
            <Reveal in={visible} className={revealClassName}>
                {children}
            </Reveal>
        </div>
    );
}

RevealOnScroll.propTypes = propTypes;
RevealOnScroll.defaultProps = defaultProps;

export default RevealOnScroll;
