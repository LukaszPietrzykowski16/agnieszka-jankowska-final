import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/LogoFizjo.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'




function FizjoMenu() {
    const [menu, setMenu] = useState(false);

    const hideMenu = (menu) => {
      if (menu === true) {
        setMenu(false);
      } else {
        setMenu(true);
      }
      
    }
    
    return (
        <>
         <div className='navigation'>
        <div className='logo'>
        <Link to="/"><img src={logo}/></Link>
        </div>
        <div className='navigation-desktop'>
          <div className='sub-nav'> <a href='#test'>  OFERTA </a> </div>
          <div className='sub-nav'> <a href='#co'>  KONTAKT  </a> </div>
          <div className='sub-nav'>  <a href="https://zarejestrowani.pl/w/B2JkdikyN6ovHOTYBVwB3A/?fbclid=IwAR2oDVzoMbVaYxWM5V4aO9DT8qs5hzcq6pChMytsYuYFhHsMBLV-n_z3VO0"> ZAREJSTRUJ SIĘ </a></div>
        </div>

     
          <div className='sub-nav-mobile-x' onClick={() => hideMenu(menu)}> 
            <FontAwesomeIcon icon={ menu ?  faXmarkCircle  : faBars} />
          </div>
         
          </div>
          <div className='box'>
            <div className={menu ?  "menu-open": "menu-close"}>
            <div className='navigation-mobile'>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}>  <a href='#test'>  OFERTA </a> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}> <a href='#co'>  KONTAKT  </a> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}> <a href="https://zarejestrowani.pl/w/B2JkdikyN6ovHOTYBVwB3A/?fbclid=IwAR2oDVzoMbVaYxWM5V4aO9DT8qs5hzcq6pChMytsYuYFhHsMBLV-n_z3VO0"> ZAREJSTRUJ SIĘ </a> </div>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default FizjoMenu