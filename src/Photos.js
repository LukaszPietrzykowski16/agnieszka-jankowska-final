import React from 'react';
import image from './images/IMG_9425a.jpg';
function Photos() {
  return (
      <>
  <div className='offer'>
       <div className='offer-photo'>
        <img src={image}/>
       </div>
       <div className='offer-text'>
         <div className='offer-sub-text'>
         <h1> Co oferuje? </h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
         </div>
    
        </div>
  </div>);
  </>);
}

export default Photos;
