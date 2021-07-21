import React from 'react';
import { Table } from 'react-bootstrap';
import Typography from './Typography';
import Button from './Button';

import styles from './EventsTable.module.scss';

const PodcastTable = ({ data }) => {
  const filteredData = data.filter(node => node.isPodcast);

    return (
        <Table
            bordered
            responsive
            className="mt-5"
        >
            <thead>
                <tr>
                    <td className={styles.cell}>
                        <Typography className={styles.text}>Name</Typography>
                    </td>
                    <td className={styles.cell}>
                        <Typography className={styles.text}>Listen</Typography>
                    </td>
                </tr>
            </thead>
            <tbody>
                {filteredData.map(node => (
                    <tr key={node.title}>
                        <td>
                            <div className={`${styles.text} mt-1`}>
                                <Typography className={styles.text}>
                                    {node.podcastEpisode ? `#${node.podcastEpisode} ` : ''}
                                    {node.title}
                                </Typography>
                            </div>
                        </td>
                        <td>
                            <div className={`${styles.text} mt-1`}>
                                <Button to={node.path} variant="pill" download={node.isDownloadble && node.title}>
                                    {node.isDownloadble && 'Download'}
                                    {!node.isDownloadble && 'Listen'}
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default PodcastTable;
