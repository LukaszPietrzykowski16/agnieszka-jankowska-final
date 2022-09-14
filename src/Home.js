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
