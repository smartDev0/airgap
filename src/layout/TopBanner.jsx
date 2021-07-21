import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../components/Button';
import SwitchBox from '../components/SwitchBox';
import Typography from '../components/Typography';
import { readCookie, writeCookie } from '../util/cookie';
import closeIcon from '../images/icons/close.svg';
import styles from './TopBanner.module.scss';

const TopBanner = () => {
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        setIsClosed(!!readCookie('topBannerClosed'));
    }, []);

    const closeBanner = () => {
        setIsClosed(true);
        writeCookie('topBannerClosed', true, 1);
    };

    return (
        <>
            {!isClosed && (
                <div className={styles.banner}>
                    <Container fluid="sm">
                        <Row className={styles.row}>
                            <Col xs="auto">
                                <Typography variant="intro">
                                    Under attack? Press the Ransomware Kill Switch.
                                </Typography>
                            </Col>
                            <Col xs="auto">
                                <SwitchBox />
                            </Col>
                            <Col xs="auto">
                                <Row>
                                    <Col xs="auto">
                                        <Button to="/blog/ransomware-kill-switch" variant="link">
                                            learn more
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <span
                      className={styles.close}
                      role="button"
                      tabIndex={0}
                      onClick={() => closeBanner()}
                      onKeyUp={event => event.key === 'Enter' && closeBanner()}
                      variant="link"
                    >
                        <img src={closeIcon} alt="close banner icon" />
                    </span>
                </div>
            )}
        </>
    );
};

export default TopBanner;
