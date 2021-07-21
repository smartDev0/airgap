import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomMDXProvider from '../components/CustomMDXProvider';
import Hero from '../components/Hero';
import FacebookIcon from '../components/icons/FacebookIcon';
import LinkedinIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import Link from '../components/Link';
import SEO from '../components/seo';
import Typography from '../components/Typography';
import '../scss/bootstrap.scss';
import '../scss/main.scss';

const JobPostsPage = ({ data }) => {
    const { post } = data;

    return (
        <>
            <SEO
                title={post.title}
                description={post.description}
                url={post.path}
            />
            <Hero container="offset" theme="dark"  centered>
                <Container fluid="xl">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <Typography paragraph variant="heading1">
                                {post.title}
                            </Typography>
                            <div className="mt-5 d-flex justify-content-center">
                                <Link to={`https://www.facebook.com/sharer/sharer.php?u=https://airgap.io${post.path}`} className="mr-2">
                                    <FacebookIcon color="#FFFFFF" />
                                </Link>
                                <Link to={`https://www.linkedin.com/shareArticle?mini=true&url=https://airgap.io${post.path}&title=&summary=&source=`} className="mr-2">
                                    <LinkedinIcon color="#FFFFFF" />
                                </Link>
                                <Link to={`https://twitter.com/intent/tweet?url=https://airgap.io${post.path}&text=`}>
                                    <TwitterIcon color="#FFFFFF" />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl">
                <Row className="pt-4 pb-10">
                    <Col lg={{ span: 8, offset: 2 }}>
                        <CustomMDXProvider>
                            <MDXRenderer>{post.content.body}</MDXRenderer>
                        </CustomMDXProvider>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default JobPostsPage;

export const pageQuery = graphql`
    query($path: String!) {
        post: job( path: { eq: $path }) {
            title
            description
            date(formatString: "DD MMM YYYY")
            path
            location
            department
            content {
                body
            }
        }
    }
`;
