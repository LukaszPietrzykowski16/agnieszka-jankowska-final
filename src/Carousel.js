import { useState, useEffect } from 'react';
import img1 from './images/Fizjoterapia-5.jpg';
import img2 from './images/Fizjoterapia-8.jpg';
import img3 from './images/Fizjoterapia-9.jpg';
import img4 from './images/Fizjoterapia-16.jpg';
import img5 from './images/Fizjoterapia-20.jpg';


// there will be carousel element
function Carousel() {
    const [images, setImages] = useState([img1, img2, img3, img4, img5])
    const [text, setText] = useState(['text1', 'text2', 'text3', 'text4', 'text5'])
    const [index, setIndex] = useState(0)
   
    if (index === images.length) {
        setIndex(0)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // in setInterval we must do something like this
          setIndex(index => index + 1)
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    return (
    <>
    


    <div className="carousel">
        <div className="carousel-img">
            <img src={images[index]}/>
        </div>
        <div className="carousel-txt">
            {text[index]}
        </div>
    </div>

    </>
    )
}

export default Carousel;