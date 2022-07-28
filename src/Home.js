import React from 'react';
import Content from './Content';
import About from './About';
import Portfolio from './Portfolio';
import Offer from './Offer';
import Contact from './Contact';
import Social from './Social';
import Panel from './firstPanel'

function Home() {
  return (
    <>
   <Panel />
   <Content />
   <About /> 
   <Portfolio />
   <Offer/> 
   <Contact />
   <Social />
    </>
   );
}

export default Home;
