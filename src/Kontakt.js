import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Kontakt() {
  return (
      <>
<div className='contact'>
      <h1> KONTAKT </h1>
      <div className='contact-subsection'>
        <div className='contact-phone'>  <FontAwesomeIcon icon={ faPhoneAlt  } /> Telefon:  725 209 990  </div>
        <div className='contact-email'> <FontAwesomeIcon icon={ faEnvelope  } /> Email: f.f.agnieszkajankowska@gmail.com  </div>
      </div>
      
  </div>

    <div className='form-contant'>
      
    <form>
    <h1> Skontaktuj się ze mną! </h1>
  <label>
    <h3> Imię: </h3>
    <input type="text" name="name" />
  </label>
  <label>
  <h3> Email: </h3>
    <input type="text" name="name" />
  </label>
  <textarea>  </textarea>
  <input type="submit" value="Wyślij" />
</form>
    </div>
   
  </>);
}

export default Kontakt;
