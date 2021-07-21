import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Hero from '../components/Hero';
import HubspotForm from '../components/HubspotForm';
import Link from '../components/Link';
import Panel from '../components/Panel';
import SEO from '../components/seo';
import Typography from '../components/Typography';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const BusinessDealRegistrationPage = ({ path }) => (
    <>
        <SEO
            title="Business Deal Registration"
            url={path}
        />
        <Hero theme="dark" container="small" centered>
            <Container fluid="xl">
                <Row>
                    <Col xs={12} lg={8} className="mx-auto">
                        <Typography variant="heading1" paragraph>
                            Register Your Opportunity with Airgap
                        </Typography>
                        <Typography variant="heading6" className="mt-3">
                            <Link to="/" wrapper>HOME</Link>
                            {' '}
                            /
                            {' '}
                            Business Deal Registration
                        </Typography>
                    </Col>
                    <Col lg={{ span: 8, offset: 2 }} className="mt-3">
                        <Typography variant="blockquote">
                            Our thoughts, opinions, and ideas on the business of
                            <br />
                            security and the security of businesses
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </Hero>
        <Panel theme="gradient" className="py-10 py-md-15">
            <Container fluid="xl">
                <Row>
                    <Col xs={12} lg={10} className="mx-auto">
                        <HubspotForm formId="f46d918c-1286-4d37-b85d-7ee9c6da2bff">
                            <Typography variant="heading4" paragraph>
                                Thanks for submitting the form.
                            </Typography>
                        </HubspotForm>
                    </Col>
                </Row>
            </Container>
        </Panel>
    </>
);

export default BusinessDealRegistrationPage;
