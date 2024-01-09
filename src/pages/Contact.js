// Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import emailConfigList from '../helper/EmailConfigList';
import { Button } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors/indigo'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { service_id, template_id, user_id } = emailConfigList;

    emailjs.sendForm(service_id, template_id, event.target, user_id)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
        navigate('/');

      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
      });
  };

  return (
    <div className='pagelayout'>
      <div>
        <h1>Contact Page</h1>
      </div>

      <div>
        <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="name">Email: </label>
                <input className="inputBoxSpecs"
                    type="email"
                    id="name"
                    name="name"
                    placeholder="Email"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message"> Message: </label>
                <textarea className="messageBoxSpecs"
                    id="message"
                    name="message"
                    value={message}
                    placeholder="Message with name"
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    required
                ></textarea>
            </div>
            
            <div className="form-group">
                <Button variant='contained' style={{ margin: "15px" }} type="submit">Send Email</Button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

