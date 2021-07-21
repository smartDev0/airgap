import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image'
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Button from '../components/Button';
import Box from '../components/Box';
import Hero from '../components/Hero';
import Panel from '../components/Panel';
import SEO from '../components/seo';
import Reveal from '../components/Reveal';
import RevealOnScroll from '../components/RevealOnScroll';
import Typography from '../components/Typography';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const AboutPage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query {
            ragrawal: peoplesYaml(id: {eq: "ragrawal"}) {
                name
                email
                position
                linkedinUrl
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            smohan: peoplesYaml(id: {eq: "smohan"}) {
                name
                email
                position
                linkedinUrl
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            vadavi: peoplesYaml(id: {eq: "vadavi"}) {
                name
                email
                position
                linkedinUrl
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            ssathaye: peoplesYaml(id: {eq: "ssathaye"}) {
                name
                email
                position
                company
                linkedinUrl
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            asidana: peoplesYaml(id: {eq: "asidana"}) {
                name
                email
                position
                company
                linkedinUrl
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            kelefant: peoplesYaml(id: {eq: "kelefant"}) {
                name
                email
                position
                company
                linkedinUrl
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    `);

    const { ragrawal, smohan, vadavi, ssathaye, asidana, kelefant } = data;

    return (
        <>
            <SEO
              title="About Airgap"
              description="At Airgap, we stop Ransomware spread with our cloud-native Zero Trust Isolation security platform so our customers can operate a Ransomware-Free Enterprise. Start your Free Trial today."
              url={location.pathname}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <Typography variant="heading1" paragraph>
                                About Us
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <div style={{ backgroundColor: '#F3F6F8' }}>
                <Container fluid="xl" className="pt-10">
                    <Row className="pb-10 justify-content-center">
                        <Col lg={10}>
                            <Typography variant="heading3" paragraph>
                                Our Mission
                            </Typography>
                            <Typography variant="intro" paragraph>
                                Simplify and secure corporate infrastructure. Allow work from anywhere.
                            </Typography>
                            <Typography paragraph>
                                We believe that the traditional enterprise network and security infrastructure has run
                                its course. The three plus decades old architecture isn't the way forward for the cloud
                                generation. Together, we can help enterprises modernize their network for a simple and
                                secure infrastructure - all delivered from the cloud.
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </div>
            <RevealOnScroll>
                <Container className="pt-10">
                    <Row className="pb-10 justify-content-center">
                        <Col lg={10}>
                            <Typography variant="heading3" className="text-center">
                                Our Principles
                            </Typography>
                            <Row>
                                <Col sm={6} lg={3} className="mt-6">
                                    <Reveal>
                                        <Box className="text-center p-4">
                                            <Typography variant="heading4" paragraph>
                                                Be customer obsessed
                                            </Typography>
                                            <Typography className="mt-4">
                                                Only customers matter
                                            </Typography>
                                        </Box>
                                    </Reveal>
                                </Col>
                                <Col sm={6} lg={3} className="mt-6">
                                    <Reveal>
                                        <Box className="text-center p-4">
                                            <Typography variant="heading4" paragraph>
                                                Be quality focused
                                            </Typography>
                                            <Typography className="mt-4">
                                                You can't feature your way to success
                                            </Typography>
                                        </Box>
                                    </Reveal>
                                </Col>
                                <Col sm={6} lg={3} className="mt-6">
                                    <Reveal>
                                        <Box className="text-center p-4">
                                            <Typography variant="heading4" paragraph>
                                                Be curious
                                            </Typography>
                                            <Typography className="mt-4">
                                                Innovate. Don’t reinvent the wheel
                                            </Typography>
                                        </Box>
                                    </Reveal>
                                </Col>
                                <Col sm={6} lg={3} className="mt-6">
                                    <Reveal>
                                        <Box className="text-center p-4">
                                            <Typography variant="heading4" paragraph>
                                                Be kind
                                            </Typography>
                                            <Typography className="mt-4">
                                                Treat others as you'd like to be treated
                                            </Typography>
                                        </Box>
                                    </Reveal>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </RevealOnScroll>
            <div style={{ backgroundColor: '#F3F6F8' }}>
                <RevealOnScroll>
                    <Container className="pt-10">
                        <Row className="pb-10 justify-content-center">
                            <Col lg={10}>
                                <Typography variant="heading3" paragraph>
                                    Our Story
                                </Typography>
                                <Typography paragraph>
                                    The Airgap founding team has years of experience building some of the most successful
                                    carrier and enterprise grade infrastructure products including routing, switching, and
                                    security platforms. During our careers, we noticed that the networking infrastructure
                                    has become very complex and the traditional cyber security solutions have failed to
                                    protect enterprises from cyber breaches. Enterprises are collectively spending billions
                                    of dollars without getting the promised results.
                                </Typography>
                                <Typography>
                                    We didn’t like the status quo. In our quest to find a disruptive solution, we
                                    stumbled on a brilliant architecture. After intense research, nearly 18 months of
                                    R&D, and numerous patent filings, we introduced a simple yet effective enterprise
                                    platform built ground up - a platform that is delivered as a service from the cloud
                                    to ensure simplicity and protection for all devices, all users, all networks, all
                                    applications, regardless of their location or network access methods.
                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                </RevealOnScroll>
            </div>
            <RevealOnScroll>
                <Container className="py-10">
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <Typography variant="heading3" className="text-center">
                                Founding Team
                            </Typography>
                            <Row className="mt-6 text-center">
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Panel theme="light" className="pt-4 pb-8 px-4 h-100">
                                        <Row>
                                            <Col xs={8} className="mx-auto">
                                                <Image
                                                    fluid={ragrawal.image.childImageSharp.fluid}
                                                    alt={ragrawal.name}
                                                />
                                            </Col>
                                        </Row>
                                        <div className="mt-4">
                                            <Typography variant="heading4" paragraph>
                                                {ragrawal.name}
                                            </Typography>
                                            <Typography>
                                                {ragrawal.position}
                                            </Typography>
                                        </div>
                                        <div className="mt-3">
                                            <Button
                                                to={ragrawal.linkedinUrl}
                                                variant="linkDark"
                                            >
                                                LinkedIn
                                            </Button>
                                        </div>
                                    </Panel>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Panel theme="light" className="pt-4 pb-8 px-4 h-100">
                                        <Row>
                                            <Col xs={8} className="mx-auto">
                                                <Image
                                                    fluid={smohan.image.childImageSharp.fluid}
                                                    alt={smohan.name}
                                                />
                                            </Col>
                                        </Row>
                                        <div className="mt-4">
                                            <Typography variant="heading4" paragraph>
                                                {smohan.name}
                                            </Typography>
                                            <Typography>
                                                {smohan.position}
                                            </Typography>
                                        </div>
                                        <div className="mt-3">
                                            <Button
                                                to={smohan.linkedinUrl}
                                                variant="linkDark"
                                            >
                                                LinkedIn
                                            </Button>
                                        </div>
                                    </Panel>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Panel theme="light" className="pt-4 pb-8 px-4 h-100">
                                        <Row>
                                            <Col xs={8} className="mx-auto">
                                                <Image
                                                    fluid={vadavi.image.childImageSharp.fluid}
                                                    alt={vadavi.name}
                                                />
                                            </Col>
                                        </Row>
                                        <div className="mt-4">
                                            <Typography variant="heading4" paragraph>
                                                {vadavi.name}
                                            </Typography>
                                            <Typography>
                                                {vadavi.position}
                                            </Typography>
                                        </div>
                                        <div className="mt-3">
                                            <Button
                                                to={vadavi.linkedinUrl}
                                                variant="linkDark"
                                            >
                                                LinkedIn
                                            </Button>
                                        </div>
                                    </Panel>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </RevealOnScroll>
            <RevealOnScroll>
                <Container className="pb-10">
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <Typography variant="heading3" className="text-center">
                                Investors
                            </Typography>
                            <Row className="mt-6 text-center justify-content-center">
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Panel theme="light" className="pt-4 pb-8 px-4 h-100">
                                        <Row>
                                            <Col xs={8} className="mx-auto">
                                                <Image
                                                    fluid={ssathaye.image.childImageSharp.fluid}
                                                    alt={ssathaye.name}
                                                />
                                            </Col>
                                        </Row>
                                        <div className="mt-4">
                                            <Typography variant="heading4" paragraph>
                                                {ssathaye.name}
                                            </Typography>
                                            <Typography>
                                                {ssathaye.position} at {ssathaye.company}
                                            </Typography>
                                        </div>
                                    </Panel>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Panel theme="light" className="pt-4 pb-8 px-4 h-100">
                                        <Row>
                                            <Col xs={8} className="mx-auto">
                                                <Image
                                                    fluid={asidana.image.childImageSharp.fluid}
                                                    alt={asidana.name}
                                                />
                                            </Col>
                                        </Row>
                                        <div className="mt-4">
                                            <Typography variant="heading4" paragraph>
                                                {asidana.name}
                                            </Typography>
                                            <Typography>
                                                {asidana.position} at {asidana.company}
                                            </Typography>
                                        </div>
                                    </Panel>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Panel theme="light" className="pt-4 pb-8 px-4 h-100">
                                        <Row>
                                            <Col xs={8} className="mx-auto">
                                                <Image
                                                    fluid={kelefant.image.childImageSharp.fluid}
                                                    alt={kelefant.name}
                                                />
                                            </Col>
                                        </Row>
                                        <div className="mt-4">
                                            <Typography variant="heading4" paragraph>
                                                {kelefant.name}
                                            </Typography>
                                            <Typography>
                                                {kelefant.position} at {kelefant.company}
                                            </Typography>
                                        </div>
                                    </Panel>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </RevealOnScroll>
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
                                        Learn How It Works
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

export default AboutPage;
