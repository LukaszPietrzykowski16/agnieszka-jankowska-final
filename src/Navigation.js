import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './Home';
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

function Navigation() {
  
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
 
    
    <Router>
        <ScrollToTop/>
        <div className='navigation'>
        <div className='logo'>
        <img src={logo}/>
        </div>
        <div className='navigation-desktop'>
          <div className='sub-nav'><Link to="/"> STRONA GŁÓWNA </Link> </div>
          <div className='sub-nav'><Link to="/gallery"> PORTFOLIO </Link> </div>
          <div className='sub-nav'><Link to="/oferta"> OFERTA </Link> </div>
          <div className='sub-nav'><Link to="/kontakt"> KONTAKT </Link> </div>
          <div className='sub-nav'><Link to="/o-mnie"> O MNIE </Link> </div>
        </div>

     
          <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}> 
            <FontAwesomeIcon icon={ menu ?  faXmarkCircle  : faBars} />
          </div>
         
          </div>
          <div className='box'>
            <div className={menu ?  "menu-open": "menu-close"}>
            <div className='navigation-mobile'>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/"> STRONA GŁÓWNA </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/gallery"> PORTFOLIO </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/oferta"> OFERTA </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/kontakt"> KONTAKT </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/o-mnie"> O MNIE </Link> </div>
            </div>
        </div>
        
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/oferta" element={<Oferta />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/o-mnie" element={<Omnie />} />
            <Route path="/reportaz-slubny" element={<Reportaz />} />
            <Route path="/slub-plener" element={<SlubPlener />} />
            <Route path="/chrzest-reportaz" element={<ChrzestReportaz />} />
            <Route path="/chrzest-plener" element={<ChrzestPlener />} />
            <Route path="/imprezy-okolicznosciowe" element={<Imprezy />} />
            <Route path="/ciazowe" element={<Ciazowe />} />
        </Routes>
    
    </Router>
  
    
   <Footerelement />
   </>
  );
}

export default Navigation;
