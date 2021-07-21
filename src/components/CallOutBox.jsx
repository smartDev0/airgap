import classnames from 'classnames';
import React, { useState } from 'react';
import PropTypes from '../util/PropTypes';
import Button from './Button';
import styles from './CallOutBox.module.scss';
import blackCloseIcon from '../images/icons/close-black.svg';

const CallOutBox = ({ children, className, title }) => {
  const [isOpen, setOpen] = useState(false);
  const content = isOpen ?
    <div
      className={classnames({
        [styles.container]: true,
        [className]: true,
        [styles.opened]: isOpen,
        "p-2": true,
      })}
    >
      {children}
      <span
          className={styles.close}
          onClick={() => setOpen(false)}
          onKeyUp={event => event.key === 'Enter' && setOpen(false)}
          tabIndex={0}
          variant="link"
          role="button"
        >
            <img src={blackCloseIcon} alt="close icon" /> 
        </span>
    </div>
  :
    <div className={styles.container}>
      <Button
        onClick={() => setOpen(true)}
        onKeyUp={event => event.key === 'Enter' && setOpen(true)}
        tabIndex={0}
        role="button"
      >{title}</Button>
    </div>;

    return content;
};

CallOutBox.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

CallOutBox.defaultProps = {
    title: "",
    className: null,
    children: null,
};

export default CallOutBox;
