import img1 from './images/Fizjoterapia-5.jpg';


// there will be carousel element
function Carousel() {
    return (
    <>
    
    <div className="carousel">
        <div className="carousel-img">
            <img src={img1}/>
        </div>
        <div className="carousel-txt">
            some text 
        </div>
    </div>

    </>
    )
}

export default Carousel;