import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import HubspotForm from '../components/HubspotForm';
import Button from '../components/Button';
import ModalVideo from '../components/ModalVideo';
import Card from '../components/Card';
import CustomMarkdown from '../components/CustomMarkdown';
import Hero from '../components/Hero';
import Author from '../components/Author';
import SEO from '../components/seo';
import Quote from '../components/Quote';
import RevealOnScroll from '../components/RevealOnScroll';
import Typography from '../components/Typography';
import Link from '../components/Link';
import FacebookIcon from '../components/icons/FacebookIcon';
import LinkedinIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const CPRAPage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query {
            cpra: pagesYaml(id: {eq: "cpra"}) {
                hero {
                    title
                }
                customBlogPost {
                    title
                    date
                    author
                    thumbnail {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    authorImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                contents {
                    text
                    videoURL
                    buttonLink
                    posterId
                    authors {
                        name
                        position
                        linkedinUrl
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
                quote {
                    text
                    author
                    linkedinUrl
                    authorImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                       }
                    }
                }
                form {
                    title
                    formId
                    response
                }
                formDescription {
                    title
                    paragraph
                    button
                    buttonURL
                }
            }
            posts: allMdx(
                filter: {frontmatter: {id: {regex: "/^(nifcpa|hcpra)$/"}}}
            ) {
                nodes {
                    frontmatter {
                        id
                        title
                        description
                        date(formatString: "DD MMM YYYY")
                        tags
                        path
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
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
                    }
                }
            }
        }
    `);
    const { cpra, posts } = data;

    return (
        <>
            <SEO
                title="Colonial Pipeline Ransomware Attack"
                description="The Colonial Pipeline debacle is only the latest in a spate of ransomware attacks, which include the
                    targeting of a water treatment plant in Florida, and the Texas-based SolarWinds IT company. As the pipeline reopens
                    across the map, let’s look into how Zero Trust Isolation can deliver strong IT/OT/IoT segmentation and help stop
                    Ransomware spread in real-time. Ransomware as a Service and the “affiliates” targeted high-profile utilities, healthcare,
                    and manufacturing and commercialize cybercrime. It’s critical to adopt Zero Trust Isolation technology and equip with
                    Ransomware Kill Switch in your organizations."
                url={location.pathname}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12} md={9} className="mx-auto">
                            <Typography variant="heading1" paragraph>
                                {cpra.hero.title}
                            </Typography>
                            <div className="mt-5 d-flex justify-content-center">
                                <Link to={`https://www.facebook.com/sharer/sharer.php?u=https://airgap.io${location.pathname}`} className="mr-2">
                                    <FacebookIcon color="#FFFFFF" />
                                </Link>
                                <Link to={`https://www.linkedin.com/shareArticle?mini=true&url=https://airgap.io${location.pathname}&title=&summary=&source=`} className="mr-2">
                                    <LinkedinIcon color="#FFFFFF" />
                                </Link>
                                <Link to={`https://twitter.com/intent/tweet?url=https://airgap.io${location.pathname}&text=`}>
                                    <TwitterIcon color="#FFFFFF" />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <div style={{ backgroundColor: '#F3F6F8' }}>
                <Container fluid="xl" className="py-10">
                    <Row>
                        <Col xs={12} md={6} lg={{ span: 4, order: 3 }} className="mt-4">
                            <RevealOnScroll className="h-100" revealClassName="h-100">
                                <Link to="https://us-cert.cisa.gov/ncas/alerts/aa21-131a" wrapper>
                                    <Card>
                                        <Card.Thumb
                                            sharp={cpra.customBlogPost.thumbnail.childImageSharp}
                                            aspectRatio={11 / 6}
                                        />
                                        <Card.Content>
                                            <Card.Title>
                                                {cpra.customBlogPost.title}
                                            </Card.Title>
                                            <Author
                                                className="mt-1"
                                                date={cpra.customBlogPost.date}
                                                name={cpra.customBlogPost.author}
                                                image={cpra.customBlogPost.authorImage.childImageSharp.fluid}
                                                isSmallThumb
                                                shouldWrap
                                            />
                                        </Card.Content>
                                    </Card>
                                </Link>
                            </RevealOnScroll>
                        </Col>
                        {posts.nodes.map(post => (
                            <Col xs={12} md={6} lg={{ span: 4, order: 3 }} className="mt-4" key={post.frontmatter.id}>
                                <RevealOnScroll className="h-100" revealClassName="h-100">
                                    <Link to={post.frontmatter.path} wrapper>
                                        <Card>
                                            <Card.Thumb
                                                sharp={post.frontmatter.image.childImageSharp}
                                                aspectRatio={11 / 6}
                                            />
                                            <Card.Content>
                                                <Card.Title>
                                                    {post.frontmatter.title}
                                                </Card.Title>
                                                <Author
                                                    className="mt-1"
                                                    date={post.frontmatter.date}
                                                    name={post.frontmatter.author.name}
                                                    image={post.frontmatter.author.image.childImageSharp.fluid}
                                                    isSmallThumb
                                                    shouldWrap
                                                />
                                            </Card.Content>
                                        </Card>
                                    </Link>
                                </RevealOnScroll>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <RevealOnScroll>
                <Container fluid="xl" className="pb-10">
                    {cpra.contents.map((content, index) => (
                        <Row className="mt-10 mt-lg-15 align-items-center" key={index}>
                            <Col lg={{
                                span: 6,
                                offset: (index % 2 === 0) ? 1 : 0,
                                order: (index % 2 === 0) ? 2 : 1,
                            }}
                            >
                                <ModalVideo url={content.videoURL} poster={content.posterId} />
                            </Col>
                            <Col lg={{
                                span: 5,
                                offset: (index % 2 === 0) ? 0 : 1,
                                order: 1,
                            }}
                                className="mt-4 mt-lg-0"
                            >
                                <CustomMarkdown>
                                    {content.text}
                                </CustomMarkdown>
                                {content.authors && (
                                    <div className="d-flex flex-column flex-lg-row mt-2">
                                        {content.authors.map((author, index) => (
                                            <Link to={author.linkedinUrl} key={index}>
                                                <Author
                                                    className="mt-1"
                                                    name={author.name}
                                                    image={author.image.childImageSharp.fluid}
                                                    isWideThumb
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                <Button className="mt-5" to={content.buttonLink}>
                                    Learn more
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </RevealOnScroll>
            <div style={{ backgroundColor: '#F3F6F8' }}>
                <Quote>
                    <Typography variant="blockquote">
                        {cpra.quote.text}
                    </Typography>
                    <Link to={cpra.quote.linkedinUrl}>
                        <Author
                            className="mt-2"
                            name={cpra.quote.author}
                            image={cpra.quote.authorImage.childImageSharp.fluid}
                            isSmallThumb
                        />
                    </Link>
                </Quote>
            </div>
            <Container fluid="xl" className="pt-10">
                <Row className="pb-10 pb-md-15 justify-content-center">
                    <Col lg={6}>
                        <Typography variant="heading4" paragraph>
                            {cpra.formDescription.title}
                        </Typography>
                        <CustomMarkdown>
                            {cpra.formDescription.paragraph}
                        </CustomMarkdown>
                        <Button to={cpra.formDescription.buttonURL} className="mt-2">
                            {cpra.formDescription.button}
                        </Button>
                    </Col>
                    <Col lg={6} className="mt-5 mt-lg-0">
                        <HubspotForm
                            formId={cpra.form.formId}
                            title={
                                <Typography variant='heading4' paragraph className='text-center'>
                                    {cpra.form.title}
                                </Typography>
                            }
                        >
                            <Typography variant="heading4" paragraph>
                                {cpra.form.response}
                            </Typography>
                        </HubspotForm>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CPRAPage;
