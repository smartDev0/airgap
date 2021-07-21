import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HubspotForm from '../../components/HubspotForm';
import Hero from '../../components/Hero';
import FacebookIcon from '../../components/icons/FacebookIcon';
import LinkedinIcon from '../../components/icons/LinkedInIcon';
import TwitterIcon from '../../components/icons/TwitterIcon';
import Link from '../../components/Link';
import Panel from '../../components/Panel';
import TimelineTable from '../../components/TimelineTable';
import Typography from '../../components/Typography';
import expoBoothImage from '../../images/uploads/ransomwarebanner.png';

import SEO from "../../components/seo";

const RSACPage = ({ location }) => {
  const boothSessionsData = [
    {
      date: "May 17, 2021 10AM PST",
      sessions: [
        {
          event: "Get Ahead of Ransomware Spread with Automated Ransomware Kill Switch",
          speaker: "With Ritesh Agrawal, CEO and Co-Founder, Airgap"
        },
        {
          event: "Zero Trust Security Solution - Secure Access to Any Resource",
          speaker: "With Richard Stiennon, Author of Security Yearbook 2021"
        },
        {
          event: "Ransomware Kill Switch Demo and Use Cases",
          speaker: "With Shad Gunderson, Solution Architect, Airgap"
        },
      ]
    },
    {
      date: "May 18, 2021 10AM PST",
      sessions: [
        {
          event: "IoMT Device CyberSecurity and Agentless Ransomware Kill Switch in Healthcare",
          speaker: "With Kris Kistler, CISO of Cognizant Health"
        },
        {
          event: "Ransomware Kill Switch Demo and Use Cases",
          speaker: "With Shad Gunderson, Solution Architect, Airgap"
        },
        {
          event: "Introducing Airgap Ransomware Vulnerability Scanner",
          speaker: "With Jason Adair, VP of Sales, Airgap"
        },
        {
          event: "Ransomware Can Be Stopped",
          speaker: "With Ted Harrington, Amazon Best Seller Author of “Hackable”"
        }
      ]
    },
    {
      date: "May 19, 2021 10AM PST",
      sessions: [
        {
          event: "Automated Response to Ransomware in Education",
          speaker: "With James Mountain, CISO of Palmer College of Chiropractic"
        },
        {
          event: "2021 and Beyond: Dealing with Reality, Hype, and Truth in Zero Trust",
          speaker: "With Dr. Chase Cunningham, Cybersecurity Analyst"
        },
        {
          event: "Ransomware Kill Switch Demo and Use Cases",
          speaker: "With Shad Gunderson, Solution Architect, Airgap"
        },
      ]
    },
  ];

  return (
    <>
      <SEO
        title="­RSA Conference 2021"
        description="Airgap Networks, the innovator of the industry’s first Ransomware Kill Switch,
          exhibits in RSAC 2021 Early Stage Expo. Learn how to enforce enterprise security with one-click
          and stop the spread from Ransomware attacks in real time. Get the free RSAC 2021 pass from Airgap."
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
                ­RSA Conference 2021
              </Typography>
              <Col lg={{ span: 8, offset: 2 }} className="mt-3">
                <Typography variant="blockquote">
                  May 17 - 19, 2021
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
            <Col xs={12} md={5} className="d-flex flex-column justify-content-center">
              <Typography variant="heading4" paragraph>
                Join Airgap Virtually at RSA Conference 2021
              </Typography>
              <Typography variant="blockquote" paragraph>
                Ransomware is one of the most dangerous threats to organizations. Servers, laptops, and mobile devices are becoming
                increasingly complex to secure, especially with the surge in remote work.
              </Typography>
              <Typography variant="blockquote" paragraph>
                These attacks typically begin by penetrating the network through stolen credentials and remote access malware. Then
                they spread through enterprises like wildfire. How do you halt the speed of ransomware propagation? Meet our team at
                RSA Conference 2021 to learn about the Ransomware Kill Switch and how to shore up your security posture with Zero
                Trust Isolation.
              </Typography>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 1 }} className="mt-5 mt-md-0">
              <HubspotForm
                redirectTo="/theater-sessions/"
                formId="bddb9274-ef3f-4247-a943-fc1cdd08c73c"
                title={
                  <Typography variant="heading4" className="mb-2">
                    Schedule a Virtual Meeting
                  </Typography>
                }
              >
                <Typography variant="heading4" paragraph>
                    Thanks for submitting the form.
                </Typography>
              </HubspotForm>
            </Col>
          </Row>
        </Container>
      </Panel>
      <div>
          <Container fluid="xl" className="pt-10">
              <Row>
                  <Col lg={8} className="mx-auto text-md-center">
                    <Typography variant="heading3">
                      Virtual Booth Theater Sessions
                    </Typography>
                  </Col>
              </Row>
          </Container>
          <Container fluid="xl" className="pb-10 pb-lg-15">
            <TimelineTable data={boothSessionsData} />
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
                      formId="b182741e-90a7-48b5-abf9-df835d229cb4"
                      title={
                        <Typography variant="heading4" className="text-center mb-2">
                          Request demo
                        </Typography>
                      }
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
                    <Typography variant="heading3">
                      Airgap Expo Booth | RSAC 2021 ESE 
                    </Typography>
                    <img className="w-100 my-2" src={expoBoothImage} alt="Airgap Expo Booth Logo" />
                    <Typography variant="heading5">
                      May 17-20, 2021 | 10AM – 3PM PST
                    </Typography>
                    <Typography variant="blockquote" paragraph>
                      Visit the booth and talk to a security expert, 
                      see a demo, and learn more.
                    </Typography>
                  </Col>
              </Row>
          </Container>
        </Panel>
      </div>
    </>
  );
}

export default RSACPage;
