import classnames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import React, { useState } from 'react';
import PropTypes from '../util/PropTypes';
import Button from './Button';
import Link from './Link';
import ArrowDownIcon from './icons/ArrowDownIcon';
import styles from './Navs.module.scss';
import Typography from '../components/Typography';

const Navs = ({ children }) => (
    <div className={styles.container}>
        {children}
    </div>
);

Navs.propTypes = {
    children: PropTypes.node,
};

Navs.defaultProps = {
    children: null,
};

const NavsTitle = ({ children }) => (
    <div className={styles.title}>
        <Typography variant="heading6">{children}</Typography>
    </div>
);

const NavsLink = ({ children, to, hasDropdown, title }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={classnames([
            styles.item,
            {
                [styles.itemExpanded]: expanded,
            },
        ])}
        >
            {!hasDropdown && (
                <Link
                    to={to}
                    className={styles.itemLink}
                    wrapper
                >
                    {children}
                </Link>
            )}
            {hasDropdown && (
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setExpanded(false);
                    }}
                >
                    <div
                        className={styles.itemLink}
                        onClick={toggleExpanded}
                        onKeyUp={event => event.key === 'Enter' && toggleExpanded(event)}
                        role="button"
                        tabIndex={0}
                    >
                        <span className={styles.itemTitle}>
                            {title}
                        </span>
                        <span className={styles.itemIcon}>
                            <ArrowDownIcon size="10" color="#fff" />
                        </span>
                    </div>
                    {expanded && (
                        <div
                          className={styles.dropdown}
                          role="button"
                          tabIndex={0}
                          onKeyUp={event => event.key === 'Enter' && setExpanded(false)}
                          onClick={() => { setExpanded(false) }}
                        >
                            {children}
                        </div>
                    )}
                </OutsideClickHandler>
            )}
        </div>
    );
};

NavsLink.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    hasDropdown: PropTypes.bool,
    title: PropTypes.string,
};

NavsLink.defaultProps = {
    children: null,
    to: null,
    hasDropdown: false,
    title: null,
};

const NavsSubmenu = ({ children, light }) => (
    <div className={classnames({
        [styles.submenu]: true,
        [styles.light]: light,
    })}
    >
        {children}
    </div>
);

NavsSubmenu.propTypes = {
    children: PropTypes.node,
};

NavsSubmenu.defaultProps = {
    children: null,
};

const NavsButton = ({ children, to, variant }) => (
    <div className={styles.action}>
        <Button to={to} variant={variant}>
            {children}
        </Button>
    </div>
);

NavsButton.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    variant: PropTypes.string,
};

NavsButton.defaultProps = {
    children: null,
    to: null,
    variant: 'pill',
};

Navs.Title = NavsTitle;
Navs.Link = NavsLink;
Navs.Button = NavsButton;
Navs.Submenu = NavsSubmenu;

export default Navs;
