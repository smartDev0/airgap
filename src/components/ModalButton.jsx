import React, { useState } from 'react';
import Modal from 'react-modal';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container, Row, Col } from 'react-bootstrap';
import useModalButtonContent from '../hooks/useModalButtonContent';
import PageMDXProvider from '../components/PageMDXProvider';
import Panel from '../components/Panel';
import Button from '../components/Button';
import HubspotCTA from '../components/HubspotCTA';
import Typography from '../components/Typography';
import PropTypes from '../util/PropTypes';
import styles from './ModalButton.module.scss';
import blackCloseIcon from '../images/icons/close-black.svg';

const propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
};

const defaultProps = {
    content: null,
    title: null,
};

Modal.setAppElement('#___gatsby'); // http://reactcommunity.org/react-modal/accessibility/

const ModalButton = ({
    content,
    title,
}) => {
  const data = useModalButtonContent(content);

  const [isModalOpen, setModalMode] = useState(false);
  const [isDownloadButtonActive, setDownloadButtonMode] = useState(false);

  const toggleModal = () => setModalMode(prevState => !prevState);

  const toggleDownloadButton = event => setDownloadButtonMode(event.target.checked);

  const customStyles = {
    content : {
      maxWidth: '700px',
      width: '100%',
      maxHeight: '700px',
      height: '75%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    }
  };

    return (
      <div className='my-2'>
        <Button onClick={toggleModal}>Open Modal</Button>
        <Modal
          isOpen={isModalOpen}
          contentLabel={title}
          style={customStyles}
        >
          <Typography variant="heading4" paragraph>
              {title}
          </Typography>
          <span
            className={styles.close}
            onClick={toggleModal}
            onKeyUp={event => event.key === 'Enter' && toggleModal()}
            tabIndex={0}
            variant="link"
            role="button"
          >
              <img src={blackCloseIcon} alt="close icon" /> 
          </span>
          <Panel theme="gradient" className={`${styles.modalButtonContent}`}>
            <Container fluid="xl">
                <Row>
                    <Col>
                      <PageMDXProvider>
                          <MDXRenderer>{data}</MDXRenderer>
                      </PageMDXProvider>
                    </Col>
                </Row>
            </Container>
          </Panel>
          <div className={styles.downloadWrapper}>
            <label htmlFor={`modal-${content}`}>
              <input id={`modal-${content}`} type="checkbox" onChange={toggleDownloadButton} className="mr-1" />
              I accept the terms of use
            </label>
            <div className={isDownloadButtonActive ? '' : styles.blockWrapper}>
              <div className={isDownloadButtonActive ? '' : styles.blockButton}></div>
              <HubspotCTA title="Download Trustmeter" link='5117c7e2-b38b-4c89-a9e4-b1c08a154ef6' />
            </div>
          </div>
        </Modal>
      </div>
    );
};

ModalButton.propTypes = propTypes;
ModalButton.defaultProps = defaultProps;

export default ModalButton;
