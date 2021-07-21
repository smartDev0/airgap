import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';
import PageMDXProvider from '../components/PageMDXProvider';
import Panel from '../components/Panel';
import SEO from '../components/seo';
import Typography from '../components/Typography';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const TextPage = ({ data, path }) => {
    const { post } = data;

    return (
        <>
            <SEO
                title={post.title}
                description={post.description}
                url={path}
            />
            <Hero
                container="small"
                theme="dark"
                centered
            >
                <Container fluid="xl">
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }}>
                            <Typography paragraph variant="heading1">
                                {post.title}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Panel theme="gradient" className="py-10">
                <Container fluid="xl">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <PageMDXProvider>
                                <MDXRenderer>{post.content.body}</MDXRenderer>
                            </PageMDXProvider>
                        </Col>
                    </Row>
                </Container>
            </Panel>
        </>
    );
};

export default TextPage;

export const pageQuery = graphql`
  query($slug: String!) {
    post: textPage(slug: { eq: $slug }) {
      title
      description
      content {
        body
      }
    }
  }
`;
