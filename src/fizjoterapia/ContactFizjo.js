import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactFizjo = () => {
    return <> 
        <h4 id='co'> Kontakt: </h4>
        <div className="cont">      
           
            <div className='cont-sub'>
         
                <div className='contact-phone'>  <FontAwesomeIcon icon={ faPhoneAlt  } /> Telefon:  725 209 997  </div>
                <div className='contact-email'> <FontAwesomeIcon icon={ faEnvelope  } /> Email: f.f.agnieszkajankowska@gmail.com  </div>
            </div>
            <div className='cont-sub'>
                <h4> Przez Aplikacje zarejstrowani.pl: </h4>
                <a href="https://zarejestrowani.pl/w/B2JkdikyN6ovHOTYBVwB3A/?fbclid=IwAR2oDVzoMbVaYxWM5V4aO9DT8qs5hzcq6pChMytsYuYFhHsMBLV-n_z3VO0"><button className='rejester'> Zarejestruj się! </button></a>
            </div>  
        </div>
       
    
    </>
}

export default ContactFizjo