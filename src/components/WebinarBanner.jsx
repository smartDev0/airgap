import classnames from 'classnames';
import Image from 'gatsby-image';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from './Button';
import Typography from './Typography';
import PropTypes from '../util/PropTypes';
import styles from './WebinarBanner.module.scss';

const WebinarBanner = ({
        leftTitle,
        rightTitle,
        leftSubtitle,
        rightSubtitle,
        leftLogoURL,
        rightLogoURL,
        leftButtonURL,
        rightButtonURL,
        leftButtonTitle,
        rightButtonTitle,
    }) => (
    <div className={classnames({
        [styles.banner]: true,
        [styles.bannerWhite]: true,
    })}>
        <Container fluid>
            <Row className={styles.row}>
                <Col lg={3} className="mt-3 mt-lg-0">
                    <Image
                        fluid={leftLogoURL.childImageSharp.fluid}
                        alt={leftTitle}
                    />
                </Col>
                <Col lg={4} className="d-flex flex-column text-md-left mt-3">
                    <Typography variant="heading4" className="font-weight-bold">
                        { leftTitle }
                    </Typography>
                    {leftSubtitle && (
                        <Typography variant="large">
                            { leftSubtitle }
                        </Typography>
                    )}
                    <Button to={leftButtonURL} variant="pillAccent" className="mt-1">
                        { leftButtonTitle }
                    </Button>
                </Col>
                <Col lg={2} className="mt-3 mt-lg-0 d-flex justify-content-center">
                    <Image
                        className={styles.bannerSmall}
                        fluid={rightLogoURL.childImageSharp.fluid}
                        alt={rightTitle}
                    />
                </Col>
                <Col lg={3} className="text-md-left mt-3">
                    <Typography variant="heading4" className="font-weight-bold">
                        { rightTitle }
                    </Typography>
                    {rightSubtitle && (
                        <Typography variant="large">
                            { rightSubtitle }
                        </Typography>
                    )}
                    <Button to={rightButtonURL} variant="pillAccent" className="mt-1 mr-2">
                        { rightButtonTitle }
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
);

WebinarBanner.propTypes = {
    leftLogoURL: PropTypes.object,
    rightLogoURL: PropTypes.object,
    leftTitle: PropTypes.string,
    rightTitle: PropTypes.string,
    leftSubtitle: PropTypes.string,
    rightSubtitle: PropTypes.string,
    leftButtonURL: PropTypes.string,
    rightButtonURL: PropTypes.string,
    leftButtonTitle: PropTypes.string,
    rightButtonTitle: PropTypes.string,
};

export default WebinarBanner;
