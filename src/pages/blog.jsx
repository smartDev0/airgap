import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Button from '../components/Button';
import Card from '../components/Card';
import Hero from '../components/Hero';
import HubspotForm from '../components/HubspotForm';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Author from '../components/Author';
import SEO from '../components/seo';
import RevealOnScroll from '../components/RevealOnScroll';
import Typography from '../components/Typography';

import MediumLogo from '../images/logos/medium.svg';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const BlogPage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query {
            posts: allMdx(
                filter: {fileAbsolutePath: {regex: "/content/blog/"}}
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
            ) {
                nodes {
                    frontmatter {
                        title
                        description
                        date(formatString: "DD MMM YYYY")
                        tags
                        path
                        shouldShowAuthor
                        author {
                            name
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
                    excerpt
                }
            }
            mediumPosts: allMediumFeed(
                limit: 3
            ) {
                nodes {
                    id
                    title
                    thumbnail
                    link
                }
            }
        }
    `);

    const firstPost = data.posts.nodes[0];
    const posts = data.posts.nodes.slice(1);
    const mediumPosts = data.mediumPosts.nodes;

    return (
        <>
            <SEO
                title="Blog"
                description="Airgap’s сyber security blog is home to original enterprise network protection, endpoint, and ransomware threat intelligence trends, articles, and research. Learn and read more here!"
                url={location.pathname}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12}>
                            <Typography variant="heading1" paragraph>
                                Airgap Blog
                            </Typography>
                            <Typography variant="heading6" className="mt-3">
                                <Link to="/" wrapper>HOME</Link>
                                {' '}
                                /
                                {' '}
                                BLOG
                            </Typography>
                        </Col>
                        <Col lg={{ span: 8, offset: 2 }} className="mt-3">
                            <Typography variant="blockquote">
                                Our thoughts, opinions, and ideas on the business of
                                <br />
                                security and the security of businesses
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl" className="py-10">
                <Row>
                    <Col md={6} lg={7} className="mt-md-4 mt-lg-0">
                        <RevealOnScroll className="h-100" revealClassName="h-100">
                            <Link to={firstPost.frontmatter.path} wrapper>
                                <Card>
                                    <Card.Thumb
                                        sharp={firstPost.frontmatter.image.childImageSharp}
                                        aspectRatio={11 / 6}
                                    />
                                    <Card.Content>
                                        <Card.Subtitle>
                                            {firstPost.frontmatter.tags.join(' • ')}
                                        </Card.Subtitle>
                                        <Card.Title>
                                            {firstPost.frontmatter.title}
                                        </Card.Title>
                                        {firstPost.frontmatter.shouldShowAuthor && (
                                            <Author
                                                className="mt-1"
                                                date={firstPost.frontmatter.date}
                                                name={firstPost.frontmatter.author.name}
                                                image={firstPost.frontmatter.author.image.childImageSharp.fluid}
                                                isSmallThumb
                                                shouldWrap
                                            />
                                        )}
                                        {!firstPost.frontmatter.shouldShowAuthor && (
                                            <Typography variant="body">
                                                {firstPost.frontmatter.date}
                                            </Typography>
                                        )}
                                    </Card.Content>
                                </Card>
                            </Link>
                        </RevealOnScroll>
                    </Col>
                    {posts.map(node => (
                        <Col key={node.frontmatter.path} xs={12} md={6} lg={{ span: 4, order: 3 }} className="mt-4">
                            <RevealOnScroll className="h-100" revealClassName="h-100">
                                <Link to={node.frontmatter.path} wrapper>
                                    <Card>
                                        <Card.Thumb
                                            sharp={node.frontmatter.image.childImageSharp}
                                            aspectRatio={11 / 6}
                                        />
                                        <Card.Content>
                                            <Card.Subtitle>
                                                {node.frontmatter.tags.join(' • ')}
                                            </Card.Subtitle>
                                            <Card.Title>
                                                {node.frontmatter.title}
                                            </Card.Title>
                                            {node.frontmatter.shouldShowAuthor && (
                                                <Author
                                                    className="mt-1"
                                                    date={node.frontmatter.date}
                                                    name={node.frontmatter.author.name}
                                                    image={node.frontmatter.author.image.childImageSharp.fluid}
                                                    isSmallThumb
                                                    shouldWrap
                                                />
                                            )}
                                            {!node.frontmatter.shouldShowAuthor && (
                                                <Card.Author
                                                    text={node.frontmatter.date}
                                                />
                                            )}
                                        </Card.Content>
                                    </Card>
                                </Link>
                            </RevealOnScroll>
                        </Col>
                    ))}
                    <Col lg={{ span: 5, order: 2 }} className="mt-4 mt-lg-0">
                        <HubspotForm
                            formId="aa1d9350-d751-4284-aefa-d7a1fb3171cf"
                            redirectTo={`${location.origin}/thank-you-signing-our-newsletter`}
                            className="h-100"
                            title={
                                <Typography variant='heading4' paragraph className='text-center'>
                                    Get insight, analysis & news straight to your inbox
                                </Typography>
                            }
                            showPrivacyPolicy
                        >
                            <Typography variant="heading4" paragraph>
                                Thanks for submitting the form.
                            </Typography>
                        </HubspotForm>
                    </Col>
                </Row>
            </Container>
            <Container fluid="xl">
                <Row>
                    <Col xs={12}>
                        <Typography variant="heading4" paragraph>
                            Read on
                            {' '}
                            <span className="sr-only">
                                Medium
                            </span>
                            <img src={MediumLogo} alt="Medium logo" height="22" />
                        </Typography>
                    </Col>
                    {mediumPosts.map((node, ind) => (
                        <Col key={ind} xs={12} lg={4} className="mt-4">
                            <Link to={node.link}>
                                <Card className="mb-2">
                                    <img src={node.thumbnail} className="w-100" alt="blog thumbnail" />
                                    <Card.Content>
                                        <Typography variant="heading5">
                                            {node.title}
                                        </Typography>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
            <RevealOnScroll>
                <Container fluid="xl" className="my-10 my-lg-15">
                    <Panel
                        background="globe"
                        theme="white"
                        className="p-5 p-md-10"
                        rounded>
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

export default BlogPage;
