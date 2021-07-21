import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from '../components/Hero';
import SEO from '../components/seo';
import Link from '../components/Link';
import List from '../components/List';
import Typography from '../components/Typography';

import CheckIcon from '../components/icons/CheckIcon';
import WindowsImage from '../images/windows.svg';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const ThanksPage = ({ path }) => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <SEO
                title="Thanks for downloading Airgap Ransomware Vulnerability Scanner"
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12}>
                            <Typography variant="heading2" as="h1" paragraph>
                                Thanks for downloading Airgap Ransomware Vulnerability Scanner
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Container fluid="xl" className="my-10 my-md-15">
                <Row className="justify-content-center">
                    <Col lg={10} >
                        <Typography paragraph>
                            If you have any questions during the installation, please email&nbsp;
                            <Link underline to="mailto:scanner@airgap.io">scanner@airgap.io</Link>.
                        </Typography>
                        <Typography paragraph>
                            Airgap Ransomware Vulnerability Scanner version 1.0 Tech Preview
                        </Typography>
                        <List fullWidth className="mb-3">
                            <List.Item iconLeft={<CheckIcon color="#F98533" />}>
                                <Link
                                    to="https://f.hubspotusercontent10.net/hubfs/6848218/Scanner/GoScannerSetup.zip"
                                    underline
                                >
                                    Installer for Windows OS
                                </Link>
                                <img src={WindowsImage} className="ml-2" width="24" alt="Windows logo" />
                            </List.Item>
                            <List.Item iconLeft={<CheckIcon color="#F98533" />}>
                                <Link
                                    to="https://f.hubspotusercontent10.net/hubfs/6848218/Ransomware%20Vulnerability%20Scanner%20QSG.pdf"
                                    underline
                                >
                                    Quick Start Guide
                                </Link>
                            </List.Item>
                        </List>
                        <Typography paragraph>
                            After the installation, this free Airgap Ransomware Vulnerability Scanner will scan your network and: 
                        </Typography>
                        <List fullWidth className="mb-3">
                            <List.Item iconLeft={<CheckIcon color="#F98533" />}>
                                Provide a report of the hosts on your network that are vulnerable to attacks by the top ransomware families
                            </List.Item>
                            <List.Item iconLeft={<CheckIcon color="#F98533" />}>
                                Obtain an inventory of all assets and associated vulnerabilities on your local network or home network.
                            </List.Item>
                        </List>
                        <Typography>
                            Send your feedback to <Link underline to="mailto:scanner@airgap.io">scanner@airgap.io</Link>. Thank you. 
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ThanksPage;
