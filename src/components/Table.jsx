import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';
import PropTypes from '../util/PropTypes';
import styles from './Table.module.scss';

const Table = ({ children }) => (
    <BootstrapTable bordered responsive className={styles.table}>
        {children}
    </BootstrapTable>
);

Table.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Table;
