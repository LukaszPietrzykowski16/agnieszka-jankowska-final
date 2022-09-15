import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import logo from './images/logo.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Menu() {
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
         <nav className='navigation'>
        <div className='logo'>
        <Link to="/" aria-label="Wróć na stronę główną"><img src={logo} alt="logo"/></Link>
        </div>
        <ul className='navigation-desktop'>
          <li className='sub-nav'><Link to="/fotografia"  aria-label="Stronę główną"> STRONA GŁÓWNA </Link> </li>
          <li className='sub-nav'><Link to="/gallery" aria-label="Portfolio"> PORTFOLIO </Link> </li>
          <li className='sub-nav'><Link to="/oferta" aria-label="Oferta"> OFERTA </Link> </li>
          <li className='sub-nav'><Link to="/kontakt" aria-label="Kontakt"> KONTAKT </Link> </li>
          <li className='sub-nav'><Link to="/o-mnie" aria-label="O mnie"> O MNIE </Link> </li>
        </ul>

     
          <div className='sub-nav-mobile-x' onClick={() => hideMenu(menu)}> 
            <FontAwesomeIcon icon={ menu ?  faXmarkCircle  : faBars} />
          </div>
         
          </nav>
          <nav className='box'>
            <div className={menu ?  "menu-open": "menu-close"}>
            <div className='navigation-mobile'>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/fotografia"> STRONA GŁÓWNA </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/gallery"> PORTFOLIO </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/oferta"> OFERTA </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/kontakt"> KONTAKT </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/o-mnie"> O MNIE </Link> </div>
            </div>
        </div>
        
        </nav>
        </>
    )
}

export default Menu