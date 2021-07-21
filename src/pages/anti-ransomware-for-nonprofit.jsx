import React from 'react';
import { useStaticQuery } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap';

import Box from '../components/Box';
import Hero from '../components/Hero';
import SEO from '../components/seo';
import Typography from '../components/Typography';
import HubspotForm from '../components/HubspotForm';
import CustomMarkdown from '../components/CustomMarkdown';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const PublicSectorPage = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      arfn: pagesYaml(id: {eq: "arfn"}) {
            hero {
                title
            }
            copy {
                text
            }
            content {
              cards {
                attack
                date
              }
            }
            form {
                title
                description
                hubspotFormId
                submitResponse
            }
        }
    }
  `);

  const { arfn } = data;

    return (
        <>
            <SEO
                title={arfn.hero.title}
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <Typography variant="heading1" paragraph>
                                {arfn.hero.title}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <div style={{ backgroundColor: '#F3F6F8' }}>
                <Container fluid="xl" className="py-8">
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <CustomMarkdown>
                              {arfn.copy.text}
                            </CustomMarkdown>
                            <Row className="mt-6">
                              {arfn.content.cards.map((card, ind) => (
                                  <Col key={ind} sm={3} className="mb-2">
                                    <Box className="border-0 text-center p-2 h-100 d-flex flex-column justify-content-between">
                                        <Typography className="font-weight-bold">
                                            {card.attack}
                                        </Typography>
                                        <Typography className="mt-2">
                                            {card.date}
                                        </Typography>
                                    </Box>
                                  </Col>
                              ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container fluid="xl" className="mt-10 mt-md-15">
                <Row className="pb-10 pb-md-15 justify-content-center">
                    <Col lg={7}>
                        <Typography variant="heading4" paragraph>
                            {arfn.form.title}
                        </Typography>
                        <Typography variant="blockquote" paragraph>
                            {arfn.form.description}
                        </Typography>
                    </Col>
                    <Col lg={5} className="mt-5 mt-md-0">
                         <HubspotForm formId={arfn.form.hubspotFormId}>
                            <Typography variant="heading4" paragraph>
                                {arfn.form.submitResponse}
                            </Typography>
                        </HubspotForm>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PublicSectorPage;
