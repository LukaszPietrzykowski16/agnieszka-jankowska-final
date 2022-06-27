import React, { useState, useEffect, useCallback}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';

import { faArrowLeft, faXRay, faArrowRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import img1 from './images/portfolio/chrzest-sw-reportaz/img1.jpg';
import img2 from './images/portfolio/chrzest-sw-reportaz/img2.jpg';
import img3 from './images/portfolio/chrzest-sw-reportaz/img3.jpg';
import img4 from './images/portfolio/chrzest-sw-reportaz/img4.jpg';
import img5 from './images/portfolio/chrzest-sw-reportaz/img5.jpg';
import img6 from './images/portfolio/chrzest-sw-reportaz/img6.jpg';
import img7 from './images/portfolio/chrzest-sw-reportaz/img7.jpg';
import img8 from './images/portfolio/chrzest-sw-reportaz/img8.jpg';
import img9 from './images/portfolio/chrzest-sw-reportaz/img9.jpg';
import img10 from './images/portfolio/chrzest-sw-reportaz/img10.jpg';

import img11 from './images/portfolio/chrzest-sw-reportaz/img11.jpg';
import img12 from './images/portfolio/chrzest-sw-reportaz/img12.jpg';
import img13 from './images/portfolio/chrzest-sw-reportaz/img13.jpg';
import img14 from './images/portfolio/chrzest-sw-reportaz/img14.jpg';
import img15 from './images/portfolio/chrzest-sw-reportaz/img15.jpg';
import img16 from './images/portfolio/chrzest-sw-reportaz/img16.jpg';
import img17 from './images/portfolio/chrzest-sw-reportaz/img17.jpg';
import img18 from './images/portfolio/chrzest-sw-reportaz/img18.jpg';
import img19 from './images/portfolio/chrzest-sw-reportaz/img19.jpg';
import img20 from './images/portfolio/chrzest-sw-reportaz/img20.jpg';
import img21 from './images/portfolio/chrzest-sw-reportaz/img21.jpg';
import img22 from './images/portfolio/chrzest-sw-reportaz/img22.jpg';
import img23 from './images/portfolio/chrzest-sw-reportaz/img23.jpg';
import img24 from './images/portfolio/chrzest-sw-reportaz/img24.jpg';
import img25 from './images/portfolio/chrzest-sw-reportaz/img25.jpg';
import img26 from './images/portfolio/chrzest-sw-reportaz/img26.jpg';
import img27 from './images/portfolio/chrzest-sw-reportaz/img27.jpg';
import img28 from './images/portfolio/chrzest-sw-reportaz/img28.jpg';
import img29 from './images/portfolio/chrzest-sw-reportaz/img29.jpg';
import img30 from './images/portfolio/chrzest-sw-reportaz/img30.jpg';
import img31 from './images/portfolio/chrzest-sw-reportaz/img31.jpg';
import img32 from './images/portfolio/chrzest-sw-reportaz/img32.jpg';
import img33 from './images/portfolio/chrzest-sw-reportaz/img33.jpg';
import img34 from './images/portfolio/chrzest-sw-reportaz/img34.jpg';
import img35 from './images/portfolio/chrzest-sw-reportaz/img35.jpg';
import img36 from './images/portfolio/chrzest-sw-reportaz/img36.jpg';
import img37 from './images/portfolio/chrzest-sw-reportaz/img37.jpg';
import img38 from './images/portfolio/chrzest-sw-reportaz/img38.jpg';
import img39 from './images/portfolio/chrzest-sw-reportaz/img39.jpg';
import img40 from './images/portfolio/chrzest-sw-reportaz/img40.jpg';
import img41 from './images/portfolio/chrzest-sw-reportaz/img41.jpg';
import img42 from './images/portfolio/chrzest-sw-reportaz/img42.jpg';
import img43 from './images/portfolio/chrzest-sw-reportaz/img43.jpg';
import img44 from './images/portfolio/chrzest-sw-reportaz/img44.jpg';
import img45 from './images/portfolio/chrzest-sw-reportaz/img45.jpg';
import img46 from './images/portfolio/chrzest-sw-reportaz/img46.jpg';
import img47 from './images/portfolio/chrzest-sw-reportaz/img47.jpg';
import img48 from './images/portfolio/chrzest-sw-reportaz/img48.jpg';
import img49 from './images/portfolio/chrzest-sw-reportaz/img49.jpg';
import img50 from './images/portfolio/chrzest-sw-reportaz/img50.jpg';

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
        {id: 26,
            imageUrl: img26},
        {id: 27,
            imageUrl: img27}, 
        {id: 28,
            imageUrl: img28 
        },
        {id: 29,
            imageUrl: img29 
        },
        {id: 30,
            imageUrl: img30 
        }, 
        {id: 31,
            imageUrl: img31},
        {id: 32,
            imageUrl: img32},
        {id: 33,
            imageUrl: img33},
        {id: 34,
            imageUrl: img34},
        {id: 35,
            imageUrl: img35},
        {id: 36,
            imageUrl: img36},
        {id: 37,
            imageUrl: img37}, 
        {id: 38,
            imageUrl: img38 
        },
        {id: 39,
            imageUrl: img39 
        },
        {id: 40,
            imageUrl: img40 
        },
        {id: 41,
            imageUrl: img41},
        {id: 42,
            imageUrl: img42},
        {id: 43,
            imageUrl: img43},
        {id: 44,
            imageUrl: img44},
        {id: 45,
            imageUrl: img45},
        {id: 46,
            imageUrl: img46},
        {id: 47,
            imageUrl: img47}, 
        {id: 48,
            imageUrl: img48 
        },
        {id: 49,
            imageUrl: img49 
        },
        {id: 50,
            imageUrl: img50 
        },
        
            
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
    
    let [index, setValue] = useState();
    
    
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