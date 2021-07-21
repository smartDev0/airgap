import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Panel from '../components/Panel';
import SEO from '../components/seo';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const ContactPage = ({ path }) => (
    <>
        <SEO
            title="Privacy policy"
            url={path}
        />
        <Panel theme="gradient" className="py-10 py-md-15">
            <Container fluid="xl">
                <Row>
                    <Col xs={12} lg={10} className="mx-auto">
                        <Panel>
                            <iframe
                                title="Privacy Policy"
                                src="https://app.termly.io/document/privacy-policy/06ca58a1-916d-4439-a2a2-4abfee360d47"
                                frameBorder="0"
                                style={{
                                    display: 'block',
                                    height: '500px',
                                    width: '100%',
                                }}
                            />
                        </Panel>
                    </Col>
                </Row>
            </Container>
        </Panel>
    </>
);

export default ContactPage;
