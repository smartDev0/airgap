import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HubspotForm from '../../components/HubspotForm';
import Hero from '../../components/Hero';
import FacebookIcon from '../../components/icons/FacebookIcon';
import LinkedinIcon from '../../components/icons/LinkedInIcon';
import TwitterIcon from '../../components/icons/TwitterIcon';
import Link from '../../components/Link';
import Panel from '../../components/Panel';
import Typography from '../../components/Typography';
import isVerified from '../../util/isVerified';

import SEO from "../../components/seo";

const CISORoundTablePage = ({ location }) => {
  const [verified, setVerified ] = useState(false);

  useEffect(() => {
    setVerified(isVerified(location));
  }, [setVerified, location]);

  return (
    <>
      <SEO
          title="CISO Roundtable"
          description="US Department of Homeland Security CISA and Airgap Networks presents the CISO roundtable on Ransomware defense strategy to help plan for Reopening 2021."
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
                Ransomware in Recovery 2021
              </Typography>
              <Typography variant="heading6" className="mt-3">
                Web Conference
              </Typography>
              <Col lg={{ span: 8, offset: 2 }} className="mt-3">
                <Typography variant="blockquote">
                  Thursday, April 15, 2021 | 11:00 AM - 12:45 PM ET
                </Typography>
              </Col>
            </Col>
          </Row>
        </Container>
      </Hero>
      <Panel theme="gradient" className="py-10">
        <Container fluid="xl">
          {!verified && (
            <Row>
              <Col md={5}>
                <Typography variant="blockquote" paragraph>
                  This CISO roundtable is designed exclusively for CISOs and senior level information security executives to learn and share insights in a confidential setting.
                </Typography>
                <Typography variant="blockquote" paragraph>
                  The curriculum will incorporate a blend of strategic content, real-world playbook exercises, and peer discussion to help with ransomware defense strategy and success as a leader. Session themes for the day include:
                </Typography>
                <Typography variant="heading4" className="mt-4" paragraph>
                  Let your colleagues know you're coming!
                </Typography>
                <div className="d-flex">
                  <Link to={`https://www.facebook.com/sharer/sharer.php?u=https://airgap.io${location.pathname}`} className="mr-2">
                    <FacebookIcon />
                  </Link>
                  <Link to={`https://www.linkedin.com/shareArticle?mini=true&url=https://airgap.io${location.pathname}&title=&summary=&source=`} className="mr-2">
                    <LinkedinIcon />
                  </Link>
                  <Link to={`https://twitter.com/intent/tweet?url=https://airgap.io${location.pathname}&text=`}>
                    <TwitterIcon />
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={{ span: 6, offset: 1 }} className="mt-5 mt-md-0">
                <HubspotForm formId="6cc92759-249c-4f3a-bf88-e1774e5ad04d">
                  <Typography variant="heading4" paragraph>
                      Thanks for submitting the form.
                  </Typography>
                </HubspotForm>
              </Col>
            </Row>
          )}
          {verified && (
            <Row>
              <Col md={10} className="mx-auto">
                <div className="position-relative" style={{ paddingBottom: '56%' }}>
                  <iframe className="position-absolute h-100 w-100" src="https://www.youtube.com/embed/gDR-yghDsjg?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </Panel>
      <Container fluid="xl" className="pt-10">
          <Row className="pb-10">
              <Col>
                  <Typography variant="heading3" paragraph>
                    The CISA Ransomware Campaign and Zero Trust Directives
                  </Typography>
                  <Typography variant="blockquote" paragraph>
                    Zero trust, supply chain security, and DevSecOps. These are the three 2021 priorities for CISA Cybersecurity Framework.
                    In this event keynote, <Link underline to='https://www.linkedin.com/in/amynicewick/'>Amy Nicewick</Link>,
                    Chief of Communications Management at Cybersecurity and Infrastructure Security Agency
                    will highlight recent CISA Ransomware campaign to reduce the attack blast radius of ransomware and how zero trust plays
                    in the Cybersecurity framework for Federal Government Continuity of Operations (COOP).
                  </Typography>
                  <Typography variant="heading3" className="mt-4" paragraph>
                    Ransomware: Take a Zero Trust Risk-Based Security Posture
                  </Typography>
                  <Typography variant="blockquote" paragraph>
                    The cybersecurity threat landscape has changed radically in the last year, with a significantly broader attack surface,
                    a pivot to online transactions and a more attractive target to threat actors. Join&nbsp;
                    <Link underline to='https://www.linkedin.com/in/mikedavissd/'>Michael Davis</Link>,
                    CISO of ExactlyIT as he explores the evolving threat landscape and dependence on technology and how Zero Trust can be
                    applied to process SCM risks.
                  </Typography>
                  <Typography variant="heading3" className="mt-4" paragraph>
                    Securing your Enterprise Network with Zero Trust Isolation
                  </Typography>
                  <Typography variant="blockquote" paragraph>
                    Lateral movement is what turns an attack on a single endpoint into a huge breach. It is the secret ingredient of many successful
                    ransomware breaches that drive headlines. In this segment, <Link underline to='https://www.linkedin.com/in/helloritesh/'>Ritesh Agrawal</Link>,
                    will explain fundamental gaps in the security posture and why enterprises must revisit their approach to cybersecurity with cloud-delivered
                    Zero Trust Isolation everywhere – on-network and off-network.
                  </Typography>
                  <Typography variant="heading3" className="mt-4" paragraph>
                  Zero Trust in Healthcare
                  </Typography>
                  <Typography variant="blockquote" paragraph>
                    <Link underline to='https://www.linkedin.com/in/kriskistler/'>Kris Kistler</Link>, CISO of Cognizant Health and&nbsp;
                    <Link underline to='https://www.linkedin.com/in/williamlongsr/'>Will Long</Link>, Chief Security Officer of First
                    Health Advisory will discuss how Zero Trust transformation as a journey for healthcare facilities and
                    share the view to defend device cybersecurity.
                  </Typography>
                  <Typography variant="heading3" className="mt-4" paragraph>
                    2021 and Beyond: Dealing with Reality, Hype, and Truth in Zero Trust
                  </Typography>
                  <Typography variant="blockquote" paragraph>
                    Questions and comments about Zero Trust? In this session&nbsp;
                    <Link underline to='https://www.linkedin.com/in/dr-chase-cunningham-54b26243/'>Dr. Chase Cunningham</Link>&nbsp;
                    outlines everything you need to know about
                    Zero Trust security from on-premises to the cloud as enterprises are heading back to office.
                  </Typography>
              </Col>
          </Row>
      </Container>
    </>
  );
}

export default CISORoundTablePage;
