import classnames from 'classnames';
import Image from 'gatsby-image';
import React from 'react';
import PropTypes from '../util/PropTypes';
import styles from './Card.module.scss';
import Typography from './Typography';

const propTypes = {
    children: PropTypes.node,
    responsive: PropTypes.bool,
};

const defaultProps = {
    children: null,
    responsive: false,
};

const Card = ({ children, responsive }) => (
    <div className={classnames(styles.box, { [styles.boxResponsive]: responsive })}>
        {children}
    </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

const ResponsiveContainer = ({ children }) => (
    <div className={styles.container}>
        {children}
    </div>
);
ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};
ResponsiveContainer.defaultProps = {
    children: null,
};

const Thumb = ({ sharp, aspectRatio, alt }) => {
    if (aspectRatio) {
        return (
            <Image
                sizes={{ ...sharp.fluid, aspectRatio }}
                alt={alt}
            />
        );
    }

    return (
        <Image
            fluid={sharp.fluid}
            alt={alt}
            style={{ height: '100%' }}
        />
    );
};
Thumb.propTypes = {
    sharp: PropTypes.shape(PropTypes.object.isRequired),
    aspectRatio: PropTypes.number,
    alt: PropTypes.string,
};
Thumb.defaultProps = {
    sharp: null,
    aspectRatio: null,
    alt: '',
};

const Content = ({ children }) => (
    <div className={styles.content}>
        {children}
    </div>
);
Content.propTypes = {
    children: PropTypes.node,
};
Content.defaultProps = {
    children: null,
};

const Subtitle = ({ children }) => (
    <Typography variant="small">{ children }</Typography>
);
Subtitle.propTypes = {
    children: PropTypes.node,
};
Subtitle.defaultProps = {
    children: null,
};

const Title = ({ children }) => (
    <div className={classnames([styles.title, "mt-1"])}>
        <Typography variant="heading5">
            { children }
        </Typography>
    </div>
);
Title.propTypes = {
    children: PropTypes.node,
};
Title.defaultProps = {
    children: null,
};

const Text = ({ text }) => {
    const formatted = (text.length > 210) ? (text.substring(0, 210) + ' ...') : text;

    return (
        <div className="mt-1">
            <Typography variant="body">
                {formatted}
            </Typography>
        </div>
    );
};
Text.propTypes = {
    text: PropTypes.string,
};
Text.defaultProps = {
    text: '',
};

const Author = ({ text }) => (
    <div className={styles.author}>
        <div className={styles.authorDetails}>
            <Typography variant="body">
                {text}
            </Typography>
        </div>
    </div>
);
Author.propTypes = {
    text: PropTypes.string,
};
Author.defaultProps = {
    text: null,
};

Card.ResponsiveContainer = ResponsiveContainer;
Card.Thumb = Thumb;
Card.Content = Content;
Card.Subtitle = Subtitle;
Card.Title = Title;
Card.Text = Text;
Card.Author = Author;

export default Card;
