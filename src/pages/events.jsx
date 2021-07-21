import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Hero from '../components/Hero';
import SEO from '../components/seo';
import EventsTable from '../components/EventsTable';
import PodcastTable from '../components/PodcastTable';
import Typography from '../components/Typography';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const EventsPage = ({ path }) => {
    const data = useStaticQuery(graphql`
        query {
            events: allEventPost(sort: { fields: [date], order: ASC }) {
                nodes {
                    title
                    description
                    date(formatString: "DD MMM YYYY")
                    path
                    type
                    location
                    link
                    isBrightTalk
                    isPodcast
                    podcastEpisode
                    isDownloadble
                    speakers
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    content {
                        excerpt
                    }
                }
            }
        }
    `);

    return (
        <>
            <SEO
                title="Events"
                description={`Airgap shares Ransomware defense strategy, insights and perspectives on today’s most challenging cyber threats,
                    and new technology and best practices for fending off targeted attacks that are putting your organization at risk. Join other
                    security leaders from your area to see a live demo of Airgap’s Zero Trust Isolation Platform in action, and find out why the
                    world’s largest organizations trust Airgap to stop Ransomware spread.`}
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <Typography variant="heading1" paragraph>
                                Events
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <div
              style={{
                backgroundColor: '#F6F6F6',
              }}
            >
              <Container fluid="xl" className="py-10 py-lg-15">
                <Row className="align-items-center">
                  <Col>
                    <Typography variant="blockquote" paragraph>
                        Airgap shares Ransomware defense strategy, insights and perspectives on
                        today’s most challenging cyber threats, and new technology and
                        best practices for fending off targeted attacks that are putting
                        your organization at risk. Join other security leaders from your
                        area to see a live demo of Airgap’s Zero Trust Isolation Platform
                        in action, and find out why the world’s largest organizations trust
                        Airgap to stop Ransomware spread.
                    </Typography>
                  </Col>
                </Row>
              </Container>
            </div>
            <Container fluid="xl" className="py-10">
                <Row>
                    <Col>
                        <Typography variant="heading3" as="h2">
                            Events
                        </Typography>
                    </Col>
                </Row>
                <EventsTable data={data.events.nodes} type='events' />
            </Container>
            <Container fluid="xl" className="py-10">
                <Row>
                    <Col>
                        <Typography variant="heading3" as="h2">
                            BrightTALK On Demand
                        </Typography>
                    </Col>
                </Row>
                <EventsTable data={data.events.nodes} type='talks' />
            </Container>
            <Container fluid="xl" className="py-10">
                <Row>
                    <Col>
                        <Typography variant="heading3" as="h2">
                            Ransomware Battleground Podcast
                        </Typography>
                    </Col>
                </Row>
                <PodcastTable data={data.events.nodes} />
            </Container>
        </>
    );
};

export default EventsPage;
