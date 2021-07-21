import React from 'react';
import classnames from 'classnames';
import { Table } from 'react-bootstrap';
import Typography from './Typography';

import styles from './TimelineTable.module.scss';

const DateTimelineTable = ({ data }) => {
    return (
        <Table
            bordered
            responsive
            className={classnames([styles.table, "mt-5"])}
        >
            <thead>
                <tr>
                    <td className={`w-20 ${styles.noAlign}`}>
                        <Typography className={styles.text}>Date</Typography>
                    </td>
                    <td className={`w-20 ${styles.noAlign}`}>
                        <Typography className={styles.text}>Time</Typography>
                    </td>
                    <td>
                        <Typography className={styles.text}>Sessions</Typography>
                    </td>
                </tr>
            </thead>
            <tbody>
                {data.map((node, ind) => (
                    <tr key={`${node.date}-${ind}`}>
                        {
                          node.date && (
                            <td rowSpan={3} className={styles.noAlign}>
                                <Typography className={styles.text}>
                                    {node.date}
                                </Typography>
                            </td>
                          )
                        }
                        <td className={styles.noAlign}>
                            <Typography className={styles.text}>
                                {node.time}
                            </Typography>
                        </td>
                        <td className={styles.noAlign}>
                            <div>
                                {node.sessions.map((session, ind) => {
                                  const isLastItem = node.sessions.length === ind + 1;
                                  return (
                                      <div key={`${session}-${ind}`} className={isLastItem ? '' : 'pb-2'}>
                                          <Typography variant="heading5">
                                              {session.event}
                                          </Typography>
                                          <Typography variant="cite">
                                              {session.speaker}
                                          </Typography>
                                      </div>
                                  );
                                })}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DateTimelineTable;
