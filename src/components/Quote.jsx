import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from '../util/PropTypes';
import Panel from './Panel';

const Quote = ({ children, author, className }) => (
  <Container>
    <Row className="justify-content-center">
      <Col lg={8} className="my-10">
        <Panel
          theme="white"
          className="p-5"
          rounded
        >
          {children}
        </Panel>
      </Col>
    </Row>
  </Container>
);

Quote.propTypes = {
    children: PropTypes.node,
    author: PropTypes.string,
    className: PropTypes.string,
};

export default Quote;
