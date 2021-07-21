import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import CustomMarkdown from '../components/CustomMarkdown';
import Hero from '../components/Hero';
import Link from '../components/Link';
import SEO from '../components/seo';
import Typography from '../components/Typography';
import HubspotForm from '../components/HubspotForm';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const PartnersPage = ({ path }) => {
    const data = useStaticQuery(graphql`
        query {
            page: pagesYaml(id: {eq: "partners"}) {
                breadcrumb
                hero {
                    title
                }
                copy {
                    text
                }
            }
        }
    `);

    return (
        <>
            <SEO
                title="Partners"
                description="At Airgap, we love our partners. Partners play a vital role in Airgap’s mission to help build a safer enterprise for customers worldwide."
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12}>
                            <Typography variant="heading1" paragraph>
                                {data.page.hero.title}
                            </Typography>
                            <Typography variant="heading6" as="p" className="mt-3">
                                <Link to="/" wrapper>HOME</Link>
                                {' '}
                                /
                                {' '}
                                {data.page.breadcrumb}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl" className="my-10 my-md-15">
                <Row className="justify-content-center align-items-center">
                    <Col lg={6}>
                      <CustomMarkdown>
                        {data.page.copy.text}
                      </CustomMarkdown>
                    </Col>
                    <Col lg={6} className="mt-5 mt-lg-0">
                        <HubspotForm formId="ef73330f-d668-4167-8beb-503f7aefb90d">
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

export default PartnersPage;
