import classnames from 'classnames';
import Image from 'gatsby-image';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import React, { useState } from 'react';
import PropTypes from '../util/PropTypes';
import styles from './Slideshow.module.scss';
import Typography from './Typography';
import '@brainhubeu/react-carousel/lib/style.css';

const propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        title: '',
        image: '',
    })),
};

const defaultProps = {
    slides: [],
};

const Slideshow = ({ slides }) => {
    return (
        <Carousel
            plugins={[
                'arrows',
                {
                    resolve: autoplayPlugin,
                    options: {
                        interval: 2000,
                    }
                },
            ]}
        >
            {slides.map((slide, index) => (
                <div key={slide.title} className={styles.item}>
                    <Image
                        fluid={slide.image.childImageSharp.fluid}
                        className={styles.image}
                    />
                    <div className={styles.caption}>
                        <Typography variant="heading3" paragraph>
                            {slide.title}
                        </Typography>
                        <Typography>
                            {slide.intro}
                        </Typography>
                        {console.log(slide)}
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

Slideshow.propTypes = propTypes;
Slideshow.defaultProps = defaultProps;

export default Slideshow;
