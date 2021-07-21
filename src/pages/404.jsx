import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import Button from '../components/Button';
import Hero from '../components/Hero';
import Typography from '../components/Typography';
import SEO from "../components/seo";

const NotFoundPage = ({ location }) => (
    <>
        <SEO
            title="404: Not found"
            url={location.pathname}
        />
        <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <Typography variant="heading1" paragraph>
                                NOT FOUND
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl" className="pt-10">
                    <Row className="pb-10 justify-content-center">
                        <Col lg={10} className="text-center">
                            <Typography variant="intro" paragraph>
                                You just hit a route that doesn&#39;t exist... the sadness.
                            </Typography>
                            <Button to="/">
                                Back to home
                            </Button>
                        </Col>
                    </Row>
                </Container>
    </>
);

export default NotFoundPage;
