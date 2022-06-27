import React, {useRef, useEffect} from 'react';
import './App.scss';
import {Power4} from 'gsap';
import {gsap} from 'gsap';


function Tranistion() {
    const trans = useRef(null);
    useEffect(() => {
        gsap.to(trans.current, {
            duration: 5,
            x: 2700,
            ease: Power4.easeOut,
            opacity: 0
        })
    })
  return (
    <div className='transition-effect' ref={trans}></div>
  )
}

export default Tranistion