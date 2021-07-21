import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

// import HubspotForm from '../components/HubspotForm';
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

const NSPage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query {
            nsp: pagesYaml(id: {eq: "nsp"}) {
                hero {
                    title
                }
                cards {
                    logo {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    authorLogo {
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
                    shouldShowAuthors
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
    const { nsp, posts } = data;

    return (
        <>
            <SEO
                title="Network Segmentation"
                description=""
                url={location.pathname}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12} md={9} className="mx-auto">
                            <Typography variant="heading1" paragraph>
                                {nsp.hero.title}
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
                                            sharp={nsp.cards.logo.childImageSharp}
                                            aspectRatio={11 / 6}
                                        />
                                        <Card.Content>
                                            <Card.Title>
                                                DarkSide Ransomware: Best Practices for Preventing Business Disruption from Ransomware Attacks
                                            </Card.Title>
                                            <Author
                                                className="mt-1"
                                                date="11 May 2021"
                                                name="CISA & FBI"
                                                image={nsp.cards.authorLogo.childImageSharp.fluid}
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
                    {nsp.contents.map((content, index) => (
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
                                {content.shouldShowAuthors && (
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
                        {nsp.quote.text}
                    </Typography>
                    <Link to={nsp.quote.linkedinUrl}>
                        <Author
                            className="mt-2"
                            name={nsp.quote.author}
                            image={nsp.quote.authorImage.childImageSharp.fluid}
                            isSmallThumb
                        />
                    </Link>
                </Quote>
            </div>
            {/* <Container fluid="xl" className="pt-10">
                <Row className="pb-10 pb-md-15 justify-content-center">
                    <Col lg={8} className="">
                        <HubspotForm
                            formId={nsp.form.formId}
                            title={(
                                <Typography variant="heading5">TEST FORM</Typography>
                            )}
                        >
                        </HubspotForm>
                    </Col>
                </Row>
            </Container> */}
        </>
    );
};

export default NSPage;
