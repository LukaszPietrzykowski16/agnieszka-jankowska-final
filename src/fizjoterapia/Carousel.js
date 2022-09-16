import { useState, useEffect } from 'react';
import img1 from '../images/Fizjoterapia-5.jpg';
import img2 from '../images/Fizjoterapia-8.jpg';
import img3 from '../images/Fizjoterapia-9.jpg';
import img4 from '../images/Fizjoterapia-16.jpg';
import img5 from '../images/Fizjoterapia-20.jpg';


// there will be carousel element
function Carousel() {
    const [images, setImages] = useState([img1, img2, img3, img4, img5])
    const [index, setIndex] = useState(0)
   
    if (index === images.length) {
        setIndex(0)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // in setInterval we must do something like this
          setIndex(index => index + 1)
        }, 7000);
        return () => clearInterval(interval);
      }, []);

    return (
    <>
    


    <div className="carousel">
        <div className="carousel-img">
            <img src={images[index]}/>
        </div>


        <div className='dots'>
            <div className={index === 0 ? 'dot pink' : 'dot'} onClick={() => setIndex(0)}>

            </div>
            <div className={index === 1 ? 'dot pink' : 'dot'} onClick={() => setIndex(1)}>
                
            </div>
            <div className={index === 2 ? 'dot pink' : 'dot'} onClick={() => setIndex(2)}>
                
            </div>
            <div className={index === 3 ? 'dot pink' : 'dot'} onClick={() => setIndex(3)}>
                
            </div>
            <div className={index === 4 ? 'dot pink' : 'dot'} onClick={() => setIndex(4)}>
                
            </div>
        </div>
        
    </div>

    </>
    )
}

export default Carousel;