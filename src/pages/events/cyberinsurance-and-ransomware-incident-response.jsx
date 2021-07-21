import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import HubspotForm from '../../components/HubspotForm';
import Hero from '../../components/Hero';
import FacebookIcon from '../../components/icons/FacebookIcon';
import LinkedinIcon from '../../components/icons/LinkedInIcon';
import TwitterIcon from '../../components/icons/TwitterIcon';
import Link from '../../components/Link';
import Panel from '../../components/Panel';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import SEO from "../../components/seo";

const CyberinsurancePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
        ragrawal: peoplesYaml(id: {eq: "ragrawal"}) {
            name
            position
            company
            linkedinUrl
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        abockwinkel: peoplesYaml(id: {eq: "abockwinkel"}) {
            name
            position
            company
            linkedinUrl
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        kminder: peoplesYaml(id: {eq: "kminder"}) {
            name
            position
            company
            linkedinUrl
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        hochoa: peoplesYaml(id: {eq: "hochoa"}) {
            name
            position
            company
            linkedinUrl
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        sgavirneni: peoplesYaml(id: {eq: "sgavirneni"}) {
          name
          position
          company
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
  `);

  return (
    <>
      <SEO
          title="Cyberinsurance and Ransomware Incident Response: Are you covered?"
          description="There has never been a brighter spotlight on the societal scourge of ransomware than over the past couple of months. From gasoline shortage to disrupted healthcare IT, we are seeing an international uproar for governments and industry to do more and hold cybercriminals accountable."
          url={location.pathname}
      />
      <Hero
        container="small"
        theme="dark"
        centered
      >
        <Container fluid="xl">
          <Row>
            <Col lg={9} className="mx-auto">
              <Typography variant="heading1">
                Cyberinsurance and Ransomware Incident Response: Are you covered?
              </Typography>
              <Typography variant="heading6" className="mt-3">
                Web Conference
              </Typography>
              <Col lg={{ span: 8, offset: 2 }} className="mt-3">
                <Typography variant="blockquote">
                  Thursday, July 15, 2021
                </Typography>
              </Col>
            </Col>
          </Row>
        </Container>
      </Hero>
      <Panel theme="gradient" className="py-10">
        <Container fluid="xl">
          <Row>
            <Col md={6}>
              <Typography variant="blockquote" paragraph>
                There has never been a brighter spotlight on the societal scourge of ransomware than over the past couple of months. From gasoline shortage to disrupted healthcare IT, we are seeing an international uproar for governments and industry to do more and hold cybercriminals accountable.
              </Typography>
              <Typography variant="blockquote" paragraph>
                Join us to hear from a distinguished panel of experts in Cyber Insurance, Ransomware Investigation, Incident Response, and Solution Remediation to learn the 1-2-3 action steps you need to take now to be prepared for when (not IF) you are hit by Ransomware attacks.
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
            <Col xs={12} md={{ span: 6, offset: 0 }} className="mt-5 mt-md-0">
              <HubspotForm formId="790917dd-e0af-498c-b794-c1c47fe98802">
                <Typography variant="heading4" paragraph>
                    Thanks for submitting the form.
                </Typography>
              </HubspotForm>
            </Col>
          </Row>
        </Container>
      </Panel>
      <Container fluid="xl" className="py-md-10 py-5">
          <Row>
              <Col>
                  <Typography variant="heading3" className="text-center">
                    Speakers
                  </Typography>
              </Col>
          </Row>
          <Row className="text-center d-flex justify-content-center">
              {Object.values(data).map(elem => (
                <Col lg={4} className="mt-4" key={elem.name}>
                    <Panel theme="light" className="d-flex flex-column pt-4 pb-8 px-2 h-100">
                        <Row>
                            <Col xs={8} className="mx-auto">
                              <Image
                                  className="rounded-circle"
                                  sizes={{ ...elem.image.childImageSharp.fluid, aspectRatio: 1 / 1 }}
                                  alt={elem.name}
                              />
                            </Col>
                        </Row>
                        <div className="mt-4 flex-grow-1">
                            <Typography variant="heading4" paragraph>
                                {elem.name}
                            </Typography>
                            <Typography>
                              {elem.position}
                              {elem.company && ` at ${elem.company}`}
                            </Typography>
                        </div>
                        <div className="mt-3">
                            <Button
                                to={elem.linkedinUrl}
                                variant="linkDark"
                            >
                                LinkedIn
                            </Button>
                        </div>
                    </Panel>
                </Col>
              ))}
          </Row>
      </Container>
    </>
  );
}

export default CyberinsurancePage;
