import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Menu from './Menu';
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
import Footer from './Footerelement';


function Home() {

  return (
    <>
   <Menu />
   <Content />
   <About /> 
   <Portfolio />
   <Offer/> 
   <Contact />
   <Social />
   <Footer />
    </>
   );
}

export default Home;
