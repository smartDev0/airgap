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
import Author from '../components/Author';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/seo';
import Typography from '../components/Typography';
import PropTypes from '../util/PropTypes';
import '../scss/bootstrap.scss';
import '../scss/main.scss';

const BlogPostPage = ({ data }) => {
    const post = data.mdx;

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                url={post.frontmatter.path}
                imageUrl={post.frontmatter.image.childImageSharp.fluid.src}
                type="article"
            />
            <Hero container="offset" centered>
                <Container fluid="xl">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <Typography paragraph variant="heading1">
                                {post.frontmatter.title}
                            </Typography>
                            <div className="mt-5 d-flex justify-content-center">
                                <Link to={`https://www.facebook.com/sharer/sharer.php?u=https://airgap.io${post.frontmatter.path}`} className="mr-2">
                                    <FacebookIcon color="#0F1E57" />
                                </Link>
                                <Link to={`https://www.linkedin.com/shareArticle?mini=true&url=https://airgap.io${post.frontmatter.path}&title=&summary=&source=`} className="mr-2">
                                    <LinkedinIcon color="#0F1E57" />
                                </Link>
                                <Link to={`https://twitter.com/intent/tweet?url=https://airgap.io${post.frontmatter.path}&text=`}>
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
                            alt={post.frontmatter.title}
                            sizes={{ ...post.frontmatter.image.childImageSharp.fluid, aspectRatio: 9 / 4 }}
                        />
                        <RevealOnScroll className="mt-6">
                            <CustomMDXProvider>
                                <MDXRenderer>{post.body}</MDXRenderer>
                            </CustomMDXProvider>
                        </RevealOnScroll>
                        {post.frontmatter.shouldShowAuthor && (
                            <Link to={post.frontmatter.author.linkedinUrl}>
                                <Author
                                    className="mt-5"
                                    name={post.frontmatter.author.name}
                                    image={post.frontmatter.author.image.childImageSharp.fluid}
                                    shouldWrap
                                />
                            </Link>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

BlogPostPage.propTypes = {
    data: PropTypes.shape(PropTypes.object.isRequired),
};

BlogPostPage.defaultProps = {
    data: null,
};

export default BlogPostPage;

export const pageQuery = graphql`
    query($path: String!) {
        mdx(frontmatter: { path: { eq: $path } }) {
            body
            frontmatter {
                title
                date(formatString: "DD MMM YYYY")
                tags
                path
                shouldShowAuthor
                author {
                    name
                    linkedinUrl
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;
