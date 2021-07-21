import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Hero from '../components/Hero';
import Button from '../components/Button';
import SEO from '../components/seo';
import Link from '../components/Link';
import Quote from '../components/Quote';
import Author from '../components/Author';
import Typography from '../components/Typography';

import CunninghamPhoto from '../images/people/ccunningham.png';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const TheaterSessionsPage = ({ path }) => (
    <>
      <SEO
        title="Theater Sessions"
        description="Ransomware shouldn't be the scourge that it is. This is a solvable problem, or at the very least one that we know how to manage and limits its spread. No organization has an excuse anymore with today's security solutions to get ripped by these attacks."
        url={path}
      />
      <Hero theme="dark" container="small" centered>
          <Container fluid="xl">
              <Row>
                  <Col xs={12}>
                      <Typography variant="heading1" as="h1" paragraph>
                          Theater Session
                      </Typography>
                  </Col>
              </Row>
          </Container>
      </Hero>
      <div style={{ backgroundColor: '#F3F6F8' }}>
          <Quote>
              <Typography variant="blockquote">
                Ransomware shouldn't be the scourge that it is. This is a solvable problem, or at the very least one
                that we know how to manage and limits its spread. No organization has an excuse anymore with today's
                security solutions to get ripped by these attacks.
              </Typography>
              <Link to="https://www.linkedin.com/in/dr-chase-cunningham-54b26243/">
                  <Author
                     className="mt-2"
                     name="Dr. Chase Cunningham"
                     imageSrc={CunninghamPhoto}
                     isSmallThumb
                  />
              </Link>
          </Quote>
      </div>
      <Container fluid="xl" className="my-10">
        <Row>
          <Col>
            <Typography variant="heading3" className="text-center">
              Monday, 17 May 2021
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
              <iframe
                src="https://player.vimeo.com/video/548160262?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="MON. - Get Ahead of Ransomware Spread with Automated Ransomware Kill Switch with Ritesh Agrawal, CEO and Co-Founder, Airgap"
              ></iframe>
            </Col>
            <Col lg={{
                span: 5,
                offset: 0, // 0 or 1
                order: 1,
            }}
                className="mt-4 mt-lg-0"
            >
              <Typography variant="heading4">
                Get Ahead of Ransomware Spread with Automated Ransomware Kill Switch with Ritesh Agrawal, CEO and Co-Founder, Airgap
              </Typography>
              <Button className="mt-2" to="https://vimeo.com/548160262">Watch on Vimeo</Button>
            </Col>
        </Row>
        <Row className="mt-10 align-items-center">
            <Col lg={{
                span: 6,
                offset: 0, // 1 or 0
                order: 1, // 2 or 1
            }}
            >
              <iframe
                src="https://player.vimeo.com/video/548159995?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="MON. - Zero Trust Security Solution - Secure Access to Any Resource with Richard Stiennon, Author of Security Yearbook 2021"
              ></iframe>
            </Col>
            <Col lg={{
                span: 5,
                offset: 1, // 0 or 1
                order: 1,
            }}
                className="mt-4 mt-lg-0"
            >
              <Typography variant="heading4">
                Zero Trust Security Solution - Secure Access to Any Resource with Richard Stiennon, Author of Security Yearbook 2021
              </Typography>
              <Button className="mt-2" to="https://vimeo.com/548159995">Watch on Vimeo</Button>
            </Col>
        </Row>
        <Row className="mt-10 align-items-center">
            <Col lg={{
                span: 6,
                offset: 1, // 1 or 0
                order: 2, // 2 or 1
            }}
            >
              <iframe
                src="https://player.vimeo.com/video/551614292?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay;fullscreen; picture-in-picture"
                allowFullScreen
                title="MON. - Ransomware Kill Switch Demo and Use Cases with Shad Gunderson, Solution Architect, Airgap"
              ></iframe>
            </Col>
            <Col lg={{
                span: 5,
                offset: 0, // 0 or 1
                order: 1,
            }}
                className="mt-4 mt-lg-0"
            >
              <Typography variant="heading4">
                Ransomware Kill Switch Demo and Use Cases with Shad Gunderson, Solution Architect, Airgap
              </Typography>
              <Button className="mt-2" to="https://vimeo.com/551614292">Watch on Vimeo</Button>
            </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: '#F3F6F8' }}>
        <Container fluid="xl" className="py-10">
          <Row>
            <Col>
              <Typography variant="heading3" className="text-center">
                Tuesday, 18 May 2021
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
                <iframe
                  src="https://player.vimeo.com/video/548159250?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="TUE. - IoMT Device CyberSecurity and Agentless Ransomware Kill Switch in Healthcare With Kris Kistler, CISO of Cognizant Health"
                ></iframe>
              </Col>
              <Col lg={{
                  span: 5,
                  offset: 0, // 0 or 1
                  order: 1,
              }}
                  className="mt-4 mt-lg-0"
              >
                <Typography variant="heading4">
                  IoMT Device CyberSecurity and Agentless Ransomware Kill Switch in Healthcare With Kris Kistler, CISO of Cognizant Health
                </Typography>
                <Button className="mt-2" to="https://vimeo.com/548159250">Watch on Vimeo</Button>
              </Col>
          </Row>
          <Row className="mt-10 align-items-center">
              <Col lg={{
                  span: 6,
                  offset: 0, // 1 or 0
                  order: 1, // 2 or 1
              }}
              >
                <iframe
                  src="https://player.vimeo.com/video/548158864?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="TUE. - Introducing Airgap Ransomware Vulnerability Scanner with Jason Adair, VP of Sales, Airgap"
                ></iframe>
              </Col>
              <Col lg={{
                  span: 5,
                  offset: 1, // 0 or 1
                  order: 1,
              }}
                  className="mt-4 mt-lg-0"
              >
                <Typography variant="heading4">
                  Introducing Airgap Ransomware Vulnerability Scanner with Jason Adair, VP of Sales, Airgap
                </Typography>
                <Button className="mt-2" to="https://vimeo.com/548158864">Watch on Vimeo</Button>
              </Col>
          </Row>
          <Row className="mt-10 align-items-center">
              <Col lg={{
                  span: 6,
                  offset: 1, // 1 or 0
                  order: 2, // 2 or 1
              }}
              >
                <iframe
                  src="https://player.vimeo.com/video/548158386?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="TUE. - Ransomware Can Be Stopped With Ted Harrington, Amazon Best Seller Author of &amp;ldquo;Hackable&amp;rdquo;"
                ></iframe>
              </Col>
              <Col lg={{
                  span: 5,
                  offset: 0, // 0 or 1
                  order: 1,
              }}
                  className="mt-4 mt-lg-0"
              >
                <Typography variant="heading4">
                  Ransomware Can Be Stopped With Ted Harrington, Amazon Best Seller Author of “Hackable”
                </Typography>
                <Button className="mt-2" to="https://vimeo.com/548158386">Watch on Vimeo</Button>
              </Col>
          </Row>
          <Row className="mt-10 align-items-center">
              <Col lg={{
                  span: 6,
                  offset: 0, // 1 or 0
                  order: 1, // 2 or 1
              }}
              >
                <iframe
                  src="https://player.vimeo.com/video/548158100?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="TUE. - ?????? With Mitch Parker  CISO Indiana University Health"
                ></iframe>
              </Col>
              <Col lg={{
                  span: 5,
                  offset: 1, // 0 or 1
                  order: 1,
              }}
                  className="mt-4 mt-lg-0"
              >
                <Typography variant="heading4">
                  IoMT Device CyberSecurity and Agentless Ransomware Kill Switch in Healthcare With Mitch Parker, CISO Indiana University Health
                </Typography>
                <Button className="mt-2" to="https://vimeo.com/548158100">Watch on Vimeo</Button>
              </Col>
          </Row>
        </Container>
      </div>
      <Container fluid="xl" className="my-10">
        <Row>
          <Col>
            <Typography variant="heading3" className="text-center">
              Wednesday, 19 May 2021
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
              <iframe
                src="https://player.vimeo.com/video/548157767?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="WED. - Automated Response to Ransomware in Education With James Mountain, CISO of Palmer College of Chiropractic"
              ></iframe>
            </Col>
            <Col lg={{
                span: 5,
                offset: 0, // 0 or 1
                order: 1,
            }}
                className="mt-4 mt-lg-0"
            >
              <Typography variant="heading4">
                Automated Response to Ransomware in Education With James Mountain, CISO of Palmer College of Chiropractic
              </Typography>
              <Button className="mt-2" to="https://vimeo.com/548157767">Watch on Vimeo</Button>
            </Col>
        </Row>
        <Row className="mt-10 align-items-center">
            <Col lg={{
                span: 6,
                offset: 0, // 1 or 0
                order: 1, // 2 or 1
            }}
            >
              <iframe
                src="https://player.vimeo.com/video/548157368?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="WED. - Mitre and Ransomware Security Framework With Adam Pennington Cyber Security Engineer"
              ></iframe>
            </Col>
            <Col lg={{
                span: 5,
                offset: 1, // 0 or 1
                order: 1,
            }}
                className="mt-4 mt-lg-0"
            >
              <Typography variant="heading4">
                MITRE ATT&CK Ransomware Security Framework With Adam Pennington Cyber Security Engineer
              </Typography>
              <Button className="mt-2" to="https://vimeo.com/548157368">Watch on Vimeo</Button>
            </Col>
        </Row>
        <Row className="mt-10 align-items-center">
            <Col lg={{
                span: 6,
                offset: 1, // 1 or 0
                order: 2, // 2 or 1
            }}
            >
              <iframe
                src="https://player.vimeo.com/video/548156705?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="WED. - 2021 and Beyond: Dealing with Reality, Hype, and Truth in Zero Trust With Dr. Chase Cunningham, Cybersecurity Analyst"
              ></iframe>
            </Col>
            <Col lg={{
                span: 5,
                offset: 0, // 0 or 1
                order: 1,
            }}
                className="mt-4 mt-lg-0"
            >
              <Typography variant="heading4">
                2021 and Beyond: Dealing with Reality, Hype, and Truth in Zero Trust With Dr. Chase Cunningham, Cybersecurity Analyst
              </Typography>
              <Button className="mt-2" to="https://vimeo.com/548156705">Watch on Vimeo</Button>
            </Col>
        </Row>
      </Container>
    </>
);

export default TheaterSessionsPage;
