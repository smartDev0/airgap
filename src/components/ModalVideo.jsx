import React, { useState } from 'react';
import classnames from 'classnames';
import ModalVideo from 'react-modal-video';

import PropTypes from '../util/PropTypes'
;
import styles from './ModalVideo.module.scss';

const propTypes = {
  url: PropTypes.string,
  poster: PropTypes.string,
};

const defaultProps = {
  url: '',
  poster: '',
};

const Video = ({ url, poster }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo channel="custom" url={url} autoplay isOpen={isOpen} onClose={() => setOpen(false)} />
      <div className={classnames([{
          [styles.modalVideo]: true,
          [styles[`modalVideo_${poster}`]]: poster,
        }])}
        onClick={()=> setOpen(true)}
        onKeyUp={event => event.key === 'Enter' && setOpen(true)}
        tabIndex={0}
        role="button"
      >
        <div className={styles.modalPlay} />
      </div>
    </>
  );
};


Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
