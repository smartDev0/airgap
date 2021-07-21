import classnames from 'classnames';
import React from 'react';
import PropTypes from '../util/PropTypes';
import Link from './Link';
import styles from './List.module.scss';
import Typography from './Typography';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
};

const defaultProps = {
    children: null,
    className: null,
    fullWidth: false,
};

const List = ({ children, className, fullWidth }) => (
    <div className={classnames(
        className,
        {
            [styles.list]: !fullWidth,
        })}
    >
        {children}
    </div>
);

List.propTypes = propTypes;
List.defaultProps = defaultProps;

const Item = ({
    children,
    iconRight,
    iconLeft,
    to,
    variant,
    iconInner,
    shrink,
    border,
}) => {
    const ItemInner = (
        <>
            {!iconInner && iconLeft && (
                <div className={classnames([styles.itemIcon, 'pr-1'])}>
                    {iconLeft}
                </div>
            )}
            <div
                className={classnames({
                    [styles.itemInner]: !shrink,
                })}
            >
                {iconInner && iconLeft && (
                    <span className="pr-1">
                        {iconLeft}
                    </span>
                )}
                <Typography variant={variant} className={styles.itemTitle}>
                    {children}
                </Typography>
                {iconInner && iconRight && (
                    <span className="pl-1">
                        {iconRight}
                    </span>
                )}
            </div>
            {!iconInner && iconRight && (
                <div className={classnames([styles.itemIcon, 'pl-1'])}>
                    {iconRight}
                </div>
            )}
        </>
    );

    if (to) {
        return (
            <Link
                className={classnames(
                    styles.item,
                    {
                        [styles.border]: border,
                    },
                )}
                to={to}
                wrapper
            >
                { ItemInner }
            </Link>
        );
    }

    return (
        <div
            className={classnames(
                styles.item,
                {
                    [styles.border]: border,
                },
            )}
        >
            { ItemInner }
        </div>
    );
};

Item.propTypes = {
    children: PropTypes.node,
    iconInner: PropTypes.bool,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    to: PropTypes.string,
    variant: PropTypes.string,
    shrink: PropTypes.bool,
    border: PropTypes.bool,
};

Item.defaultProps = {
    children: null,
    iconInner: null,
    iconLeft: null,
    iconRight: null,
    to: null,
    variant: 'body',
    shrink: false,
    border: false,
};

List.Item = Item;

export default List;
