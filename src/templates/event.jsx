import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomMDXProvider from '../components/CustomMDXProvider';
import Hero from '../components/Hero';
import FacebookIcon from '../components/icons/FacebookIcon';
import LinkedinIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import Link from '../components/Link';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/seo';
import Typography from '../components/Typography';
import PropTypes from '../util/PropTypes';
import '../scss/bootstrap.scss';
import '../scss/main.scss';

const EventPage = ({ data }) => {
    const { post } = data;

    return (
        <>
            <SEO
                title={post.title}
                description={post.description}
                url={post.path}
            />
            <Hero container="offset" centered>
                <Container fluid="xl">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <Typography paragraph variant="heading1">
                                {post.title}
                            </Typography>
                            <div className="mt-5 d-flex justify-content-center">
                                <Link to={`https://www.facebook.com/sharer/sharer.php?u=https://airgap.io${post.path}`} className="mr-2">
                                    <FacebookIcon color="#0F1E57" />
                                </Link>
                                <Link to={`https://www.linkedin.com/shareArticle?mini=true&url=https://airgap.io${post.path}&title=&summary=&source=`} className="mr-2">
                                    <LinkedinIcon color="#0F1E57" />
                                </Link>
                                <Link to={`https://twitter.com/intent/tweet?url=https://airgap.io${post.path}&text=`}>
                                    <TwitterIcon color="#0F1E57" />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl">
                <Row className="my-8 mt-md-0">
                    <Col lg={{ span: 8, offset: 2 }}>
                        <Image
                            alt={post.title}
                            sizes={{ ...post.image.childImageSharp.fluid, aspectRatio: 9 / 4 }}
                        />
                        <RevealOnScroll className="mt-6">
                            <CustomMDXProvider>
                                <MDXRenderer>{post.content.body}</MDXRenderer>
                            </CustomMDXProvider>
                        </RevealOnScroll>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

EventPage.propTypes = {
    data: PropTypes.shape(PropTypes.object.isRequired),
};

EventPage.defaultProps = {
    data: null,
};

export default EventPage;

export const pageQuery = graphql`
    query($path: String!) {
        post: eventPost( path: { eq: $path }) {
            title
            description
            date(formatString: "DD MMM YYYY")
            path
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            content {
                body
            }
        }
    }
`;
