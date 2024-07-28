import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/ContactMe.css';

const contacts = [
  {
    type: 'Email',
    icon: <FaEnvelope />,
    info: 'aturonov@mun.ca'
  },
  {
    type: 'LinkedIn',
    icon: <FaLinkedin />,
    info: 'https://www.linkedin.com/in/abdulaziz-turonov-63ab3a260/'
  },
  {
    type: 'Phone',
    icon: <FaPhone />,
    info: '+1(709)727-4138'
  },
  {
    type: 'GitHub',
    icon: <FaGithub />,
    info: 'https://github.com/AbdulTur'
  }
];

const ContactItem = ({ contact }) => {
  return (
    <div className="contact-item">
      <div className="contact-icon">{contact.icon}</div>
      <div className="contact-info">
        {contact.type === 'Email' || contact.type === 'Phone' ? (
          <span>{contact.info}</span>
        ) : (
          <a href={contact.info} target="_blank" rel="noopener noreferrer">
            {contact.info}
          </a>
        )}
      </div>
    </div>
  );
};

const ContactMe = () => {
  return (
    <>
      <div className="separator-container">
        <div className="separator"></div>
      </div>
      <section className="contact-section py-12 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="contact-container">
          {contacts.map((contact, index) => (
            <ContactItem key={index} contact={contact} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactMe;
