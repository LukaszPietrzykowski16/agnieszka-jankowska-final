import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Reportaz from './SlubPlener';
import Omnie from './OMnie';
import Footerelement from './Footerelement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './images/logo.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import gsap from 'gsap';
import {Power4} from 'gsap';
import SlubPlener from './SlubPlener';
import ScrollToTop from './ScrollToTop';
import Panel from './firstPanel'
import HomeFiz from './HomeFiz';
import Gallery from './Galeria';
import Oferta from './Oferta';
import Kontakt from './Kontakt';

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
            <Route path="/reportaz-slubny" element={<SlubPlener />} />
            <Route path="/slub-plener" element={<SlubPlener />} />
            <Route path="/chrzest-reportaz" element={<SlubPlener />} />
            <Route path="/chrzest-plener" element={<SlubPlener />} />
            <Route path="/imprezy-okolicznosciowe" element={<SlubPlener />} />
            <Route path="/ciazowe" element={<SlubPlener />} />
            <Route path="/komunia" element={<SlubPlener />} />
            <Route path="/osiemnastki" element={<SlubPlener />} />
            <Route path="/sesja-portretowa" element={<SlubPlener />} />
            <Route path="/rodzinne" element={<SlubPlener />} />
        </Routes>
    
    </Router>
  
    
    
   </>
  );
}

export default Navigation;
