import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
  <div className='contact'>
      <h1> KONTAKT </h1>
      <div className='contact-subsection'>
        <div className='contact-phone'>  <FontAwesomeIcon icon={ faPhoneAlt  } /> Telefon:  725 209 990  </div>
        <div className='contact-email'> <FontAwesomeIcon icon={ faEnvelope  } /> Email: f.f.agnieszkajankowska@gmail.com  </div>
      </div>
      
  </div>);
}

export default Contact;
