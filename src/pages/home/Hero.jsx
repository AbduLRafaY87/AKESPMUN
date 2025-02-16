import React, { useState, useEffect } from 'react';
import carouselImageOne from '../../assets/carousel/carouselImage1.png';
import carouselImageTwo from '../../assets/carousel/carouselImage2.png';
import carouselImageThree from '../../assets/carousel/carouselImage3.png';
import carouselImageFour from '../../assets/carousel/carouselImage4.png';
import carouselImageFive from '../../assets/carousel/carouselImage5.png';

const images = [carouselImageOne, carouselImageTwo, carouselImageThree, carouselImageFour, carouselImageFive];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto slide effect
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="default-carousel" className="relative w-full">
            <div className="relative h-56 md:h-[75vh] overflow-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        alt={`Carousel Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 gap-2 rtl:space-x-reverse">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-black'}`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            {/* Previous Button */}
            <button
                type="button"
                className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 bg-black text-white rounded-full cursor-pointer"
                onClick={prevSlide}
            >
                &#10094;
            </button>

            {/* Next Button */}
            <button
                type="button"
                className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 bg-black text-white rounded-full cursor-pointer"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </div>
    );
};

export default Hero;
