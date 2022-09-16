import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Social() {
  return (
      <>
      <div className='pink'>
      <div className='header-one'>
        <h1> Zapraszam na social media! </h1>
    </div>
     <div className='social'>
        <div className='social-fb'> <a href='https://www.facebook.com/Jankowska.A.Fotografia'>  <FontAwesomeIcon icon={ faFacebook }  /> <p> Facebook </p> </a> </div>
        <div className='social-ig'> <a href='https://www.instagram.com/jankowska_agnieszka_fotografia/'>  <FontAwesomeIcon icon={ faInstagram } /> <p> Instagram </p> </a> </div>
     </div>
      </div>
   
     </>
 );
}

export default Social;
