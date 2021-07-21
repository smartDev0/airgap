import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Button from '../../components/Button';
import Hero from '../../components/Hero';
import Panel from '../../components/Panel';
import SEO from '../../components/seo';
import RevealOnScroll from '../../components/RevealOnScroll';
import Typography from '../../components/Typography';
import HubspotForm from '../../components/HubspotForm';

import '../../scss/bootstrap.scss';
import '../../scss/main.scss';

const WebinarPage = ({ path }) => {
    return (
        <>
            <SEO
                title="Uncertainties Fuel Ransomware Attacks into Corporate: Are You Prepared?"
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12}>
                            <Typography variant="heading2" as="h1" paragraph>
                                Uncertainties Fuel Ransomware Attacks into Corporate: Are You Prepared?
                            </Typography>
                            <Typography variant="heading6" className="mt-3">
                                Webinar
                            </Typography>
                        </Col>
                        <Col lg={{ span: 8, offset: 2 }} className="mt-3">
                            <Typography variant="blockquote">
                                Oct 15 2020, 11:00am PST
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl" className="mt-10 mt-md-15">
                <Row className="pb-10 justify-content-center">
                    <Col lg={6}>
                        <Typography variant="blockquote" paragraph>
                            COVID-19 has slowed the economy down, but hackers are busy as usual—looking to take
                            advantage of the pandemic to breach systems, steal data, and profit by holding both systems
                            and data hostage.
                        </Typography>
                        <Typography variant="blockquote" paragraph>
                            More than 51% of the organizations have been impacted with Ransomware in the last 12 months.
                        </Typography>
                        <Typography variant="blockquote" paragraph>
                            What is your defense strategy? How do you fight against the most potent lateral threat
                            propagation within your network during outbreak? In the virtual session, learn how Zero
                            Trust isolation provides the best defense against Ransomware. It’s time to get to the root
                            causes in your network and introduce the agentless Zero Trust Isolation platform that
                            protects your organization even if your endpoints are breached, even if you have vulnerable
                            and unpatched applications, and even if you are operating legacy and insecure protocols.
                        </Typography>
                    </Col>
                    <Col lg={6} className="mt-5 mt-md-0 justify-center">
                        <HubspotForm formId="3fd16516-7a02-46ed-99b8-0f0bd68e6f13">
                            <Typography variant="heading4" className="text-center" paragraph>
                                Thanks you!
                            </Typography>
                        </HubspotForm>
                    </Col>
                </Row>
            </Container>
            <RevealOnScroll>
                <Container fluid="xl" className="my-10 my-lg-15">
                    <Panel
                        background="globe"
                        theme="white"
                        className="p-5 p-md-10"
                        rounded>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <Typography variant="heading3" paragraph>
                                    Zero Trust Security Delivered from the Cloud
                                </Typography>
                                <Typography variant="body">
                                    Protect Data, Applications, Assets, & Services by creating a micro perimeter around
                                    every device in your organization.
                                </Typography>
                                <div className="mt-4">
                                    <Button to="/#contact" variant="ctaAccent">
                                        Learn More
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Panel>
                </Container>
            </RevealOnScroll>
        </>
    );
};

export default WebinarPage;
