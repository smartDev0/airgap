import React, { useState, useEffect } from 'react';

import styles from './DamageCounter.module.scss';

function secondsYear() {
    var dateObj = new Date();
    var dateInit = new Date(dateObj.getFullYear(), "0", "0");
        dateInit = Math.round(dateInit.getTime()/1000);

    var dateCurrent = Math.round(dateObj.getTime()/1000);

    return dateCurrent - dateInit;
}

const DamageCounter = () => {
    const [damageLabel, setDamageLabel] = useState('0');

    const damageLabelComma = (index) => {
        const commaIndex = damageLabel.split('').length - index - 1; // - 1 for actual place

        if (commaIndex !== 0 && (commaIndex % 3 === 0)) {
            return (
                <span className={styles.comma}>,</span>
            )
        }
    };

    const updateDamageLabel = () => {
        const doy = secondsYear();
        const damage = doy * 475;
        console.log(doy);

        setDamageLabel(damage.toString());
    };

    useEffect(() => {
        updateDamageLabel();

        const interval = setInterval(() => {
            updateDamageLabel();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    if (damageLabel > 0) {
        return (
            <div className={styles.counter}>
                <span className={styles.cell}>$</span>
                {damageLabel.split('').map((c, index) => (
                    <React.Fragment key={`${index} ${c}`}>
                        <span className={styles.cell}>
                            {c}
                        </span>
                        {damageLabelComma(index)}
                    </React.Fragment>
                ))}
            </div>
        );
    };

    return null;
};

export default DamageCounter;
