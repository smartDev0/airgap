import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Panel from '../components/Panel';
import SEO from '../components/seo';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const ContactPage = ({ path }) => (
    <>
        <SEO
            title="Cookie Policy"
            url={path}
        />
        <Panel theme="gradient" className="py-10 py-md-15">
            <Container fluid="xl">
                <Row>
                    <Col xs={12} lg={10} className="mx-auto">
                        <Panel>
                            <iframe
                                title="Cookie Policy"
                                src="https://app.termly.io/document/cookie-policy/fb2836b7-4658-4591-b3bc-e91eb1c37a1a"
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
