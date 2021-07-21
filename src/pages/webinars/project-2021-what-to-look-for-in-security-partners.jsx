import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Image from 'gatsby-image';

import { Container, Row, Col, Table } from 'react-bootstrap';

import Hero from '../../components/Hero';
import CheckIcon from '../../components/icons/CheckIcon';
import List from '../../components/List';
import SEO from '../../components/seo';
import Typography from '../../components/Typography';
import HubspotForm from '../../components/HubspotForm';

import '../../scss/bootstrap.scss';
import '../../scss/main.scss';

const Project2021WebinarPage = ({ path }) => {
    const data = useStaticQuery(graphql`
        query {
            project2021Thumb: file(relativePath: {eq: "project2021.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <>
            <SEO
                title="Project 2021 | What to Look for in Security Partners"
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12} md={9} className="mx-auto">
                            <Typography variant="heading2" as="h1" paragraph>
                                Project 2021 | What to Look for in Security Partners
                            </Typography>
                            <Typography variant="heading6" className="mt-3">
                                Virtual Happy Hours
                            </Typography>
                        </Col>
                        <Col lg={{ span: 8, offset: 2 }} className="mt-3">
                            <Typography variant="blockquote">
                                Dec 9 2020 at 1:30pm PST | 4:30pm EST
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <div style={{ backgroundColor: '#F3F6F8' }}>
                <Container fluid="xl" className="pt-10">
                    <Row className="pb-10 justify-content-center">
                        <Col lg={10}>
                            <Typography variant="blockquote" paragraph>
                                Dear Partners,
                            </Typography>
                            <Typography variant="blockquote" paragraph>
                                Please join us for an intimate virtual happy hour to discuss the latest investments customers are focused on in 2021 and where security stacks in the rank.
                            </Typography>
                            <Typography variant="blockquote" paragraph>
                                We’d like to meet over casual conversation with the opportunity for you to hear from industry experts as you decide your security investments and partnerships going into 2021.
                            </Typography>
                            <Typography variant="blockquote" paragraph>
                                We know it’s a saturated market and we want to help you. Hear from special guest, Domenic Perri at Vertex Ventures as he opens with top trends in the market driving investments:
                            </Typography>
                            <List>
                                <List.Item
                                    iconLeft={<CheckIcon color="#F98533" />}
                                >
                                    Remote Workforce
                                </List.Item>
                                <List.Item
                                    iconLeft={<CheckIcon color="#F98533" />}
                                >
                                    Digital Transformation
                                </List.Item>
                                <List.Item
                                    iconLeft={<CheckIcon color="#F98533" />}
                                >
                                    Security ‘Policy as Code’ is Real
                                </List.Item>
                                <List.Item
                                    iconLeft={<CheckIcon color="#F98533" />}
                                >
                                    Ongoing COVID-19 Crisis - Increased Ransomware and Breaches
                                </List.Item>
                            </List>
                            <Typography variant="blockquote" className="mt-2" paragraph>
                                Airgap CEO, Ritesh Agrawal and CloudDefense CEO, Huseni Saboowala will also share a brief overview on the security stack and how you can maximize investments in your partners to provide security services that generate higher revenue and tap into new market segments.
                            </Typography>
                            <Typography variant="blockquote" paragraph>
                                RSVP by November 30th to secure your spot and give us enough time to ship wine to your place of request.
                            </Typography>
                            <Typography variant="blockquote" paragraph>
                                We very much look forward to seeing you and hope you enjoy a very successful evening!
                            </Typography>
                            <Typography variant="blockquote" paragraph>
                                Regards,
                                <br />
                                Airgap and Cloud Defense
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container fluid="xl" className="mt-10 mt-md-15">
                <Row className="pb-10 justify-content-center">
                    <Col lg={6}>
                        <Image
                            alt="event banner"
                            fluid={data.project2021Thumb.childImageSharp.fluid}
                        />
                        <div className="mt-2">
                            <Table
                                bordered
                            >
                                <thead>
                                    <tr>
                                        <td>
                                            Time
                                        </td>
                                        <td>
                                            Activity
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            4:00 p.m. PST
                                        </td>
                                        <td>
                                            Opening Remarks and Welcome – with wine | Introduce Vertex Ventures (Domenic) as sharing trends in market; AIRGAP and CLOUDDEFENSE CEOs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4:15 p.m.
                                        </td>
                                        <td>
                                            Dom at Vertex Ventures – discuss cloud security market and trends
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4:45 p.m.
                                        </td>
                                        <td>
                                            Quick overview from AIRGAP and CLOUDDEFENSE on opportunities for partners
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            5:15 p.m.
                                        </td>
                                        <td>
                                            Open Q&A with partners and CEOs – wine drinking and discussion
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            6:00 p.m.
                                        </td>
                                        <td>
                                            Parting Remarks and CTA
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col lg={6} className="mt-5 mt-md-0">
                        <HubspotForm formId="341ddda9-b9ce-406d-92b6-4381fbf69511">
                            <Typography variant="heading4" className="text-center" paragraph>
                                Thanks you!
                            </Typography>
                        </HubspotForm>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Project2021WebinarPage;
