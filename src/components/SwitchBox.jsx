/* eslint-disable */
/* TODO: rewrite so ESLint stop showing warnings:
  Rewrite in the following structure:
   <div>
      <label>
        <input />
      </label>
  </div>
*/
import React from 'react';
import { navigate } from 'gatsby';
import styles from './SwitchBox.module.scss';

const SwitchBox = () => {
    return (
      <div>
          <input id="checkbox" type="checkbox" className={styles.checkbox}/>
          <label
            className={styles.switchbox}
            htmlFor="checkbox"
            tabIndex={0}
            onClick={() => { navigate('/ransomware-kill-switch/') }}
            onKeyUp={event => { event.key === 'Enter' && navigate('/ransomware-kill-switch/') }}
          ></label>
      </div>
    );
};

export default SwitchBox;
