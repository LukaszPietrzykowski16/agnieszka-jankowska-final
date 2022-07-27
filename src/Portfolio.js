import React from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom';
import img2 from './images/portfolio/IMG_6122.webp';
import img3 from './images/portfolio/IMG_2887.webp';
import img4 from './images/portfolio/7.webp';
import img5 from './images/portfolio/0138.webp';
import img6 from './images/portfolio/13.webp';
import img7 from './images/portfolio/IMG_6122.webp';
import img8 from './images/portfolio/IMG_2887.webp';
import img9 from './images/portfolio/IMG_7111.webp';
import img10 from './images/portfolio/IMG_7111.webp';

function Portfolio() {
  return (
   <>
    
        <div className='portfolio'>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/reportaz-slubny" > <img src={img3} alt="Reporaz slubny"/><p>  Reportaż ślubny </p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/slub-plener"> <img src={img2} alt="Plenerowe sesje ślubne"/><p>  Plenerowe sesje ślubne </p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/chrzest-reportaz"> <img src={img4} alt="Chrzest Święty - reportaż"/><p>  Chrzest Święty - reportaż</p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/chrzest-plener"> <img src={img10} alt="Chrzest Święty - plene"/><p>  Chrzest Święty - plener</p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/komunia"> <img src={img9} alt="komunia"/><p>  Komunia Święta </p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/imprezy-okolicznosciowe"> <img src={img5} alt="Chrzest Święta - plener"/><p>  Imprezy okolicznościowe </p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/sesja-portretowa"> <img src={img7} alt="Sesja portetowa"/> <p>  Sesja portetowa </p> </Link>  </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/rodzinne"> <img src={img8} alt=" Sesje rodzinne"/><p>  Sesje rodzinne </p> </Link> </div>
          <div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <Link to="/ciazowe"> <img src={img6} alt="Sesje brzuszkowe"/><p>  Sesje brzuszkowe </p> </Link> </div>
        </div>
       
           
        <div className='porfolio-button-div'>
        <button className='center' aria-label='Zobacz portfolio'> Zobacz portfolio </button>
        </div>
  
        </>
 );
}

export default Portfolio;
