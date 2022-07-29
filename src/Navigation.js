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
import Komunia from './Komunia';
import Osiemnastki from './Osiemnastki';
import Portretowe from './Portretowe';
import Rodzinne from './Rodzinne';
import Panel from './firstPanel'
import HomeFiz from './HomeFiz';
import Footer from './Footerelement'

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
      
        <Routes>
            <Route path="/" element={<Panel />} />
            <Route path="/fotografia" element={<Home />} />
            <Route path="/fizjoterapia" element={<HomeFiz />} />
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
            <Route path="/komunia" element={<Komunia />} />
            <Route path="/osiemnastki" element={<Osiemnastki />} />
            <Route path="/sesja-portretowa" element={<Portretowe />} />
            <Route path="/rodzinne" element={<Rodzinne />} />
        </Routes>
    
    </Router>
  
    
    
   </>
  );
}

export default Navigation;
