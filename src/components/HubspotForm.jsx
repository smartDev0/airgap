import React, { useState, useEffect } from 'react';
import ReactHubspotForm from 'react-hubspot-form';
import classnames from 'classnames';

import Panel from './Panel';
import Typography from './Typography';
import Link from './Link';
import PropTypes from '../util/PropTypes';
import styles from './HubspotForm.module.scss';

const propTypes = {
  children: PropTypes.object,
  title: PropTypes.object,
  showPrivacyPolicy: PropTypes.bool,
  className: PropTypes.string,
  formId: PropTypes.string,
  redirectTo: PropTypes.string,
};

const defaultProps = {
  children: null,
  title: null,
  showPrivacyPolicy: false,
  className: '',
  formId: '',
  redirectTo: '',
};

const HubspotForm = ({
  formId,
  redirectTo,
  children,
  className,
  title,
  showPrivacyPolicy,
}) => {
  const [isSubmitted, setSubmittedStatus] = useState(false);
  const [isFormLoaded, setFormLoadStatus] = useState(false);
  const wrapperClassNames = classnames([className, 'p-3 p-lg-5', styles.wrapper, !isFormLoaded && 'd-none']);

  useEffect(() => {
    const hubspotEventHandler = event => {
      if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
          if (event.data.id === formId) {
            if (redirectTo) {
              window.location.href = redirectTo;
            }
            setSubmittedStatus(true);
          }
      }
    };
    
    window.addEventListener('message', hubspotEventHandler);
    return () => {
        window.removeEventListener('message', hubspotEventHandler);
    }
  }, [formId, redirectTo]);

  return (
    <>
      <Panel className={wrapperClassNames} theme="white" rounded>
        {!isSubmitted && title}
        {isSubmitted && children}
        {(!isSubmitted || !children) && (
          <div className={styles.form}>
            <ReactHubspotForm
              portalId="6848218"
              formId={formId}
              onReady={() => setFormLoadStatus(true)}
              />
          </div>
            
        )}
        {!isSubmitted && showPrivacyPolicy &&
          <Typography variant="small" className={styles.privatePolicy}>
            By submitting this form, you agree to our
            <Link to="/terms-and-conditions/"> Terms of Use </Link> 
             and acknowledge our
            <Link to="/privacy-policy/"> Privacy Statement</Link>.
            You can unsubscribe at any time at Manage Subscriptions.
          </Typography> 
        }
      </Panel>
    </>
  );
}

HubspotForm.propTypes = propTypes;
HubspotForm.defaultProps = defaultProps;

export default HubspotForm;
