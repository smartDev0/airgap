/* eslint jsx-a11y/accessible-emoji: 0 */
/* TM is not an emoji! */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HubspotForm from '../../components/HubspotForm';
import Hero from '../../components/Hero';
import Button from '../../components/Button';
import FacebookIcon from '../../components/icons/FacebookIcon';
import LinkedinIcon from '../../components/icons/LinkedInIcon';
import TwitterIcon from '../../components/icons/TwitterIcon';
import Link from '../../components/Link';
import Panel from '../../components/Panel';
import CallOutBox from '../../components/CallOutBox';
import DateTimelineTable from '../../components/DateTimelineTable';
import Typography from '../../components/Typography';
import rksSwitchImage from '../../images/uploads/rks_switch.png';

import SEO from "../../components/seo";

const BlackHatPage = ({ location }) => {
  const boothSessionsData = [
    {
      date: "Aug 4 2021",
      time: "10AM PST",
      sessions: [
        {
          event: "Introducing Ransomware Kill Switch™ + Demo",
          speaker: "Jeff McDaniel"
        },
      ],
    },
    {
      date: "",
      time: "11AM PST",
      sessions: [
        {
          event: "Ransomware Kill Switch™ in Digital Risk Protection Services",
          speaker: "Ritesh Agrawal and Kurtis Minder"
        },
      ],
    },
    {
      date: "",
      time: "2PM PST",
      sessions: [
        {
          event: "Automated Ransomware Kill Switch™ Use Case Demo",
          speaker: "Jeff McDaniel"
        },
      ],
    },
    {
      date: "Aug 5, 2021",
      time: "10AM PST",
      sessions: [
        {
          event: "Introducing Agentless Zero Trust Network Segmentation",
          speaker: "Ritesh Agrawal and Dr. Chase Cunningham"
        },
      ],
    },
    {
      date: "",
      time: "11AM PST",
      sessions: [
        {
          event: "Ransomware Kill Switch™: What is your “Cyber Hygiene”?",
          speaker: "Ritesh Agrawal and Sidd Gavirneni"
        },
      ],
    },
    {
      date: "",
      time: "2PM PST",
      sessions: [
        {
          event: "3 Key Ingredients for Endpoint Resilience",
          speaker: ""
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Black Hat 2021 USA"
        description="Meet Airgap Networks at Black Hat USA 2021 in person at Innovation City (IC)
          Booth 34. Learn how our autonomous Ransomware Kill Switch™ can control the Ransomware blast radius
          in real time and shore up your security posture with Zero Trust Isolation."
        url={location.pathname}
        imageUrl="/blackhat_share.png"
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
                Black Hat 2021 USA
              </Typography>
              <Typography variant="heading6" className="mt-2">
                Mandalay Bay / Las Vegas On-Site Innovation City Booth 34 + Virtual
              </Typography>
              <Col lg={{ span: 8, offset: 2 }} className="mt-2">
                <Typography variant="blockquote">
                  Aug 3 - Aug 5, 2021
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
      <Panel theme="light" className="py-10">
        <Container fluid="xl">
          <Row>
            <Col xs={12} md={5} className="d-flex flex-column justify-content-center">
              <Typography variant="heading4" paragraph>
                Join Airgap at Black Hat USA 2021 
              </Typography>
              <Typography variant="blockquote" paragraph>
                Ransomware is one of the most dangerous threats to organizations. Servers, laptops, and mobile devices are becoming
                increasingly complex to secure, especially with the surge in remote work.
              </Typography>
              <Typography variant="blockquote" paragraph>
                These attacks typically begin by penetrating the network through stolen credentials and remote access malware. Then
                they spread through enterprises like wildfire. How do you halt the speed of ransomware propagation? Meet our team at
                Black Hat USA 2021 Innovation City (IC) Booth 34. Learn how the automated Ransomware Kill Switch™ can control the
                Ransomware attack surface in real-time and shore up your security posture with Zero Trust Isolation.
              </Typography>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 1 }} className="mt-5 mt-md-0">
              <HubspotForm
                formId="99b661e2-9e8d-42c8-bf3c-793249a3e30f"
              >
                <Typography variant="heading4" paragraph>
                    Thanks for submitting the form.
                </Typography>
              </HubspotForm>
            </Col>
          </Row>
        </Container>
      </Panel>
      <Panel className="py-10">  
        <Container fluid="xl">
          <Row>
            <Col>
              <Typography variant="heading3" className="mx-auto text-md-center">
                Theater Session / Webinar
              </Typography>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Typography variant="heading4">
                Cyber Insurance and Ransomware Incident Response: Are You Covered?
              </Typography>
              <Typography paragraph>
                There has never been a brighter spotlight on the societal scourge of ransomware than over the
                past couple of months. From gasoline shortage to disrupted healthcare IT, we are seeing an
                international uproar for governments and industry to do more and hold cybercriminals accountable.
              </Typography>
              <Typography paragraph>
                Join us to hear from a distinguished panel of experts in Cyber Insurance, Ransomware Investigation,
                Incident Response, and Solution Remediation to learn the 1-2-3 action steps you need to take now to
                be prepared for when (not IF) you are hit by Ransomware attacks.
              </Typography>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center pt-2">
                <Button to="https://zoom.us/webinar/register/WN__Oh6QnW6SQuSWSiy9CMM4A" variant="pill">
                  Save Your Seat
                </Button>
                <Typography variant="heading6" className="mt-2 mt-md-0">
                  August 4 2021 1PM PST 
                </Typography>
              </div>
            </Col>
          </Row>
        </Container>
      </Panel>
      <Container fluid="xl" className="py-10">
          <Row>
            <Col lg={8} className="mx-auto text-md-center">
              <Typography variant="heading3">
                On-Site Interview
              </Typography>
            </Col>
          </Row>
        <DateTimelineTable data={boothSessionsData} />
      </Container>
      <Panel theme="light" className="py-6 py-lg-8">
            <Container fluid="xl">
              <Row>
                  <Col
                    lg={{ span: 5, order: 2 }}
                    md={{ span: 12, order: 2 }}
                    sm={{ span: 12, order: 2 }}
                    xs={{ span: 12, order: 2 }}
                    className="mt-4 mt-lg-0"
                  >
                    <HubspotForm
                      formId="372cfd04-5f1a-40d3-86c0-fca0f05eb797"
                    >
                      <Typography variant="heading4">
                          Thanks for submitting the form.
                      </Typography>
                    </HubspotForm>
                  </Col>
                  <Col
                    lg={{ span: 7, order: 1 }}
                    md={{ span: 12, order: 1 }}
                    sm={{ span: 12, order: 1 }}
                    xs={{ span: 12, order: 1 }}
                  >
                    <Typography variant="heading4" className="text-center">
                      Schedule 1-on-1 Meeting with Airgap
                    </Typography> 
                    <img className="w-100 my-2 rounded" src={rksSwitchImage} alt="Airgap RKS Switch Kill" />
                  </Col>
              </Row>
          </Container>
        </Panel>
        <CallOutBox title="Event Hours">
          <Typography variant="heading4" className="text-center">
            Event Hours
          </Typography>
          <Typography variant="heading6" className="mt-2">IN-PERSON (LIVE) BUSINESS HALL HOURS</Typography>
          <Typography variant="cite">Wednesday, August 4: 10:00 AM - 6:00 PM<br /></Typography>
          <Typography variant="cite" paragraph>Thursday, August 5: 10:00 AM - 4:00 PM</Typography>
          <Typography variant="heading6" className="mt-2">VIRTUAL BUSINESS HALL HOURS</Typography>
          <Typography variant="cite">Wednesday, August 4: 8:30 AM - 5:00 PM<br /></Typography>
          <Typography variant="cite" paragraph>Thursday, August 5: 8:30 AM - 4:00 PM</Typography>
          <Typography variant="heading6" className="mt-2">REGISTRATION HOURS</Typography>
          <Typography variant="cite">Tuesday, August 3: 2:00 PM - 6:00 PM<br /></Typography>
          <Typography variant="cite">Wednesday, August 4: 8:00 AM - 5:00 PM<br /></Typography>
          <Typography variant="cite" paragraph>Thursday, August 5: 8:00 AM - 4:00 PM</Typography>
        </CallOutBox>
    </>
  );
}

export default BlackHatPage;
