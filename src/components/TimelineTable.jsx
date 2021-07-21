import React from 'react';
import classnames from 'classnames';
import { Table } from 'react-bootstrap';
import Typography from './Typography';

import styles from './TimelineTable.module.scss';

const TimelineTable = ({ data }) => {

    return (
        <Table
            bordered
            responsive
            className={classnames([styles.table, "mt-5"])}
        >
            <thead>
                <tr>
                    <td className="w-20">
                        <Typography className={styles.text}>Date</Typography>
                    </td>
                    <td>
                        <Typography className={styles.text}>Sessions</Typography>
                    </td>
                </tr>
            </thead>
            <tbody>
                {data.map((node, ind) => (
                    <tr key={`${node.date}-${ind}`}>
                        <td>
                            <Typography className={styles.text}>
                                {node.date}
                            </Typography>
                        </td>
                        <td>
                            <div>
                                {node.sessions.map((session, ind) => (
                                    <div key={`${session}-${ind}`} className='pb-2'>
                                        <Typography variant="heading5">
                                            {session.event}
                                        </Typography>
                                        <Typography variant="cite">
                                            {session.speaker}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TimelineTable;
