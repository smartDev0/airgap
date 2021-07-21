import classnames from 'classnames';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Typography from './Typography';

import CancelIcon from '../images/icons/cancel.svg';
import OkIcon from '../images/icons/ok.svg';

import styles from './BenefitsTable.module.scss';

const BenefitsTable = ({ data }) => {
    const [tableIndex, setTableIndex] = useState(1);

    return (
        <Table
            bordered
            responsive
        >
            <thead>
                <tr>
                    <td className={styles.cell}>
                        <Typography className={styles.text}>
                            {data.tableHead.column1}
                        </Typography>
                    </td>
                    <td className={classnames({
                            [styles.cell]: true,
                            [styles.cellActive]: tableIndex === 1,
                        })}
                        onClick={() => { setTableIndex(1) }}
                    >
                        <Typography className={styles.text}>
                            {data.tableHead.column2}
                        </Typography>
                    </td>
                    <td
                        className={classnames({
                            [styles.cell]: true,
                            [styles.cellActive]: tableIndex === 2,
                        })}
                        onClick={() => { setTableIndex(2) }}
                    >
                        <Typography className={styles.text}>
                            {data.tableHead.column3}
                        </Typography>
                    </td>
                </tr>
            </thead>
            <tbody>
                {data.tableContent.map((content) => (
                    <tr key={content.column1}>
                        <td>
                            <Typography className={styles.text}>
                                {content.column1}
                            </Typography>
                        </td>
                        <td>
                            <img src={CancelIcon} width="22" alt="cancel icon" />
                            <div className={classnames(
                                'mt-1',
                                {
                                    [styles.textCell]: true,
                                    [styles.textCellActive]: tableIndex === 1,
                                },
                            )}
                            >
                                <Typography className={styles.text}>
                                    {content.column2}
                                </Typography>
                            </div>
                        </td>
                        <td>
                            <img src={OkIcon} width="22" alt="ok icon" />
                            <div className={classnames(
                                'mt-1',
                                {
                                    [styles.textCell]: true,
                                    [styles.textCellActive]: tableIndex === 2,
                                },
                            )}
                            >
                                <Typography className={styles.text}>
                                    {content.column3}
                                </Typography>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default BenefitsTable;
