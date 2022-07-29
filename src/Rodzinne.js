
import React, { useState, useEffect, useCallback}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';
import Menu from './Menu';
import { faArrowLeft, faXRay, faArrowRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import img1 from './images/portfolio/sesje-rodzinne/img1.jpg';
import img2 from './images/portfolio/sesje-rodzinne/img2.jpg';
import img3 from './images/portfolio/sesje-rodzinne/img3.jpg';
import img4 from './images/portfolio/sesje-rodzinne/img4.jpg';
import img5 from './images/portfolio/sesje-rodzinne/img5.jpg';
import img6 from './images/portfolio/sesje-rodzinne/img6.jpg';
import img7 from './images/portfolio/sesje-rodzinne/img7.jpg';
import img8 from './images/portfolio/sesje-rodzinne/img8.jpg';
import img9 from './images/portfolio/sesje-rodzinne/img9.jpg';
import img10 from './images/portfolio/sesje-rodzinne/img10.jpg';
import img11 from './images/portfolio/sesje-rodzinne/img11.jpg';
import img12 from './images/portfolio/sesje-rodzinne/img12.jpg';
import img13 from './images/portfolio/sesje-rodzinne/img13.jpg';
import img14 from './images/portfolio/sesje-rodzinne/img14.jpg';
import img15 from './images/portfolio/sesje-rodzinne/img15.jpg';
import img16 from './images/portfolio/sesje-rodzinne/img16.jpg';
import img17 from './images/portfolio/sesje-rodzinne/img17.jpg';
import img18 from './images/portfolio/sesje-rodzinne/img18.jpg';
import img19 from './images/portfolio/sesje-rodzinne/img19.jpg';
import img20 from './images/portfolio/sesje-rodzinne/img20.jpg';
import img21 from './images/portfolio/sesje-rodzinne/img21.jpg';
import img22 from './images/portfolio/sesje-rodzinne/img22.jpg';
import img23 from './images/portfolio/sesje-rodzinne/img23.jpg';
import img24 from './images/portfolio/sesje-rodzinne/img24.jpg';
import img25 from './images/portfolio/sesje-rodzinne/img25.jpg';
import Footerelement from './Footerelement';


const Rodzinne = () => {
    
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
        },
        {id: 21,
            imageUrl: img21},
        {id: 22,
            imageUrl: img22},
        {id: 23,
            imageUrl: img23},
        {id: 24,
            imageUrl: img24},
        {id: 25,
            imageUrl: img25},
        
            
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
        <Menu />
         <div className={lightbox ? "gallery-open": "gallery-close"}  >
            <img src={image[index]}/>
            <div className='exit' onClick={() => hideGallery(lightbox)}> <FontAwesomeIcon icon={ faTimesCircle }/> </div>
            <div className='left-arrow' onClick={() =>  leftSlide(index)} >  <FontAwesomeIcon icon={ faArrowLeft }/> </div>
            <div className='right-arrow' onClick={() => rightSlide(index)}>  <FontAwesomeIcon icon={ faArrowRight  }/> </div>
        </div>
        <div className='gallery-portfolio'>
        {imageList.map((singlePhoto) => {
            return (
                <div className={"pic"} onClick={() => showGallery(singlePhoto.id -1)}>
                    <img src={singlePhoto.imageUrl}/>
                </div>
            )
        })}
        </div>
        <Footerelement />
        </>
    )
}


export default Rodzinne; 