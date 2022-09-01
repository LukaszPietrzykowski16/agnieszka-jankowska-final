import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import Content from './Content';
import About from './About';
import Portfolio from './Portfolio';
import Offer from './Offer';
import Contact from './Contact';
import Social from './Social';
import Gallery from './Galeria';
import Oferta from './Oferta';
import Kontakt from './Kontakt';
import Photos from './Photos';
import Omnie from './OMnie';
import Footerelement from './Footerelement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './images/logo.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'
import gsap from 'gsap';
import {Power4} from 'gsap';
import Reportaz from './Reportaz';
import SlubPlener from './SlubPlener';
import ChrzestPlener from './ChrzestPlener';
import ChrzestReportaz from './ChrzestReportaz';
import Imprezy from './Imprezy';
import Ciazowe from './Ciazowe';
import ScrollToTop from './ScrollToTop';
import Komunia from './Komunia';
import Osiemnastki from './Osiemnastki';
import Portretowe from './Portretowe';
import Rodzinne from './Rodzinne';
import Panel from './firstPanel'
import HomeFiz from './HomeFiz';




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
         <div className='navigation'>
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
         
          </div>
          <div className='box'>
            <div className={menu ?  "menu-open": "menu-close"}>
            <div className='navigation-mobile'>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/fotografia"> STRONA GŁÓWNA </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/gallery"> PORTFOLIO </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/oferta"> OFERTA </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/kontakt"> KONTAKT </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/o-mnie"> O MNIE </Link> </div>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default Menu