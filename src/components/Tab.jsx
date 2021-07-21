import classnames from 'classnames';
import React from 'react';

import styles from './Tab.module.scss';

const Tab = ({ children, icon, active, tabImageAlt, onClick }) => (
    <div className={classnames(
            styles.tab,
            {
                [styles.tabActive]: active,
            }
        )}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyUp={event => { event.key === 'Enter' && onClick(event) }}
    >
        <div className={styles.icon}>
            <img src={icon} width="50" alt={tabImageAlt} />
        </div>
        <div className={styles.details}>
            {children}
        </div>
    </div>
);

export default Tab;
