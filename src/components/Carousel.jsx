import { useState } from 'react';
import '../css/Carousel.css';

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="arrow" onClick={prevSlide}>{'<'}</button>
            <div className="slide-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={index === currentSlide ? 'slide active' : 'slide'}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="arrow" onClick={nextSlide}>{'>'}</button>
        </div>
    );
};

export default Carousel;
