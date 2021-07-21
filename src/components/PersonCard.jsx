import Image from 'gatsby-image';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from '../util/PropTypes';
import Typography from './Typography';

const PersonCard = ({ person }) => (
    <Row noGutters className="align-items-center">
        <Col xs="auto" className="pr-2">
            <Image
                fixed={person.image.childImageSharp.fixed}
                className="rounded-circle"
                alt={person.name}
            />
        </Col>
        <Col>
            <Typography variant="heading6">
                {person.name}
            </Typography>
            <Typography variant="small">
                {person.position}
                <br />
                at {person.company}
            </Typography>
        </Col>
    </Row>
);

PersonCard.propTypes = {
    person: PropTypes.object.isRequired,
};

export default PersonCard;
