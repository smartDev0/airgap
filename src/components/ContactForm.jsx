import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import Button from './Button';
import Panel from './Panel';
import PropTypes from '../util/PropTypes';
import Typography from './Typography';

const ContactForm = ({ children, pageOptions, formUrl }) => {
    const [form, updateForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        message: '',
    });

    const [downloadAllowed, setDownloadAllowed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const xhr = new XMLHttpRequest();
        const url = formUrl;

        const data = {
            "fields": [
                {
                    "name": "firstname",
                    "value": form.firstname,
                },
                {
                    "name": "lastname",
                    "value": form.lastname,
                },
                {
                    "name": "email",
                    "value": form.email,
                },
                {
                    "name": "company",
                    "value": form.company,
                },
                {
                    "name": "message",
                    "value": form.message,
                },
            ],
            "context": {
                "pageUri": `airgap.io${pageOptions.path}`,
                "pageName": pageOptions.name,
            },
        };

        const finalData = JSON.stringify(data);

        xhr.open('POST', url);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                setDownloadAllowed(true);
            } else if (xhr.readyState === 4 && xhr.status === 400){
                alert(xhr.responseText);
            } else if (xhr.readyState === 4 && xhr.status === 403){
                alert(xhr.responseText);
            } else if (xhr.readyState === 4 && xhr.status === 404){
                alert(xhr.responseText);
            }
        }

        xhr.send(finalData);
    };

    const handleChange = (event) => {
        updateForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Panel className="p-3 p-lg-5" theme="white" rounded>
            {!downloadAllowed && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>First name*</Form.Label>
                        <Form.Control
                            name="firstname"
                            type="text"
                            placeholder="Your first name"
                            required
                            value={form.firstname}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last name*</Form.Label>
                        <Form.Control
                            name="lastname"
                            type="text"
                            placeholder="Your last name"
                            required
                            value={form.lastname}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Work Email*</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company*</Form.Label>
                        <Form.Control
                            name="company"
                            type="text"
                            placeholder="Where you work"
                            required
                            value={form.company}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Anything else?</Form.Label>
                        <Form.Control
                            name="message"
                            as="textarea"
                            rows="3"
                            placeholder="If you're looking for anything in particular, let us know here and we'll tailor our response accordingly."
                            value={form.message}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="ctaAccent" fullWidth submit>
                        Learn how it works
                    </Button>
                </Form>
            )}
            {downloadAllowed && (
                <>
                    <Typography variant="heading4" paragraph>
                        Thank you for contacting us! One of our colleagues will get back in touch with you soon!
                    </Typography>
                </>
            )}
        </Panel>
    );
};

ContactForm.propTypes = {
    children: PropTypes.node,
    pageOptions: PropTypes.shape({}),
    formUrl: PropTypes.string,
};

ContactForm.defaultProps = {
    children: null,
    pageOptions: null,
    formUrl: null,
};

export default ContactForm;
