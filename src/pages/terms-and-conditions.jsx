import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Panel from '../components/Panel';
import SEO from '../components/seo';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const ContactPage = ({ path }) => {
    return (
        <>
            <SEO
                title="Terms and Conditions"
                url={path}
            />
            <Panel theme="gradient" className="py-10 py-md-15">
                <Container fluid="xl">
                    <Row>
                        <Col xs={12} lg={10} className="mx-auto">
                            <Panel>
                                <iframe
                                    title="Terms and Conditions"
                                    src="https://app.termly.io/document/terms-of-use-for-website/de688e05-0b0a-439e-8da7-e05ee15033a0"
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
};

export default ContactPage;
