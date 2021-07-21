import classnames from 'classnames';
import React, { useState } from 'react';
import preventDefault from '../util/preventDefault';
import PropTypes from '../util/PropTypes';
import whenKey from '../util/whenKey';
import AngleDownIcon from './icons/AngleDownIcon';
import styles from './Select.module.scss';

const propTypes = {
    border: PropTypes.bool,
    size: PropTypes.oneOf(['form', 'large']),
    values: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.shape(PropTypes.object.isRequired),
    setValue: PropTypes.func,
    placeholder: PropTypes.string,
};

const defaultProps = {
    border: false,
    size: 'form',
    values: null,
    value: null,
    setValue: null,
    placeholder: null,
};

const Select = ({
    border, size, values, value, setValue, placeholder,
}) => {
    const [opened, setOpened] = useState(false);

    const toggle = () => {
        setOpened(!opened);
    };

    const updateValue = (selectedValue) => {
        toggle();
        setValue(selectedValue);
    };

    return (
        <div className={classnames(
            styles.box,
            {
                [styles.border]: border,
            },
        )}
        >
            <div
                className={classnames(
                    styles.select,
                    styles[size],
                )}
                onClick={toggle}
                onKeyDown={whenKey(' ', preventDefault(toggle))}
                role="listbox"
                tabIndex="0"
            >
                {value && (
                    <div className={styles.current}>
                        {value.title}
                    </div>
                )}
                {!value && (
                    <div className={styles.placeholder}>
                        {placeholder}
                    </div>
                )}
                <AngleDownIcon className={classnames({ [styles.arrowOpened]: opened })} />
            </div>
            <div className={classnames(styles.options, { [styles.opened]: opened })}>
                {values.map(optionValue => (
                    <div
                        key={optionValue.title}
                        className={classnames(
                            styles.option,
                            styles[`option${size}`],
                        )}
                        onClick={() => { updateValue(optionValue); }}
                        onKeyDown={whenKey(' ', preventDefault(updateValue))}
                        role="listbox"
                        tabIndex="0"
                    >
                        {optionValue.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
