import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Hero from '../components/Hero';
import List from '../components/List';
import SEO from '../components/seo';
import Typography from '../components/Typography';
import HubspotForm from '../components/HubspotForm';
import CheckIcon from '../components/icons/CheckIcon';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const WebinarPage = ({ path }) => {
    return (
        <>
            <SEO
                title="Airgap Ransomware Kill Switch for Education"
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <Typography variant="heading1" paragraph>
                                Airgap Ransomware Kill Switch for Education
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <div style={{ backgroundColor: '#F3F6F8' }}>
                <Container fluid="xl" className="pt-10">
                    <Row className="pb-10 justify-content-center">
                        <Col lg={10}>
                            <Typography variant="heading4" paragraph>
                                Academic Licensing
                            </Typography>
                            <Typography paragraph>
                                Airgap Networks'  ‘Ransomware Kill Switch’ (RKS)  Academic Program is a comprehensive
                                and  complimentary SaaS licensing program designed specifically for K-12 and higher
                                education institutions . The annual subscription fee is waived from October 2020 to Oct
                                2021, enabling qualifying academic users in the U.S. to have  easy access to
                                cutting-edge ransomware defense solutions with patent-pending RKS  technology and
                                resources.
                            </Typography>
                            <Typography paragraph>
                                Airgap Networks’ RKS  Academic Program supports the use of hosted and SaaS services for
                                on premises and online campus networks. Applications are provided at no cost, with
                                participating departments being responsible for covering the program’s operational
                                costs as well as support and services.
                            </Typography>
                            <Typography variant="heading4" paragraph>
                                General Eligibility
                            </Typography>
                            <List fullWidth>
                                <List.Item
                                    iconLeft={<CheckIcon color="#F98533" />}
                                >
                                    Accredited education institutions offering K-12,  3 or 4 year degree programs
                                    (or equivalent) are eligible to participate in the program
                                </List.Item>
                                <List.Item
                                    iconLeft={<CheckIcon color="#F98533" />}
                                >
                                    Technical schools offering accredited degrees through distance education programs
                                    are also eligible to participate in the program
                                </List.Item>
                            </List>
                            <Typography className="mt-2" paragraph>
                                Participation in the program is typically on a departmental basis, such as the
                                Computer Science or the Electrical Engineering department, though campus subscription
                                is alternatively available to cover multiple departments.
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container fluid="xl" className="mt-10 mt-md-15">
                <Row className="pb-10 pb-md-15 justify-content-center">
                    <Col lg={6}>

                        <Typography variant="heading4" paragraph>
                            With your annual departmental subscription fee for support and service you will receive:
                        </Typography>
                        <Typography variant="blockquote" paragraph>
                            Airgap Networks’ provides every participating organization with access to a management
                            portal that provides authorized users with the self-service capability to manage campus
                            network security policies and enforcement.
                        </Typography>
                        <Typography variant="blockquote" paragraph>
                            Complimentary ($1)  licenses to Airgap Networks’ RKS software are updated automatically
                            from the self-service  management portal.
                        </Typography>
                        <Typography variant="blockquote">
                            The free licenses are 6 month evaluation licenses that require one-time installation
                            assistance from the Airgap support team. Pricing on this site is exclusively available
                            through an agreement between your academic institution and Airgap Networks.
                        </Typography>
                    </Col>
                    <Col lg={6} className="mt-5 mt-md-0">
                        <HubspotForm formId="b182741e-90a7-48b5-abf9-df835d229cb4">
                            <Typography variant="heading4" paragraph>
                                Thanks for the interest on Airgap Ransomware Kill Switch for Education program. We will follow up with you shortly.
                            </Typography>
                        </HubspotForm>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default WebinarPage;
