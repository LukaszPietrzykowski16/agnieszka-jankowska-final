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

    const imagesListRef = ref(projectStorage, "plenerowe_sesje_slubne/");
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
            });
        });
        });
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




  return (
    <>
      <Menu />
      {image.map((url) => {
        return <img src={url}/>;
      })}
        <Footerelement />
    </>
  );
    
}


export default Reportaz; 