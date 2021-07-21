import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from '../components/Hero';
import CustomMarkdown from '../components/CustomMarkdown';
import SEO from '../components/seo';
import Panel from '../components/Panel';
import Button from '../components/Button';
import Typography from '../components/Typography';
import HubspotForm from '../components/HubspotForm';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const ProductPartnerPage = ({ path }) => {
  const { page: data } = useStaticQuery(graphql`
    query {
        page: pagesYaml(id: {eq: "pp"}) {
            seo {
              title
              description
            }
            hero {
                title
            }
            copy {
                text
            }
            form {
              hubspotFormId
            }
            partners {
              title
              contents {
                text
                number
                image {
                  childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            demo {
              title
              text
              button
              buttonURL
            }
            advantages {
              title
              contents {
                image {
                  childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                title
                text
              }
            }
        }
    }
  `);

    return (
        <>
            <SEO
                title={data.seo.title}
                description={data.seo.description}
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Typography variant="heading1" paragraph>
                                {data.hero.title}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl" className="py-10 py-md-15">
                <Row className="justify-content-center align-items-center">
                    <Col lg={6}>
                      {/* <Image
                          alt="Partner Logo"
                          fluid={data.copy.image.childImageSharp.fluid}
                      /> */}
                      <CustomMarkdown>
                        {data.copy.text}
                      </CustomMarkdown>
                    </Col>
                    <Col lg={6} className="mt-5 mt-lg-0">
                        <HubspotForm formId={data.form.hubspotFormId} showPrivacyPolicy>
                            <Typography variant="heading4" className="text-center" paragraph>
                                {data.form.response}
                            </Typography>
                        </HubspotForm>
                    </Col>
                </Row>
            </Container>
            <Panel theme="light">
              <Container fluid="xl" className="py-10 py-md-15">
                  <Row>
                      <Col>
                          <Typography variant="heading3" className="text-center font-weight-bold">
                            {data.partners.title}
                          </Typography>
                      </Col>
                  </Row>
                  {data.partners.contents.map((partner, ind) => (
                    <Row className="mt-5 mt-md-10" key={ind}>
                      <Col lg={6} className="mb-2 text-lg-right d-flex flex-column justify-content-between">
                        <div className="d-flex justify-content-between">
                          <span className="partner-number">{ind + 1}</span>
                          <span className="partner-number partner-number_rounded">{partner.number}</span>
                        </div>
                        <Typography>
                          {partner.text}
                        </Typography>
                      </Col>
                      <Col lg={6}>
                        <Image
                            alt="Partner Logo"
                            fluid={partner.image.childImageSharp.fluid}
                        />
                      </Col>
                    </Row>
                  ))}
              </Container>
            </Panel>
            <Container fluid="xl" className="py-10 py-md-15">
                <Row className="justify-content-center">
                  <Col lg={8} className="text-center d-flex flex-column justify-content-center align-items-center">
                    <Typography variant="heading3" className="font-weight-bold">
                      {data.demo.title}
                    </Typography>
                    <Typography variant="cite" className="mt-2">
                      {data.demo.text}
                    </Typography>
                    <Button
                      to={data.demo.buttonURL}
                      className="mt-3"
                      rounded
                    >{data.demo.button}</Button>
                  </Col>
                </Row>
            </Container>
            <Panel theme="light">
              <Container fluid="xl" className="py-10 py-md-15">
                  <Row lg={8}>
                      <Col className="text-center">
                          <Typography variant="heading3" className="font-weight-bold">
                            {data.advantages.title}
                          </Typography>
                      </Col>
                  </Row>
                  <Row className="mt-5">
                    {data.advantages.contents.map((adv, ind) => (
                      <Col lg={4} key={ind} className="text-center mb-lg-0 mb-3">
                        <Image
                            className="rounded"
                            fluid={adv.image.childImageSharp.fluid}
                            alt="picture of advantage"
                        />
                        <Typography variant="heading4" className="mt-2" paragraph>
                            {adv.title}
                        </Typography>
                        <Typography>
                            {adv.text}
                        </Typography>
                      </Col>
                    ))}
                  </Row>
              </Container>
            </Panel>
        </>
    );
};

export default ProductPartnerPage;
