import React, { useState, useEffect, useCallback}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';
import Menu from './Menu';
import { faArrowLeft, faXRay, faArrowRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Footerelement from './Footerelement';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { projectStorage, projectFirestore } from "./config";

const Reportaz = () => {
    const [image, setImageUrls] = useState([]);
    const [ready, setReady] = useState(false)

    // fetching data from storage in firebase
    const imagesListRef = ref(projectStorage, "plenerowe_sesje_slubne/");
    useEffect(() => {
      try {
        listAll(imagesListRef)
        .then((response) => {response.items.forEach((item) => {getDownloadURL(item)
        .then((url) => {setImageUrls((prev) => [...prev, url]);
        });
        });
        });
      } catch {
        console.log('error')
      }
     
    }, []);
    // it should be after fetching data, but data is fetched quite fast by displaying images isn't, that's why i'm using setTimeout for this time i will patch this after some tests i just wanted to make it work
    useEffect(() => {
      const timer = setTimeout(() => {
        setReady(true)
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
    const [lightbox, setLightbox] = useState(false);
    
    const showGallery = (index) => {
        setValue(index)
        console.log(index)
        setLightbox(true)
    }
    
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


      const Galleria = () => {
        return (
          image.map((url) => {
            return (
                <div className={"pic"} onClick={() => showGallery(image.length)}>
                <img src={url}/>
                </div>
            );
          })
        )
        
      }


  return (
    <>

        <div className={lightbox ? "gallery-open": "gallery-close"}  >
            <img src={image[index]}/>
            <div className='exit' onClick={() => hideGallery(lightbox)}> <FontAwesomeIcon icon={ faTimesCircle }/> </div>
            <div className='left-arrow' onClick={() =>  leftSlide(index)} >  <FontAwesomeIcon icon={ faArrowLeft }/> </div>
            <div className='right-arrow' onClick={() => rightSlide(index)}>  <FontAwesomeIcon icon={ faArrowRight  }/> </div>
        </div>

      <Menu />
      <div className='gallery-portfolio'>
      {ready === true ? Galleria() : <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      
      </div>
      <Footerelement />
    </>
  );
    
}


export default Reportaz; 