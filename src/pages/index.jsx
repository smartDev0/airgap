import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
// import BenefitsTable from '../components/BenefitsTable';
import Box from '../components/Box';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import DamageCounter from '../components/DamageCounter';
import Hero from '../components/Hero';
import Link from '../components/Link';
import ScrollIndicator from '../components/ScrollIndicator';
import SEO from '../components/seo';
import Select from '../components/Select';
import Panel from '../components/Panel';
import Reveal from '../components/Reveal';
import RevealOnScroll from '../components/RevealOnScroll';
import Tab from '../components/Tab';
import Typography from '../components/Typography';
import ModalVideo from '../components/ModalVideo';
import WebinarBanner from '../components/WebinarBanner';
import BackgroundVideo from '../components/BackgroundVideo';

import ShieldVisual from '../images/visuals/shield.svg';

import GlobeVisual from '../images/visuals/globe.svg';
import RocketVisual from '../images/visuals/rocket.svg';
import CloudVisual from '../images/visuals/cloud.svg';

import PenetrateVisual from '../images/visuals/penetrate.svg';
import ProliferateVisual from '../images/visuals/proliferate.svg';
import ParalyzeVisual from '../images/visuals/paralyze.svg';

import LaptopVisual from '../images/visuals/laptop.svg';
import PropagationVisual from '../images/visuals/propagation.svg';
import SafeguardVisual from '../images/visuals/safeguard.svg';
import LaptopVisualInactive from '../images/visuals/laptop-inactive.svg';
import PropagationVisualInactive from '../images/visuals/propagation-inactive.svg';
import SafeguardVisualInactive from '../images/visuals/safeguard-inactive.svg';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const IndexPage = ({ path }) => {
    const data = useStaticQuery(graphql`
        query {
            home: pagesYaml(id: {eq: "home"}) {
                hero {
                    title
                    subtitle
                }
                webinar {
                    title
                    subtitle
                    url
                    urlTitle
                    logoURL {
                        childImageSharp {
                            fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                webinar2 {
                    title
                    url
                    urlTitle
                    logoURL {
                        childImageSharp {
                            fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                video {
                    title
                    text
                    buttonText
                    buttonURL
                }
                content1 {
                    title
                    text
                    counterCaption
                    thumbCaption
                }
                ransomwareOverview {
                    title
                    ransomware1 {
                        title
                        text
                    }
                    ransomware2 {
                        title
                        text
                    }
                    ransomware3 {
                        title
                        text
                    }
                }
                features {
                    feature1 {
                        title
                        intro
                        text
                    }
                    feature2 {
                        title
                        intro
                        text
                    }
                    feature3 {
                        title
                        intro
                        text
                    }
                }
                benefits {
                    title
                    text
                    tableHead {
                        column1
                        column2
                        column3
                    }
                    tableContent {
                        column1
                        column2
                        column3
                    }
                }
                featuredResources {
                    title
                }
                contact {
                    title
                    text
                    cards {
                        title
                        text
                    }
                }
            }
            schemaLogo: file(relativePath: {eq: "logos/square.jpg"}) {
                publicURL
            }
            heroThumb: file(relativePath: {eq: "hero-thumb.png"}) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            il1: file(relativePath: {eq: "illustrations/i1.png"}) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            il2: file(relativePath: {eq: "illustrations/i2.png"}) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            il3: file(relativePath: {eq: "illustrations/i3.png"}) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            resources: allMdx(
                filter: {fileAbsolutePath: {regex: "/content/resources/"}}
                sort: { fields: [frontmatter___order] }
                limit: 1000
            ) {
                nodes {
                    frontmatter {
                        caption
                        subtitle
                        actionTitle
                        path
                        image {
                            childImageSharp {
                                fluid(quality: 100, maxWidth: 500) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const { home } = data;
    const resources = data.resources.nodes;

    const tabs = [
        {
            index: 0,
            title: 'Eliminate lateral threat propagation',
        },
        {
            index: 1,
            title: 'Prevent application & data breaches',
        },
        {
            index: 2,
            title: 'Protect legacy insecure protocols',
        },
    ];

    const [tabIndex, setTabIndex] = useState(tabs[0].index);
    const [tab, setTab] = useState(tabs[0]);

    return (
        <>
            <Helmet>
                <link rel="preload" href="/home.mp4" as="video" type="video/mp4" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Airgap",
                        "legalName": "Airgap Networks Inc.",
                        "url": "https://airgap.io/",
                        "logo": `${data.schemaLogo.publicURL}`,
                        "foundingDate": "2018",
                        "founders": [
                            {
                                "@type": "Person",
                                "name": "Ritesh Agrawal"
                            },
                            {
                                "@type": "Person",
                                "name": "Satish Mohan"
                            },
                            {
                                "@type": "Person",
                                "name": "Vinay Adavi"
                            }
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "2755 Great America Way Suite 135",
                            "addressLocality": "Santa Clara",
                            "addressRegion": "CA",
                            "postalCode": "95054",
                            "addressCountry": "USA"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "customer support",
                            "telephone": "[+1-415-480-8075]",
                            "email": "info@airgap.io"
                        },
                        "sameAs": [
                            "https://twitter.com/AirgapNetworks",
                            "https://www.linkedin.com/company/28830189/",
                            "https://www.brighttalk.com/channel/18621/"
                        ]
                    })}
                </script>
            </Helmet>
            <SEO
                title="Home"
                description="Airgap is the home for Zero Trust Isolation and industry's first Ransomware Kill Switch. We stop Ransomware and any malicious lateral communications in seconds."
                url={path}
            />
            {/* <Hero theme="dark">
                <Container fluid="xl">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <Typography variant="heading1">
                                {home.hero.title}
                            </Typography>
                            <div className="mt-4">
                                <Typography variant="heading4">
                                    {home.hero.subtitle}
                                </Typography>
                            </div>
                            <div className="d-none d-lg-block mt-15">
                                <ScrollIndicator to="/#solution" />
                            </div>
                        </Col>
                        <Col lg={5} className="mt-4 mt-lg-0">
                            <Image
                                alt="Hero thumb"
                                fluid={data.heroThumb.childImageSharp.fluid}
                            />
                            <div className="d-lg-none text-center mt-10">
                                <ScrollIndicator to="/#solution" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Hero> */}
            <BackgroundVideo url={'/background.mov'} theme="dark">
                <Container fluid="xl">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <Typography variant="heading1">
                                {home.hero.title}
                            </Typography>
                            <div className="mt-4">
                                <Typography variant="heading4">
                                    {home.hero.subtitle}
                                </Typography>
                            </div>
                            <div className="d-none d-lg-block mt-15">
                                <ScrollIndicator to="/#solution" />
                            </div>
                        </Col>
                        <Col lg={5} className="mt-4 mt-lg-0">
                            {/* <Image
                                alt="Hero thumb"
                                fluid={data.heroThumb.childImageSharp.fluid}
                            /> */}
                            <div className="d-lg-none text-center mt-10">
                                <ScrollIndicator to="/#solution" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </BackgroundVideo>
            <WebinarBanner
                leftTitle={home.webinar.title}
                rightTitle={home.webinar2.title}
                leftSubtitle={home.webinar.subtitle}
                leftLogoURL={home.webinar.logoURL}
                rightLogoURL={home.webinar2.logoURL}
                leftButtonURL={home.webinar.url}
                rightButtonURL={home.webinar2.url}
                leftButtonTitle={home.webinar.urlTitle}
                rightButtonTitle={home.webinar2.urlTitle}
            />
            <div style={{ backgroundColor: 'rgb(11, 12, 27)', color: 'white' }}>
                <Container fluid="xl" className="py-10 py-lg-15">
                    <Row className="align-items-center">
                        <Col md={6}>
                            <Typography variant="heading3" as="h2" paragraph>
                                {home.video.title}
                            </Typography>
                            <Typography variant="blockquote" paragraph>
                                {home.video.text}
                            </Typography>
                            <Button to={home.video.buttonURL}>
                                {home.video.buttonText}
                            </Button>
                        </Col>
                        <Col md={6} className="mt-4 mt-md-0">
                            <ModalVideo url="/home.mp4" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ backgroundColor: 'rgb(11, 12, 27)', color: 'white' }}>
                <RevealOnScroll>
                    <Container fluid="xl">
                        <Row className="pt-10 pt-15 pb-15">
                            <Col lg={7}>
                                <Typography variant="heading3" as="h2" paragraph>
                                    {home.content1.title}
                                </Typography>
                                <Typography variant="blockquote">
                                    {home.content1.text}
                                </Typography>
                                <div className="mt-4">
                                    <DamageCounter />
                                    <div style={{ color: "#B3B3B3" }}>
                                        <Typography variant="intro">
                                            {home.content1.counterCaption}
                                        </Typography>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{ span: 4, offset: 1 }} className="pt-4 pt-lg-0 text-center">
                                <Reveal>
                                    <img src={ShieldVisual} width="152" alt="Shield" />
                                    <Typography variant="display3" as="h5" className="mt-4" paragraph>
                                        {home.content1.thumbCaption}
                                    </Typography>
                                    <Typography variant="small">
                                        <Link underline to="https://www.sophos.com/en-us/medialibrary/Gated-Assets/white-papers/sophos-the-state-of-ransomware-2020-wp.pdf">
                                            Source1
                                        </Link>
                                        {' '}
                                        and
                                        {' '}
                                        <Link underline to="https://cybersecurityventures.com/cybercrime-damage-costs-10-trillion-by-2025/">
                                            Source2
                                        </Link>
                                    </Typography>
                                </Reveal>
                            </Col>
                        </Row>
                    </Container>
                </RevealOnScroll>

            </div>
            <div style={{ backgroundColor: '#0b0c1b', color: 'white' }}>
                <RevealOnScroll>
                    <Container fluid="xl">
                        <Row className="pt-10 pt-lg-15 text-center">
                            <Col>
                                <Typography variant="heading3">
                                    {home.ransomwareOverview.title}
                                </Typography>
                                <Row>
                                    <Col lg={4} className="mt-6">
                                        <div className="mb-3">
                                            <img src={PenetrateVisual} alt="Penetrate" />
                                        </div>
                                        <Typography variant="heading4" paragraph>
                                            {home.ransomwareOverview.ransomware1.title}
                                        </Typography>
                                        <Typography variant="intro">
                                            {home.ransomwareOverview.ransomware1.text}
                                        </Typography>
                                    </Col>
                                    <Col lg={4} className="mt-6">
                                        <div className="mb-3">
                                            <img src={ProliferateVisual} alt="Proliferate" />
                                        </div>
                                        <Typography variant="heading4" paragraph>
                                            {home.ransomwareOverview.ransomware2.title}
                                        </Typography>
                                        <Typography variant="intro">
                                            {home.ransomwareOverview.ransomware2.text}
                                        </Typography>
                                    </Col>
                                    <Col lg={4} className="mt-6">
                                        <div className="mb-3">
                                            <img src={ParalyzeVisual} alt="Paralyze" />
                                        </div>
                                        <Typography variant="heading4" paragraph>
                                            {home.ransomwareOverview.ransomware3.title}
                                        </Typography>
                                        <Typography variant="intro">
                                            {home.ransomwareOverview.ransomware3.text}
                                        </Typography>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </RevealOnScroll>

            </div>
            <div style={{ backgroundColor: '#0b0c1b', color: 'white' }}>
                <RevealOnScroll>
                    <Container id="solution" fluid="xl" className="py-10 py-lg-15">
                        <Row>
                            <Col xs={12}>
                                <div className="text-center">
                                    <Typography variant="heading3" paragraph>
                                        Zero Trust Isolation Platform
                                    </Typography>
                                    <Typography variant="blockquote">
                                        The best defense against ransomware
                                    </Typography>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-10" noGutters>
                            <Col xs={12} className="d-lg-none">
                                <Select
                                    values={tabs}
                                    value={tab}
                                    setValue={(value) => {
                                        setTab(value);
                                        setTabIndex(value.index);
                                    }}
                                />
                            </Col>
                            <Col lg={6} className="d-none d-lg-block">
                                <div>
                                    <Tab
                                        icon={tabIndex === 0 ? PropagationVisual : PropagationVisualInactive}
                                        tabImageAlt="propagation"
                                        active={tabIndex === 0}
                                        onClick={() => { setTabIndex(0) }}
                                    >
                                        <Typography variant="intro" className="mb-1">
                                            Eliminate lateral threat propagation
                                        </Typography>
                                        <Typography>
                                            Don’t let one infected device bring down the enterprise
                                        </Typography>
                                    </Tab>
                                </div>
                                <div className="mt-4">
                                    <Tab
                                        icon={tabIndex === 1 ? LaptopVisual : LaptopVisualInactive}
                                        tabImageAlt="laptop"
                                        active={tabIndex === 1}
                                        onClick={() => { setTabIndex(1) }}
                                    >
                                        <Typography variant="intro" className="mb-1">
                                            Prevent application & data breaches
                                        </Typography>
                                        <Typography>
                                            Prevent threats from propagating to your business applications
                                        </Typography>
                                    </Tab>
                                </div>
                                <div className="mt-4">
                                    <Tab
                                        icon={tabIndex === 2 ? SafeguardVisual : SafeguardVisualInactive}
                                        tabImageAlt="safeguard"
                                        active={tabIndex === 2}
                                        onClick={() => { setTabIndex(2) }}
                                    >
                                        <Typography variant="intro" className="mb-1">
                                            Protect legacy insecure protocols
                                        </Typography>
                                        <Typography>
                                            Don’t let legacy protocols put your organisation at risk
                                        </Typography>
                                    </Tab>
                                </div>
                            </Col>
                            <Col lg={{ span: 5, offset: 1 }} className="mt-6 mt-lg-0">
                                {tabIndex === 0 && (
                                    <div>
                                        <div className="mb-3 mx-auto" style={{ width: '90%' }}>
                                            <Image
                                                alt="Zero Trust Isolation Platform Logo"
                                                fluid={data.il1.childImageSharp.fluid}
                                            />
                                        </div>
                                        <Typography variant="heading3" paragraph>
                                            Endpoint isolation prevents lateral threat movement
                                        </Typography>
                                        <Typography>
                                            Agentless zero trust isolation employs network-based approach to eliminate
                                            unauthorized communication and protect all corporate devices. Easy and automated
                                            policy management ensures safe onboarding.
                                        </Typography>
                                    </div>
                                )}
                                {tabIndex === 1 && (
                                    <div>
                                        <div className="mb-3 mx-auto" style={{ width: '80%' }}>
                                            <Image
                                                alt="Zero Trust Isolation Platform Logo"
                                                fluid={data.il2.childImageSharp.fluid}
                                            />
                                        </div>
                                        <Typography variant="heading3" paragraph>
                                            Zero trust access protects business apps and data.
                                        </Typography>
                                        <Typography>
                                            Zero trust access reduces enterprise attack surface by challenging SSO/MFA authentication
                                            and eliminating network level access for all users regardless of their access method or access location.
                                            Don't let remote work put your data at risk. Allow work from anywhere.
                                        </Typography>
                                    </div>
                                )}
                                {tabIndex === 2 && (
                                    <div>
                                        <div className="mb-3 mx-auto" style={{ width: '70%' }}>
                                            <br /><br />
                                            <Image
                                                alt="Zero Trust Isolation Platform Logo"
                                                fluid={data.il3.childImageSharp.fluid}
                                            />
                                        </div>
                                        <Typography variant="heading3" paragraph>
                                            Zero trust isolation protects legacy protocols
                                        </Typography>
                                        <Typography>
                                            Zero trust isolation automatically and continuously profiles legacy
                                            protocols and permits only authorized usage. Purpose built AI/ML engine ensures
                                            anomaly detection and automatically quarantines endpoints for instant protection.
                                        </Typography>
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </RevealOnScroll>

            </div>
            <div id="why" style={{ backgroundColor: '#0b0c1b', color: 'white' }}>
                <RevealOnScroll>
                    <Container fluid="xl" className="py-10 py-lg-15">
                        <Row className="pb-10">
                            <Col className="text-center">
                                <Typography variant="heading3">
                                    Why Airgap?
                                </Typography>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col lg={{ span: 4, offset: 1, order: 2 }}>
                                <Box className="p-6 text-center">
                                    <img src={GlobeVisual} alt="Globe" />
                                </Box>
                            </Col>
                            <Col lg={{ span: 6, order: 1 }} className="mt-4 mt-lg-0">
                                <Typography variant="heading3" paragraph>
                                    {home.features.feature1.title}
                                </Typography>
                                <Typography variant="intro" paragraph>
                                    {home.features.feature1.intro}
                                </Typography>
                                <Typography>
                                    {home.features.feature1.text}
                                </Typography>
                            </Col>
                        </Row>
                        <Row className="mt-10 align-items-center">
                            <Col lg={{ span: 4, offset: 1 }}>
                                <Box className="p-6 text-center">
                                    <img src={RocketVisual} alt="Rocket" />
                                </Box>
                            </Col>
                            <Col lg={{ span: 6, offset: 1 }} className="mt-4 mt-lg-0">
                                <Typography variant="heading3" paragraph>
                                    {home.features.feature2.title}
                                </Typography>
                                <Typography variant="intro" paragraph>
                                    {home.features.feature2.intro}
                                </Typography>
                                <Typography>
                                    {home.features.feature2.text}
                                </Typography>
                            </Col>
                        </Row>
                        <Row className="mt-10 align-items-center">
                            <Col lg={{ span: 4, offset: 1, order: 2 }}>
                                <Box className="p-6 text-center">
                                    <img src={CloudVisual} alt="Cloud" />
                                </Box>
                            </Col>
                            <Col lg={{ span: 6, order: 1 }} className="mt-4 mt-lg-0">
                                <Typography variant="heading3" paragraph>
                                    {home.features.feature3.title}
                                </Typography>
                                <Typography variant="intro" paragraph>
                                    {home.features.feature3.intro}
                                </Typography>
                                <Typography>
                                    {home.features.feature3.text}
                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                </RevealOnScroll>
            </div>
            <div style={{ backgroundColor: '#0b0c1b', color: 'white' }}>
                <RevealOnScroll>
                    <Container id="benefits" fluid="xl" className="py-10">
                        {/* <Container id="benefits" fluid="xl" className="py-10 py-lg-15"> */}
                        {/* <Row>
                        <Col lg={10} className="mx-auto text-center">
                            <Typography variant="heading3" paragraph>
                                {home.benefits.title}
                            </Typography>
                            <Typography variant="blockquote">
                                {home.benefits.text}
                            </Typography>
                        </Col>
                    </Row>
                    <Row className="mt-6 mt-lg-10">
                        <Col lg={10} className="mx-auto text-center">
                            <BenefitsTable data={home.benefits} />
                        </Col>
                    </Row> */}
                        <Row id="resources" className="text-center">
                            <Col className="mx-auto">
                                <Typography variant="heading3" paragraph>
                                    {home.featuredResources.title}
                                </Typography>
                                <Row className="mt-5 text-center">
                                    {resources.map((resource) => (
                                        <Col lg={4} className="mt-5" key={resource.frontmatter.path}>
                                            <Panel theme="light" className="d-flex flex-column pt-4 pb-8 px-4 h-100">
                                                <Row>
                                                    <Col xs={8} className="mx-auto">
                                                        <Image
                                                            alt="Resource thumbnail"
                                                            fluid={{
                                                                ...resource.frontmatter.image.childImageSharp.fluid,
                                                                aspectRatio: 5 / 6,
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <div className="mt-6">
                                                    <Typography variant="heading4">
                                                        {resource.frontmatter.caption}
                                                    </Typography>
                                                    {resource.frontmatter.subtitle && (
                                                        <Typography className="mt-2">
                                                            {resource.frontmatter.subtitle}
                                                        </Typography>
                                                    )}
                                                </div>
                                                <div className="mt-3 flex-grow-1 d-flex justify-content-center align-items-end">
                                                    <Button
                                                        to={resource.frontmatter.path}
                                                        variant="linkDark"
                                                    >
                                                        {resource.frontmatter.actionTitle}
                                                    </Button>
                                                </div>
                                            </Panel>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </RevealOnScroll>

            </div>
            <div id="contact" style={{ backgroundColor: '#0b0c1b', color: 'white' }}>
                <RevealOnScroll>
                    <Container fluid="xl">
                        <Row className="py-10 py-lg-15 text-center">
                            <Col>
                                <Typography variant="heading3" paragraph>
                                    {home.contact.title}
                                </Typography>
                                <Typography variant="blockquote">
                                    {home.contact.text}
                                </Typography>
                            </Col>
                        </Row>
                        <Row className="pb-10 justify-content-center">
                            <Col lg={6}>
                                <Row>
                                    {home.contact.cards.map((card) => (
                                        <Col key={card.title} sm={6} className="mb-4">
                                            <Box className="text-center p-4" theme="dark">
                                                <Typography variant="heading4" paragraph>
                                                    {card.title}
                                                </Typography>
                                                <Typography className="mt-4">
                                                    {card.text}
                                                </Typography>
                                            </Box>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            <Col lg={6} className="mt-5 mt-md-0">
                                <ContactForm
                                    formUrl="https://api.hsforms.com/submissions/v3/integration/submit/6848218/0a012a01-52f7-4cff-a320-9de12dd6ddca"
                                    pageOptions={{
                                        path: '/',
                                        name: 'Home page',
                                    }}
                                />
                            </Col>
                        </Row>
                    </Container>
                </RevealOnScroll>
            </div>
        </>
    );
};

export default IndexPage;
