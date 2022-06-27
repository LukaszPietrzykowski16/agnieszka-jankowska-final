import React, { useState, useEffect, useCallback}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';

import { faArrowLeft, faXRay, faArrowRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import img1 from './images/portfolio/sesje-ciazowe/img1.jpg';
import img2 from './images/portfolio/sesje-ciazowe/img2.jpg';
import img3 from './images/portfolio/sesje-ciazowe/img3.jpg';
import img4 from './images/portfolio/sesje-ciazowe/img4.jpg';
import img5 from './images/portfolio/sesje-ciazowe/img5.jpg';
import img6 from './images/portfolio/sesje-ciazowe/img6.jpg';
import img7 from './images/portfolio/sesje-ciazowe/img7.jpg';
import img8 from './images/portfolio/sesje-ciazowe/img8.jpg';
import img9 from './images/portfolio/sesje-ciazowe/img9.jpg';
import img10 from './images/portfolio/sesje-ciazowe/img10.jpg';

import img11 from './images/portfolio/sesje-ciazowe/img11.jpg';
import img12 from './images/portfolio/sesje-ciazowe/img12.jpg';
import img13 from './images/portfolio/sesje-ciazowe/img13.jpg';
import img14 from './images/portfolio/sesje-ciazowe/img14.jpg';
import img15 from './images/portfolio/sesje-ciazowe/img15.jpg';
import img16 from './images/portfolio/sesje-ciazowe/img16.jpg';
import img17 from './images/portfolio/sesje-ciazowe/img17.jpg';
import img18 from './images/portfolio/sesje-ciazowe/img18.jpg';
import img19 from './images/portfolio/sesje-ciazowe/img19.jpg';
import img20 from './images/portfolio/sesje-ciazowe/img20.jpg';


const Reportaz = () => {
    
    const imageList = [ 
        {id: 1,
            imageUrl: img1},
        {id: 2,
            imageUrl: img2},
        {id: 3,
            imageUrl: img3},
        {id: 4,
            imageUrl: img4},
        {id: 5,
            imageUrl: img5},
        {id: 6,
            imageUrl: img6},
        {id: 7,
            imageUrl: img7}, 
        {id: 8,
            imageUrl: img8 
        },
        {id: 9,
            imageUrl: img9 
        },
        {id: 10,
            imageUrl: img10 
        },
        {id: 11,
            imageUrl: img11},
        {id: 12,
            imageUrl: img12},
        {id: 13,
            imageUrl: img13},
        {id: 14,
            imageUrl: img14},
        {id: 15,
            imageUrl: img15},
        {id: 16,
            imageUrl: img16},
        {id: 17,
            imageUrl: img17}, 
        {id: 18,
            imageUrl: img18 
        },
        {id: 19,
            imageUrl: img19 
        },
        {id: 20,
            imageUrl: img20 
        }
        
            
    ]

    const [lightbox, setLightbox] = useState(false);
    
    const showGallery = (index) => {
        setValue(index)
        console.log(index)
        setLightbox(true)
    }

    const image = imageList.map((singleImage) => {
        return singleImage.imageUrl
      })
    
    let [index, setValue] = useState(0);
    
    
    const hideGallery = (lightbox) => {
        setLightbox(false)
    }
    
    const leftSlide = (index) => {
        if (index === 0) {
            index = image.length;
          }
          setValue(index - 1)  
    }

    const rightSlide = (index) => {
        if (index === image.length) {
            index = -1;
          }
          setValue(index + 1)  
    }

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'ArrowRight'){
            rightSlide(index)
        } else if (event.key === 'ArrowLeft') {
            leftSlide(index)
        }
      }, [index]);
    
      useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [handleKeyPress]);

    

    return (
        <>
         <div className={lightbox ? "gallery-open": "gallery-close"}  >
            <img src={image[index]}/>
            <div className='exit' onClick={() => hideGallery(lightbox)}> <FontAwesomeIcon icon={ faTimesCircle }/> </div>
            <div className='left-arrow' onClick={() =>  leftSlide(index)} >  <FontAwesomeIcon icon={ faArrowLeft }/> </div>
            <div className='right-arrow' onClick={() => rightSlide(index)}>  <FontAwesomeIcon icon={ faArrowRight  }/> </div>
        </div>
        <div className='gallery-portfolio'>
        {imageList.map((singlePhoto) => {
            return (
                <div className={"pic"} onClick={() => showGallery(singlePhoto.id - 1)}>
                    <img src={singlePhoto.imageUrl}/>
                </div>
            )
        })}
        </div>
      
        </>
    )
}


export default Reportaz; 