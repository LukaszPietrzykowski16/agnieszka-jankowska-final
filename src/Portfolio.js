import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import img1 from './images/IMG_9425a.jpg';
import img2 from './images/portfolio/IMG_6122.jpg';
import img3 from './images/portfolio/IMG_2887.jpg';
import img4 from './images/portfolio/7.jpg';
import img5 from './images/portfolio/0138.jpg';
import img6 from './images/portfolio/13.jpg';
import img7 from './images/portfolio/IMG_6122.jpg';
import img8 from './images/portfolio/IMG_2887.jpg';
import img9 from './images/portfolio/IMG_7111.jpg';
import img10 from './images/portfolio/IMG_7111.jpg';

function Portfolio() {
  return (
   <>
    
        <div className='portfolio'>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/reportaz-slubny" > <img src={img3}/><p>  Reportaż ślubny </p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div>  <Link to="/plenerowe-sesje-slubne"> <img src={img2}/><p>  Plenerowe sesje ślubne </p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/chrzest-swiety-reportaz"> <img src={img4}/><p>  Chrzest Święty - reportaż</p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/chrzest-swiety-plener"> <img src={img10}/><p>  Chrzest Święty - plener</p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/chrzest-swiety-reportaz"> <img src={img6}/><p>  Chrzest Święty - reportaż</p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/chrzest-swiety-plener"> <img src={img5}/><p>  Chrzest Święta - plener </p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/sesja-portretowa"> <img src={img7}/> <p>  Sesja portetowa </p> </Link>  </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/sesje-rodzinne"> <img src={img8}/><p>  Sesje rodzinne </p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/osiemnastki"> <img src={img9}/><p>  Osiemnastki </p> </Link> </div>
        </div>
       
           
        <div className='porfolio-button-div'>
        <button className='center'> Zobacz portfolio </button>
        </div>
  
        </>
 );
}

export default Portfolio;
