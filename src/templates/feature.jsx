import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import PageMDXProvider from '../components/PageMDXProvider';
import Panel from '../components/Panel';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/seo';
import Typography from '../components/Typography';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const FeaturePage = ({ data, path }) => {
    const post = data.mdx;

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                url={path}
            />
            <Hero container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col lg={7} className="mx-auto">
                            <Typography variant="heading5" paragraph>
                                {post.frontmatter.caption}
                            </Typography>
                            <Typography variant="heading2" as="h1">
                                {post.frontmatter.title}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Panel theme="gradient" className="py-10">
                <Container fluid="xl">
                    <Row>
                        <Col xs={12} lg={{ span: 10, offset: 1 }}>
                            <Row>
                                <Col xs={12} md={5}>
                                    <PageMDXProvider>
                                        <MDXRenderer>{post.body}</MDXRenderer>
                                    </PageMDXProvider>
                                </Col>
                                <Col xs={12} md={{ span: 6, offset: 1 }} className="mt-5 mt-md-0">
                                    <RevealOnScroll>
                                        <ContactForm
                                            pageOptions={{
                                                path: post.frontmatter.path,
                                                name: post.frontmatter.title,
                                            }}
                                        />
                                    </RevealOnScroll>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Panel>
        </>
    );
};

export default FeaturePage;

export const pageQuery = graphql`
    query($path: String!) {
        mdx(frontmatter: { path: { eq: $path } }) {
            body
            frontmatter {
                title
                caption
                path
            }
        }
    }
`;
