import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../components/Button';
import Link from '../components/Link';
import styles from './Footer.module.scss';
import Typography from '../components/Typography';

import logoWhite from '../images/logos/white.svg';

const Footer = () => (
    <>
        <footer
            id="footer"
            className={styles.footer}
        >
            <Container fluid="xl" className="text-center text-lg-left">
                <Row>
                    <Col lg={4}>
                        <div className={styles.footerLogo}>
                            <Link to="/" wrapper>
                                <img
                                    className={styles.logo}
                                    src={logoWhite}
                                    alt="Airgap Logo"
                                />
                            </Link>
                        </div>
                        <div className="mt-4">
                            <Typography paragraph>
                                Airgap helps implement comprehensive Zero Trust in minutes without the need for agents,
                                APIs, or forklift upgrades. The patent pending Zero Trust Isolation™ platform assures
                                threat propagation protection.
                            </Typography>
                            <Typography variant="blockquote" className="mt-5 mt-lg-0">
                                2755 Great America Way,
                                <br />
                                Suite 135, Santa Clara,
                                <br />
                                CA 95054, USA
                            </Typography>
                        </div>
                    </Col>
                    <Col lg={{ span: 4, offset: 1 }} className="mt-5 mt-lg-0">
                        <Typography variant="intro" paragraph>
                            Sitemap
                        </Typography>
                        <Typography paragraph>
                            <Link to="/#why">
                                Why Airgap?
                            </Link>
                        </Typography>
                        <Typography paragraph>
                            <Link to="/#solution">
                                Solution
                            </Link>
                        </Typography>
                        <Typography paragraph>
                            <Link to="/blog/">
                                Blog
                            </Link>
                        </Typography>
                        <Typography paragraph>
                            <Link to="/events/">
                                Events
                            </Link>
                        </Typography>
                        <Typography paragraph>
                            <Link to="/#contact">
                                Learn how it works
                            </Link>
                        </Typography>
                        <Typography paragraph>
                            <Link to="/partners/">
                                Partners
                            </Link>
                        </Typography>
                    </Col>
                    <Col lg={3} className="mt-5 mt-lg-0">
                        <Typography variant="intro" paragraph>
                            Need Help?
                        </Typography>
                        <Typography>
                            Call Us
                        </Typography>
                        <Typography variant="intro" paragraph>
                            <Link to="tel:+14154808075">
                                +1 415 480 8075
                            </Link>
                        </Typography>
                        <Typography>
                            Email Us
                        </Typography>
                        <Typography variant="intro" paragraph>
                            <Link to="mailto:info@airgap.io">
                                info@airgap.io
                            </Link>
                        </Typography>
                        <Typography>
                            Follow Us
                        </Typography>
                        <Typography variant="intro" paragraph>
                            <Link to="https://twitter.com/AirgapNetworks">
                                Twitter
                            </Link>
                            &nbsp;|&nbsp;
                            <Link to="https://www.linkedin.com/company/airgap-networks/">
                                LinkedIn
                            </Link>
                        </Typography>
                        <Typography className="mb-1">
                            Join Us
                        </Typography>
                        <Button to="/careers">
                            [we are hiring]
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-between">
                    <Col lg="auto">
                        <Typography variant="small">
                            © 2020 Airgap Networks, Inc.
                        </Typography>
                    </Col>
                    <Col lg="auto" className="mt-5 mt-lg-0">
                        <Typography variant="small">
                            <Link to="/cookie-policy/">
                                Cookie Policy
                            </Link>
                            {' '}
                            |
                            {' '}
                            <Link to="/privacy-policy/">
                                Privacy Policy
                            </Link>
                            {' '}
                            |
                            {' '}
                            <Link to="/terms-and-conditions/">
                                Terms of Use
                            </Link>
                            {' '}
                            |
                            {' '}
                            <Link to="/disclaimer/">
                                Disclaimer
                            </Link>
                        </Typography>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Typography variant="small">
                            Airgap Networks, Zero Trust Isolation, and Ransomware Kill Switch are or may be registered trademarks of Airgap Networks, Inc. All other marks and names mentioned herein may be trademarks of their respective companies. Airgap Networks has multiple patents pending relating to Zero Trust Isolation technology and the ransomware kill switch.
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
);

export default Footer;
