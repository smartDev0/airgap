import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Image from 'gatsby-image';

import { Container, Row, Col } from 'react-bootstrap';

import Box from '../components/Box';
import Button from '../components/Button';
import Hero from '../components/Hero';
import Panel from '../components/Panel';
import SEO from '../components/seo';
import RevealOnScroll from '../components/RevealOnScroll';
import Table from '../components/Table';
import Typography from '../components/Typography';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const ZeroTrustAccessAppliance = ({ path }) => {
    const data = useStaticQuery(graphql`
        query {
            product: pagesYaml(id: {eq: "ztaa"}) {
                hero {
                    title
                }
                copy {
                    text
                }
                specification {
                    title
                    image {
                        childImageSharp {
                            fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    table {
                        head {
                            title
                            content
                        }
                        rows {
                            title
                            content
                        }
                    }
                }
                cta {
                    title
                    text
                    actionTitle
                    actionURL
                }
            }
        }
    `);

    const { product } = data;

    return (
        <>
            <SEO
                title="Zero Trust Access Appliance"
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12} md={9} className="mx-auto">
                            <Typography variant="heading1">
                                {product.hero.title}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="lg" className="pt-10">
                <Row className="justify-content-center align-items-center">
                    <Col md={5}>
                        <Box>
                            <Image
                                alt="Photo of Zero Trust Gateway"
                                fluid={product.specification.image.childImageSharp.fluid}
                            />
                        </Box>
                    </Col>
                    <Col md={5}>
                      <Typography variant="blockquote" className="mt-4 mt-md-0">
                          {product.copy.text}
                      </Typography>
                    </Col>
                </Row>
                <Row className="py-10 justify-content-center">
                    <Col lg={10}>
                        <Typography variant="heading3" as="h2" paragraph>
                            {product.specification.title}
                        </Typography>
                        <Table>
                            <thead>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                        <Typography variant="intro">
                                            {product.specification.table.head.content}
                                        </Typography>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {product.specification.table.rows.map(row => (
                                    <tr>
                                        <td>
                                            <Typography>
                                                {row.title}
                                            </Typography>
                                        </td>
                                        <td>
                                            <Typography>
                                                {row.content}
                                            </Typography>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <div style={{ backgroundColor: '#F3F6F8' }}>
                <RevealOnScroll>
                    <Container fluid="xl" className="py-10 py-lg-15">
                        <Panel
                            background="globe"
                            theme="white"
                            className="p-5 p-md-10"
                            rounded
                        >
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <Typography variant="heading3" as="h2" paragraph>
                                        {product.cta.title}
                                    </Typography>
                                    <Typography>
                                        {product.cta.text}
                                    </Typography>
                                    <div className="mt-4">
                                        <Button to={product.cta.actionURL} variant="ctaAccent">
                                            {product.cta.actionTitle}
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Panel>
                    </Container>
                </RevealOnScroll>
            </div>
        </>
    );
};

export default ZeroTrustAccessAppliance;
