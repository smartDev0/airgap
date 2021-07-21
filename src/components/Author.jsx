import classnames from 'classnames';
import React from 'react';
import Image from 'gatsby-image';
import Typography from './Typography';
import PropTypes from '../util/PropTypes';
import styles from './Author.module.scss';

const Author = ({ name, image, imageSrc, isSmallThumb, isWideThumb, shouldWrap, date, className }) => (
  <div className={classnames([styles.author, className])}>
    {imageSrc && (
      <img
        src={imageSrc}
        className={classnames({
          [styles.author__thumb]: true,
          [styles.author__thumb_sm]: isSmallThumb,
          [styles.author__thumb_wide]: isWideThumb,
        })}
        alt={name}
      />
    )}
    {image && (
      <Image
        className={classnames({
          [styles.author__thumb]: true,
          [styles.author__thumb_sm]: isSmallThumb,
          [styles.author__thumb_wide]: isWideThumb,
        })}
        alt={name}
        sizes={{ ...image, aspectRatio: 4 / 4 }}
      />
    )}
    {shouldWrap && (
      <div className={classnames([styles.author__content, "ml-2"])}>
        <Typography variant="heading6" className={styles.author__text}>
          by {name}
        </Typography>
        {date && (
          <Typography variant="body">
              {date}
          </Typography>
        )}
      </div>
    )}
    {!shouldWrap && (
      <Typography variant="heading6" className={classnames([styles.author__text, "ml-2"])}>
          {name}
      </Typography>
    )}
  </div>
);

Author.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    imageSrc: PropTypes.string,
    image: PropTypes.object,
    date: PropTypes.string,
    isSmallThumb: PropTypes.bool,
    isWideThumb: PropTypes.bool,
    shouldWrap: PropTypes.bool,
};

Author.defaultProps = {
    name: "",
    imageSrc: "",
    object: {},
    date: "",
    className: null,
    isSmallThumb: false,
    isWideThumb: false,
    shouldWrap: false,
};

export default Author;
