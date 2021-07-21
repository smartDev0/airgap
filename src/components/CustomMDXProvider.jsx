/* eslint-disable react/no-danger */
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from '../util/PropTypes';
import Button from './Button';
import CheckIcon from './icons/CheckIcon';
import Link from './Link';
import List from './List';
import Typography from './Typography';

const basicPropTypes = {
    children: PropTypes.node,
};
const basicDefaultProps = {
    children: null,
};

const linkPropTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
};
const linkDefaultProps = {
    children: null,
    to: null,
};

const buttonPropTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
};
const buttonDefaultProps = {
    children: null,
    to: null,
};

const Heading2 = ({ children }) => (
    <div className="mt-6">
        <Typography variant="heading2">
            {children}
        </Typography>
    </div>
);
Heading2.propTypes = basicPropTypes;
Heading2.defaultProps = basicDefaultProps;

const Heading3 = ({ children }) => (
    <div className="mt-6">
        <Typography variant="heading3">
            {children}
        </Typography>
    </div>
);
Heading3.propTypes = basicPropTypes;
Heading3.defaultProps = basicDefaultProps;

const Heading4 = ({ children }) => (
    <div className="mt-6">
        <Typography variant="heading4">
            {children}
        </Typography>
    </div>
);
Heading4.propTypes = basicPropTypes;
Heading4.defaultProps = basicDefaultProps;

const Heading5 = ({ children }) => (
    <div className="mt-6">
        <Typography variant="heading5">
            {children}
        </Typography>
    </div>
);
Heading5.propTypes = basicPropTypes;
Heading5.defaultProps = basicDefaultProps;

const Heading6 = ({ children }) => (
    <div className="mt-6">
        <Typography variant="heading6">
            {children}
        </Typography>
    </div>
);
Heading6.propTypes = basicPropTypes;
Heading6.defaultProps = basicDefaultProps;

const Paragraph = ({ children }) => (
    <div className="mt-2">
        <Typography variant="body">
            {children}
        </Typography>
    </div>
);
Paragraph.propTypes = basicPropTypes;
Paragraph.defaultProps = basicDefaultProps;

const CustomList = ({ children }) => (
    <List className="mt-2" fullWidth>
        {children}
    </List>
);
CustomList.propTypes = basicPropTypes;
CustomList.defaultProps = basicDefaultProps;

const CustomListItem = ({ children }) => (
    <List.Item
        className="mt-2"
        iconLeft={<CheckIcon color="#F98533" />}
    >
        {children}
    </List.Item>
);
CustomListItem.propTypes = basicPropTypes;
CustomListItem.defaultProps = basicDefaultProps;

const CustomTable = ({ children }) => (
    <div className="mt-4">
        <Table
            bordered
            responsive
            striped
        >
            {children}
        </Table>
    </div>
);
CustomTable.propTypes = basicPropTypes;
CustomTable.defaultProps = basicPropTypes;

const InlineLink = ({ href, children }) => (
    <Link underline to={href}>
        {children}
    </Link>
);
InlineLink.propTypes = linkPropTypes;
InlineLink.defaultProps = linkDefaultProps;

const StandaloneLink = ({ to, children }) => (
    <Button to={to} className="mt-2">
        {children}
    </Button>
);
StandaloneLink.propTypes = buttonPropTypes;
StandaloneLink.defaultProps = buttonDefaultProps;

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    children: null,
};

const CustomMDXProvider = ({ children }) => (
    <>
        <MDXProvider
            components={{
                h1: Heading2,
                h2: Heading2,
                h3: Heading3,
                h4: Heading4,
                h5: Heading5,
                h6: Heading6,
                p: Paragraph,
                ul: CustomList,
                li: CustomListItem,
                a: InlineLink,
                Button: StandaloneLink,
                Table: CustomTable,
            }}
        >
            {children}
        </MDXProvider>
    </ >
);

CustomMDXProvider.propTypes = propTypes;
CustomMDXProvider.defaultProps = defaultProps;

export default CustomMDXProvider;
