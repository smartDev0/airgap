import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Button from '../components/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';
import PageMDXProvider from '../components/PageMDXProvider';
import Panel from '../components/Panel';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/seo';
import Typography from '../components/Typography';
import HubspotForm from '../components/HubspotForm';
import HubspotCTA from '../components/HubspotCTA';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const ResourcePage = ({ data, path }) => {
    const post = data.mdx;

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                url={path}
            />
            <Hero
                container="small"
                theme="dark"
                centered
            >
                <Container fluid="xl">
                    <Row>
                        <Col lg={7} className="mx-auto">
                            {(post.frontmatter.template === 'default') && (
                                <Typography variant="heading6" paragraph>
                                    Contact us to learn more about
                                </Typography>
                            )}
                            <Typography variant="heading1">
                                {post.frontmatter.title}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Panel theme="gradient" className="py-10">
                <Container fluid="xl">
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={12} md={(post.frontmatter.template === 'default') ? 5 : 12}>
                                    <PageMDXProvider>
                                        <MDXRenderer>{post.body}</MDXRenderer>
                                    </PageMDXProvider>
                                    {(post.frontmatter.template === 'noemail') && (
                                      <div className="mt-6">
                                        {!post.frontmatter.hubspotCTA && post.frontmatter.downloadable && (
                                          <Button to={post.frontmatter.downloadable} target="_blank">
                                            {`Download ${post.frontmatter.caption}`}
                                          </Button>
                                        )}
                                        {post.frontmatter.hubspotCTA && (
                                          <HubspotCTA title="Download eBook" link={post.frontmatter.hubspotCTA} />
                                        )}
                                      </div>
                                    )}
                                </Col>
                                {(post.frontmatter.template === 'default') && (
                                    <Col xs={12} md={{ span: 6, offset: 1 }} className="mt-5 mt-md-0">
                                        <RevealOnScroll>
                                            <HubspotForm formId="d81f420e-ad88-413a-8f2e-7833bf2d5063">
                                                <>
                                                    <Typography variant="heading4" paragraph>
                                                    Thanks for your submission! Please download your resource copy.
                                                    </Typography>
                                                    <Button to={post.frontmatter.downloadable} target="_blank">
                                                        Download
                                                    </Button>
                                                </>
                                            </HubspotForm>
                                        </RevealOnScroll>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Panel>
            <RevealOnScroll>
                <Container fluid="xl" className="my-10 my-lg-15">
                    <Panel
                        background="globe"
                        theme="white"
                        className="p-5 p-md-10"
                        rounded
                    >
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

export default ResourcePage;

export const pageQuery = graphql`
    query($path: String!) {
        mdx(frontmatter: { path: { eq: $path } }) {
            body
            frontmatter {
                title
                caption
                template
                downloadable
                hubspotCTA
            }
        }
    }
`;
