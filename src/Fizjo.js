import React from 'react';
import img1 from './images/fizjo.jpg'


function Fizjo() {
    return (
        <>
        <div className='about-section'> 
      <div className='about-photo'>
          <img src={img1} alt="Zdjecię przedstawiające Agnieszkę Jankowską" />
      </div>
      <div className='about-text'>
          <h1> Cześć! </h1>
          <p> Jestem fizjoterapeutą czyli kim?  Najbardziej podoba mi się określenie, że osobą pomagającą powrócić do sprawności. Ale nie tylko tym się zajmuję - również szeroko pojętą profilaktyką oraz propagowaniem zdrowego stylu życia. W swojej pracy wykorzystuje ćwiczenia oraz masaż. Głównie pracuje swoimi dłońmi, ale również używam innych przyrządów np. baniek czy aplikatora wieloigłowego (lub po prostu wałeczka z igłami) </p>
      </div>
        </div>
       
        </>
        
    )
}

export default Fizjo;