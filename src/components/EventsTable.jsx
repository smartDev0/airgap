import React from 'react';
import { Table } from 'react-bootstrap';
import Typography from './Typography';
import Button from './Button';

import styles from './EventsTable.module.scss';

const EventsTable = ({ data, type }) => {
  const isTalkTable = type === 'talks';
  const filteredData = data.filter(node => {
    if (node.isPodcast) return false;
    if (isTalkTable) return node.isBrightTalk;
    return !node.isBrightTalk;
  });

    return (
        <Table
            bordered
            responsive
            className="mt-5"
        >
            <thead>
                <tr>
                    <td className={styles.cell}>
                        <Typography className={styles.text}>Date</Typography>
                    </td>
                    <td className={styles.cell}>
                        <Typography className={styles.text}>Event</Typography>
                    </td>
                    {isTalkTable && (
                      <>
                        <td className={styles.cell}>
                            <Typography className={styles.text}>Speakers</Typography>
                        </td>
                        <td className={styles.cell}>
                            <Typography className={styles.text}>Learn More</Typography>
                        </td>
                      </>
                    )}
                    {!isTalkTable && (
                      <>
                          <td className={styles.cell}>
                              <Typography className={styles.text}>Location</Typography>
                          </td>
                          <td className={styles.cell}>
                              <Typography className={styles.text}>What</Typography>
                          </td>
                          <td className={styles.cell}>
                              <Typography className={styles.text}>Learn More</Typography>
                          </td>
                      </>
                    )}
                </tr>
            </thead>
            <tbody>
                {filteredData.map((node, ind) => (
                    <tr key={ind}>
                        <td>
                            <Typography className={styles.text}>
                                {node.date}
                            </Typography>
                        </td>
                        <td>
                            <div className={`${styles.text} mt-1`}>
                                <Typography className={styles.text}>
                                    {node.title}
                                </Typography>
                            </div>
                        </td>
                        {isTalkTable && (
                            <>
                              <td>
                                  <div className={`${styles.text} mt-1`}>
                                      <Typography className={styles.text}>
                                          {node.speakers}
                                      </Typography>
                                  </div>
                              </td>
                              <td>
                                  <div className={`${styles.text} mt-1`}
                                  >
                                      <Button to={node.link || node.path} variant="pill">
                                          Learn More
                                      </Button>
                                  </div>
                              </td>
                            </>
                        )}
                        {!isTalkTable && (
                          <>
                              <td>
                                  <div className={`${styles.text} mt-1`}>
                                      <Typography className={styles.text}>
                                          {node.location}
                                      </Typography>
                                  </div>
                              </td>
                              <td>
                                  <div className={`${styles.text} mt-1`}
                                  >
                                      <Typography className={styles.text}>
                                          {node.type}
                                      </Typography>
                                  </div>
                              </td>
                              <td>
                                  <div className={`${styles.text} mt-1`}
                                  >
                                      <Button to={node.link || node.path} variant="pill">
                                          Learn More
                                      </Button>
                                  </div>
                              </td>
                          </>
                        )}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default EventsTable;
