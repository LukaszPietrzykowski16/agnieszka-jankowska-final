import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import img1 from './images/IMG_9425a.webp';
import img2 from './images/portfolio/IMG_6122.webp';
import img3 from './images/portfolio/IMG_2887.webp';
import img4 from './images/portfolio/7.webp';
import img5 from './images/portfolio/0138.webp';
import img6 from './images/portfolio/13.webp';
import img7 from './images/portfolio/IMG_6122.webp';
import img8 from './images/portfolio/IMG_2887.webp';
import img9 from './images/portfolio/IMG_7111.webp';
import img10 from './images/portfolio/IMG_7111.webp';
import  gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reportaz from './Reportaz';
import Home from './Home';

export default function Galeria() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
     
    gsap.from('.test-gallery-subsection', {scrollTrigger: {
      trigger: '.test-gallery-subsection',
      toggleActions: 'play none none none'},
      duration: 1.5, 
      ease: "slow(0.7, 0.7, false)", 
    
      y: 150 
    })
          
  }, [])

  useEffect(() => {
     
    gsap.from('.test-gallery-subsection-reverse', {scrollTrigger: {
      trigger: '.test-gallery-subsection-reverse',
      toggleActions: 'play none none none'},
      duration: 1.5, 
      ease: "slow(0.7, 0.7, false)", 
    
      y: 150 
    })
          
  }, [])

  return ( <>  
 
  <div className='test-gallery'>
   
    <Link to="/reportaz-slubny"> 
    <div className='test-gallery-subsection'>
      <div className='test-gallery-subsection-img'>
        <img src={img2} alt="Reportaż ślubny"/>
      </div>
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1> Reportaż ślubny </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>
    </div>
    </Link>
    <Link to="/slub-plener"> 
    <div className='test-gallery-subsection-reverse'>

  
    <div className='test-gallery-subsection-txt'>
    
    <p> 
    <h1> Plenerowe sesje ślubne </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
        
  </div>
  
  <div className='test-gallery-subsection-img'>
        <img src={img3} alt="Plenerowe sesje ślubne"/>
      </div>
     
      
    </div>
    </Link>
    <Link to="/chrzest-reportaz"> 
    <div className='test-gallery-subsection'>
      <div className='test-gallery-subsection-img'>
        <img src={img4} alt="Chrzest święty - reportaż"/>
      </div>
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1> Chrzest święty - reportaż </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>
    </div>
    </Link>
    <Link to="/chrzest-plener"> 
    <div className='test-gallery-subsection-reverse'>
     
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1>  Chrzest święty - plener </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>
      <div className='test-gallery-subsection-img'>
        <img src={img5} alt="Chrzest święty plener"/>
      </div>
    </div>
    </Link>
    <Link to="/imprezy-okolicznosciowe"> 
    <div className='test-gallery-subsection'>
      <div className='test-gallery-subsection-img'>
        <img src={img2}  alt="Imprezy okolicznosciowe"/>
      </div>
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1> Imprezy okolicznosciowe </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>
    </div>
    </Link>
    <Link to="/ciazowe"> 
    <div className='test-gallery-subsection-reverse'>
    
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1> Ciazowe </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>

      <div className='test-gallery-subsection-img'>
        <img src={img2} alt="Ciazowe" />
      </div>
    </div>
    </Link>
  </div>
  
   
  </>
  )
}


