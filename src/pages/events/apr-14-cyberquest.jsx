import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HubspotForm from '../../components/HubspotForm';
import Hero from '../../components/Hero';
import FacebookIcon from '../../components/icons/FacebookIcon';
import LinkedinIcon from '../../components/icons/LinkedInIcon';
import TwitterIcon from '../../components/icons/TwitterIcon';
import Link from '../../components/Link';
import Panel from '../../components/Panel';
import Typography from '../../components/Typography';
import KevinImage from '../../images/people/kevinbrock.jpg';
import RichardImage from '../../images/people/richardmurray.jpg';
import HowardImage from '../../images/people/hmarshall.jpg';
import RiteshImage from '../../images/people/ragrawal.jpg';

import SEO from "../../components/seo";

const CyberQuestPage = ({ location }) => {

  return (
    <>
      <SEO
        title="CyberQuest"
        url={location.pathname}
      />
      <Hero
        container="small"
        theme="dark"
        centered
      >
        <Container fluid="xl">
          <Row>
            <Col lg={8} className="mx-auto">
              <Typography variant="heading1">
                2021 CyberQuest for Leadership
              </Typography>
              <Typography variant="heading6" className="mt-3">
                By Special Invitation Only
              </Typography>
              <Col lg={{ span: 8, offset: 2 }} className="mt-3">
                <Typography variant="blockquote">
                  Wednesday, April 14, 5:30 PM (ET)
                </Typography>
              </Col>
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
      <Panel theme="gradient" className="py-10">
        <Container fluid="xl">
          <Row>
            <Col xs={12} md={5}>
              <Typography variant="blockquote" paragraph>
                The Cyber Guild will continue its CyberQuest for Leadership program with our next [virtual] Roundtable Dinner* Event on Wednesday,
                April 14th at 5:30 pm [ET] with a moderated fireside exchange as well as our extremely successful virtual breakout session agenda.
                Conducted following Chatham House Rules.
              </Typography>
              <Typography variant="blockquote" paragraph>
                A deeper dive into Ransomware Threat Preparedness, Incident Response, and the ecosystem of resources to call on when the worst-case
                scenario is your reality.
              </Typography>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 1 }} className="mt-5 mt-md-0">
              <HubspotForm formId="bddb9274-ef3f-4247-a943-fc1cdd08c73c">
                <Typography variant="heading4" paragraph>
                    Thanks for submitting the form.
                </Typography>
              </HubspotForm>
            </Col>
          </Row>
        </Container>
      </Panel>
      <Container fluid="xl" className="pt-10">
          <Row className="pb-6">
              <Col>
                  <Typography variant="heading3" paragraph>
                    About CyberQuest 2021
                  </Typography>
                  <Typography variant="blockquote" paragraph>
                    The experiences from 2020 have shown that the trajectory of cybersecurity initiatives to date have fallen short of the needs.
                    Embracing this reality, The Cyber Guild is dedicating its CyberQuest for Leadership initiative as a cornerstone program for 2021.
                  </Typography>
                  <Typography variant="blockquote" paragraph>
                    The Quest is for:
                  </Typography>
                  <Typography variant="intro" paragraph>
                    Leadership to innovate, leadership to cultivate and promote an expanded workforce, and leadership to educate people at all levels
                    of organizations on the common need for cyber awareness and best practices.
                  </Typography>
                  <Typography variant="blockquote" paragraph>
                    Building on the overwhelmingly successful inaugural January CyberQuest event,  The Cyber Guild is hosting its next special virtual
                    CyberQuest Dinner with its partners: The Cyber Future Foundation, NeoSystems, Airgap Inc., and its Cyber Guild Benefactors. offering
                    an opportunity to have open an exchange and conversation, with select small roundtable groups of peers, anchored by a timely moderated
                    keynote fireside chat with two prominent thought leaders to address Ransomware Threat Preparedness, Incident Response, and the ecosystem
                    of resources to call on when the worst-case scenario is your reality.
                  </Typography>
                  <Typography variant="blockquote" paragraph>
                    Virtual seating will be limited. We currently have had almost 100 cybersecurity industry leaders and practitioners express interest
                    and plans to attend the April CyberQuest event.
                  </Typography>
              </Col>
          </Row>
      </Container>
      <div style={{ backgroundColor: '#F3F6F8' }}>
          <Container fluid="xl" className="pt-10">
              <Row>
                  <Col lg={8} className="mx-auto text-md-center">
                    <Typography variant="heading3">
                        About our Moderator and Keynote Fireside Thought Leaders
                      </Typography>
                  </Col>
              </Row>
          </Container>
          <Container fluid="xl" className="pb-10 pb-lg-15">
            <Row className="mt-4" noGutters>
              <Col xs={8} sm={3} md={2}>
                <img src={HowardImage} className="w-100" alt="Howard Marshall" />
              </Col>
              <Col md={{
                  span: 9,
                  offset: 1,
              }}
                  className="mt-4 mt-md-0"
              >
                <Typography variant="heading4" paragraph>
                  Howard Marshall – Moderator
                </Typography>
                <Typography variant="heading6" paragraph>
                  Global Intelligence lead, Accenture Security cyber threat intelligence services.
                </Typography>
                <Typography variant="blockquote">
                  As a recognized cybersecurity expert and strategist, Marshall has served in various leadership
                  positions throughout his more than 20-year career with the Federal Bureau of Investigation (FBI).
                </Typography>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Typography variant="blockquote" paragraph>
                  Howard Marshall is the Managing Director- Global Cyber Threat Intelligence Lead at Accenture Security.
                  Before joining Accenture, Howard served as the Deputy Assistant Director of the FBI’s Cyber Division.
                  He held six other positions during his tenure, to include Special Agent in Charge of the Louisville Division.
                  Howard received a BA and JD from the University of Arkansas at Fayetteville and most recently completed
                  Carnegie Mellon’s CISO certification course.
                </Typography>
              </Col>
            </Row>
            <Row className="mt-4" noGutters>
              <Col xs={8} sm={3} md={2}>
                <img src={KevinImage} className="w-100" alt="Kevin R. Brock" />
              </Col>
              <Col md={{
                  span: 9,
                  offset: 1,
              }}
                  className="mt-4 mt-md-0"
              >
                  <Typography variant="heading4" paragraph>
                    Kevin R. Brock - Expert Panelist
                  </Typography>
                  <Typography variant="blockquote">
                    Kevin R. Brock brings a rare mix of experience from the highest levels of the Federal Bureau of Investigation,
                    the Office of Director of National Intelligence, acclaimed management consulting firm Booz Allen Hamilton,
                    and his own entrepreneurial initiatives.
                  </Typography>
              </Col>
            </Row>
            <Row>
              <Col className="mt-4">
                <Typography variant="blockquote" paragraph>
                  As a career FBI Agent, Mr. Brock gained extensive experience directing complex, high risk and high profile investigations.
                  Toward the end of his FBI career, Mr. Brock was called upon when there was a need for a strategic leader to help launch
                  a number of important projects. For example, he authored the founding justification documents establishing, defining,
                  and resourcing a new Cyber Division within the FBI.
                </Typography>
                <Typography variant="blockquote" paragraph>
                  Later, Mr. Brock was named the FBI’s first Assistant Director for Intelligence where he helped start-up, establish, and lead
                  a new Intelligence Directorate in the FBI following recommendations of the 9/11 Commission.
                </Typography>
                <Typography variant="blockquote" paragraph>
                  He was then asked to become the first Principal Deputy Director of a post 9/11 presidential initiative known as the National
                  Counterterrorism Center (NCTC). There, he negotiated, crafted, and helped firmly establish NCTC’s operational role within
                  the Intelligence Community. Mr. Brock was recognized with the Presidential Rank Award for Meritorious Service to the Nation in 2006.
                </Typography>
                <Typography variant="blockquote" paragraph>
                  While at Booz Allen, Mr. Brock helped triple the growth of the firm’s federal law enforcement account over five years and significantly
                  contributed to the firm’s strategic thinking around emerging cyber security needs. He became a sought-after speaker on cyber threat
                  trends and strategies.
                </Typography>
                <Typography variant="blockquote" paragraph>
                  In 2014, Mr. Brock founded BrockCRS, LLC where he provides senior leaders valuable perspective and advice on mitigating cyber threat related risk.
                </Typography>
                <Typography variant="blockquote" paragraph>
                  In 2015, he founded NewStreet Global Solutions, LLC, a collaboration of accomplished executives uniquely positioned to provide specific
                  expertise to companies looking to bring leading edge technology to the public safety and intelligence communities.
                </Typography>
                <Typography variant="blockquote" paragraph>
                  Mr. Brock is a Senior Fellow for Cybersecurity Strategy at the Center for Financial Stability. He is a former Federal Advisory Board
                  Member for Dell/EMC and currently sits on advisory boards of a number of other technology companies. He maintains a current TS security
                  clearance and is a trained FBI crisis/ hostage negotiator.
                </Typography>
                <Typography variant="blockquote">
                  Mr. Brock is a graduate of the University of Connecticut. He is a regular columnist for thehill.com and has appeared on numerous major
                  cable news programs providing commentary on law enforcement and intelligence matters.
                </Typography>
              </Col>
            </Row>
            <Row className="mt-4 align-center" noGutters>
              <Col xs={8} sm={3} md={2} className="speaker-image-wrapper">
                <img src={RichardImage} className="w-100 speaker-image" alt="Richard Murray" />
              </Col>
              <Col md={{
                  span: 9,
                  offset: 1,
              }}
                  className="mt-4 mt-md-0"
              >
                <Typography variant="heading4" paragraph>
                  Richard Murray – Expert Panelist
                </Typography>
                <Typography variant="heading6" paragraph>
                  Supervisory Special Agent, FBI Dallas Cyber Task Force
                </Typography>
                <Typography variant="blockquote">
                  Supervisory Special Agent (SSA) Richard Murray manages the FBI Dallas Cyber Task Force (CTF). The FBI Dallas CTF is responsible for
                  investigating criminal and National Security computer intrusions in the greater Dallas-Fort Worth area and North Texas. SSA Murray has
                  been an FBI Special Agent for 19 years and in his current position since August 2016. SSA Murray has more than a decade of experience
                  working in the FBI's Cyber program in field offices and FBIHQ.
                </Typography>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Typography variant="blockquote" paragraph>
                  Prior FBI experience includes work as a Supervisory Special Agent at FBI HQ Cyber Division where he worked in the FBI Cyber Division’s
                  Extraterritorial program. Provided guidance, leadership and oversight to FBI Cyber agents assigned overseas to facilitate information
                  sharing, increase cooperation on computer intrusion investigations and improve relationships with foreign partners.
                </Typography>
              </Col>
            </Row>
            <Row className="mt-4" noGutters>
              <Col xs={8} sm={3} md={2}>
                <img src={RiteshImage} className="w-100" alt="Ritesh Agrawal" />
              </Col>
              <Col md={{
                  span: 9,
                  offset: 1,
              }}
                  className="mt-4 mt-md-0"
              >
                <Typography variant="heading4" paragraph>
                  Ritesh Agrawal – Expert Panelist
                </Typography>
                <Typography variant="blockquote">
                  Ritesh Agrawal is the Co-Founder and the CEO of Airgap Networks. In this capacity, Ritesh is focused on accelerating public and private
                  sector enterprise adoption of a modern Zero Trust security approach to their missions and operations.
                </Typography>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Typography variant="blockquote" paragraph>
                  Ritesh brings over two decades of relevant experience across executive leadership, product management, engineering, and sales functions
                  with some of the world’s leading security and information technology companies.
                </Typography>
                <Typography variant="blockquote" paragraph>
                  Prior to Airgap, he was responsible for managing Juniper’s data center and service provider security portfolio.
                </Typography>
                <Typography variant="blockquote" paragraph>
                  Ritesh has earned his Master’s degree in Electrical Engineering from Arizona State University and he enjoys reading and hiking in his spare time.
                </Typography>
              </Col>
            </Row>
          </Container>
      </div>
    </>
  );
}

export default CyberQuestPage;
