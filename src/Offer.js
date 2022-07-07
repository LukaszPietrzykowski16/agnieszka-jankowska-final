import React, { useState, useEffect } from "react";
import  "./App.scss";
import img1 from './images/portfolio/offer/img1.webp';
import img2 from './images/portfolio/offer/img2.webp';
import img3 from './images/portfolio/offer/img3.webp';
import img4 from './images/portfolio/offer/img4.webp';
import img5 from './images/portfolio/offer/img5.webp';
import img6 from './images/portfolio/offer/img6.webp';

// it's seems to working finally

const images = [img1, img2, img3, img4, img5, img6]



function Offer() {

  {images.map((image, index) => (
    <img
      id={index}
      className="image"
      src={image}
      style={{
        animationDelay: `${index * 4}s`, 
        zIndex: `-${index + 1}` 
        }}
     alt="albumy ze zdjęciami"/>
  ))}
const slidePresentationTime = 6000 
const [currentSlide, setCurrentSlide] = useState(0) 


useEffect(() => {
  const sliderInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length); 
    }, slidePresentationTime);

    return () => {
      clearInterval(sliderInterval)
    }
})

  return (
    <>
    <div className="content-gallery">
      <div className="content">
        <div  className="content-img">
          {images.map((image, index) => (
            <img
              id={index}
              key={index}
              className={index === currentSlide ? 'image active' : 'image'}
              src={image}
              style={{
                zIndex: `-${index + 1}`
              }}
            alt="Zdjęcie przedstawiające albumy ze zdjęciami"/>
          ))}
        </div>
        <div className="content-text-mobile">
        test
        </div>
      </div>
      <div className="content-text">
              <h1> some h1 </h1>
          lorem ipsim doens't work in XHTML
        </div>

    </div>   
  
    </>
  );
}


export default Offer;