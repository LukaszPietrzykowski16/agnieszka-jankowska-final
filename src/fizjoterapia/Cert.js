import React from 'react'
import img0 from '../images/Fizjoterapia-9.jpg';
import img1 from '../images/Fizjoterapia-8.jpg';
import img2 from '../images/Fizjoterapia-20.jpg';

function Cert() {
  return (
    <div className='entitlements'>
      <div className='card'>
        <div className='card-img'>
          <img src={img0}></img>
        </div>
        <div className='card-txt'>
          W mojej ofercie znajdziecie również masaże, posiadam profesjonalny przenośny stół do takiego rodzaju zabiegów. 
        </div>
      </div>
      <div className='card'>
        <div className='card-img'>
          <img src={img1}></img>
        </div>
        <div className='card-txt'>
        W mojej ofercie znajdziecie również masaże, posiadam profesjonalny przenośny stół do takiego rodzaju zabiegów. 
        </div>
      </div>
      <div className='card'>
        <div className='card-img'>
          <img src={img2}></img>
        </div>
        <div className='card-txt'>
          Posiadam również wyspecjaliozwane narzędzie do masażu klasycznego jak i masażu tkanek głebokich. Pomagają również w rehabilitacji pacjentów. 
        </div>
      </div>
    </div>
  )
}

export default Cert