import React, { useEffect} from 'react';
import img1 from './images/IMG_9425a.webp';
import  gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.scss';



function About() {
  gsap.registerPlugin(ScrollTrigger);
 

  useEffect(() => {
     
  gsap.from('.about-photo', {scrollTrigger: {
    trigger: '.about-photo',
    toggleActions: 'play none none none'},
    y: 60,
    opacity: 0,
    duration: 1.5
  })
        
}, [])

useEffect(() => {
     
  gsap.from('.about-text', {scrollTrigger: {
    trigger: '.about-text',
    toggleActions: 'play none none none'},
    y: -60,
    opacity: 0,
    duration: 1.5
  })
        
}, [])

  return (
  <div className='about-section'> 
    <div className='about-photo'>
        <img src={img1} alt="Zdjęcie przedstawiające Agnieszkę Jankowską"/>
    </div>
    <div className='about-text'>
        <h1> Cześć! </h1>
        <p> Jestem Agnieszka i mieszkam w Zduńskiej Woli. Fotografią zajmuję się od ponad 10 lat – w głównej mierze jest to fotografia reportażowa oraz portretowa. Chętnie wykonam dla Ciebie sesje indywidualną, w parze lub rodzinną, w swojej ofercie mam również reportaże z chrzcin, komunii czy wesel. Podczas fotografowania staram się uchwycić Waszą codzienność, bliskość i emocje. Jeśli chodzi o zakres mojej pracy to jestem elastyczna i staram się odpowiedzieć na Wasze potrzeby, gdyż wiem, że każdy z nas się różni i potrzebuje zupełnie czegoś innego. Dojeżdżam do Waszych domów oraz w miejsca uroczystości.</p>
    </div>
  </div>);
}

export default About;
