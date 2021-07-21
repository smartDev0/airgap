import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Card from '../components/Card';
import Hero from '../components/Hero';
import Link from '../components/Link';
import SEO from '../components/seo';
import FacebookIcon from '../components/icons/FacebookIcon';
import LinkedinIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import RevealOnScroll from '../components/RevealOnScroll';
import Typography from '../components/Typography';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const CareersPage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query {
            jobs: allJob(sort: { fields: [date], order: ASC }) {
                nodes {
                    title
                    description
                    date(formatString: "DD MMM YYYY")
                    path
                    location
                    department
                    content {
                        excerpt
                    }
                }
            }
        }
    `);

    const jobs = data.jobs.nodes;

    return (
        <>
            <SEO
                title="Careers"
                description="Airgap Networks is working on cutting-edge security solutions for ransomware protection and always open to new talents."
                url={location.pathname}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12}>
                            <Typography variant="heading1" paragraph>
                                Careers
                            </Typography>
                            <div className="mt-5 d-flex justify-content-center">
                                <Link to={`https://www.facebook.com/sharer/sharer.php?u=https://airgap.io${location.pathname}`} className="mr-2">
                                    <FacebookIcon color="#FFFFFF" />
                                </Link>
                                <Link to={`https://www.linkedin.com/shareArticle?mini=true&url=https://airgap.io${location.pathname}&title=&summary=&source=`} className="mr-2">
                                    <LinkedinIcon color="#FFFFFF" />
                                </Link>
                                <Link to={`https://twitter.com/intent/tweet?url=https://airgap.io${location.pathname}&text=`}>
                                    <TwitterIcon color="#FFFFFF" />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl" className="py-10">
                <Row>
                    <Col>
                        <Typography variant="heading2" className="text-center">
                            Job Openings
                        </Typography>
                    </Col>
                    <Col lg={12}>
                        <Row className="mt-4">
                            {jobs.map(node => (
                                <Col key={node.path} xs={12} lg={4} className="mb-4">
                                    <RevealOnScroll className="h-100" revealClassName="h-100">
                                        <Link to={node.path} wrapper>
                                            <Card>
                                                <Card.Content>
                                                    <Card.Subtitle>
                                                        {`${node.location} • ${node.department}`}
                                                    </Card.Subtitle>
                                                    <Card.Title>
                                                        {node.title}
                                                    </Card.Title>
                                                    <Card.Text text={node.description} />
                                                </Card.Content>
                                            </Card>
                                        </Link>
                                    </RevealOnScroll>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CareersPage;
