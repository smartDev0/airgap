import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Hero from '../components/Hero';
import ModalVideo from '../components/ModalVideo';
import SEO from '../components/seo';
import Typography from '../components/Typography';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const RansomwareBattlegroundPage = ({ path }) => (
    <>
      <SEO
        title="Ransomware Battleground"
        url={path}
      />
      <Hero theme="dark" container="small" centered>
          <Container fluid="xl">
              <Row>
                  <Col xs={12}>
                      <Typography variant="heading1" as="h1" paragraph>
                        Ransomware Battleground
                      </Typography>
                  </Col>
              </Row>
          </Container>
      </Hero>
      <Container fluid="xl" className="my-10">
        <Row className="mt-10 align-items-center">
            <Col lg={{
                span: 6,
                offset: 1, // 1 or 0
                order: 2, // 2 or 1
            }}
            >
              <ModalVideo
                  url="https://f.hubspotusercontent10.net/hubfs/6848218/Ep%206%20Ransomware%20Battleground%20%20RaaS.mp4"
                  poster="ransomwareBattleground"
              />
            </Col>
            <Col lg={{
                span: 5,
                offset: 0, // 0 or 1
                order: 1,
            }}
                className="mt-4 mt-lg-0"
            >
              <Typography variant="heading4" className="text-center">
                Episode 6. RaaS
              </Typography>
            </Col>
        </Row>
        <Row className="mt-10 align-items-center">
            <Col lg={{
                span: 6,
                offset: 0, // 1 or 0
                order: 1, // 2 or 1
            }}
            >
              <ModalVideo
                  url="https://f.hubspotusercontent10.net/hubfs/6848218/Ep%209%20Ransomware%20Battleground%20Tactics%20(1).mp4"
                  poster="ransomwareBattleground"
              />
            </Col>
            <Col lg={{
                span: 5,
                offset: 1, // 0 or 1
                order: 1,
            }}
                className="mt-4 mt-lg-0"
            >
              <Typography variant="heading4" className="text-center">
                Episode 9. Ransomware Tactics
              </Typography>
            </Col>
        </Row>
        <Row className="mt-10 align-items-center">
            <Col lg={{
                span: 6,
                offset: 1, // 1 or 0
                order: 2, // 2 or 1
            }}
            >
              <ModalVideo
                  url="https://f.hubspotusercontent10.net/hubfs/6848218/Ep%2010%20Ransomware%20Battleground%20Big%20Game%20Hunting.mp4"
                  poster="ransomwareBattleground"
              />
            </Col>
            <Col lg={{
                span: 5,
                offset: 0, // 0 or 1
                order: 1,
            }}
                className="mt-4 mt-lg-0"
            >
              <Typography variant="heading4" className="text-center">
                Episode 10. Big Game Hunting
              </Typography>
            </Col>
        </Row>
      </Container>
    </>
);

export default RansomwareBattlegroundPage;
