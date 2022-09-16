import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Menu from './Menu';
import Content from './fotografia/Content';
import About from './fotografia/About';
import Portfolio from './fotografia/Portfolio';
import Offer from './fotografia/Offer';
import Contact from './fotografia/Contact';
import Social from './fotografia/Social';
import Footer from './fotografia/Footerelement';



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
