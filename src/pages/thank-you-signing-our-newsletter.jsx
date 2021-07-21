import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap';

import CustomMarkdown from '../components/CustomMarkdown';
import Hero from '../components/Hero';
import SEO from '../components/seo';
import Typography from '../components/Typography';
import HubspotForm from '../components/HubspotForm';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const ThanksPage = ({ path }) => {
    const data = useStaticQuery(graphql`
        query {
            page: pagesYaml(id: {eq: "thanks"}) {
                hero {
                    title
                }
                copy {
                    text
                }
                form {
                    id
                    response
                }
            }
        }
    `);

    const { page } = data;

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <SEO
                title="Thank You for Signing up for Our Newsletter"
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12}>
                            <Typography variant="heading2" as="h1" paragraph>
                                { page.hero.title }
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl" className="my-10 my-md-15">
                <Row className="justify-content-center align-items-center">
                    <Col lg={6}>
                      <CustomMarkdown>
                          { page.copy.text }
                      </CustomMarkdown>
                    </Col>
                    <Col lg={6} className="mt-5 mt-lg-0">
                        <HubspotForm formId={page.form.id}>
                            <Typography variant="heading4" className="text-center">
                                { page.form.response }
                            </Typography>
                        </HubspotForm>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ThanksPage;
