import { useState, useEffect } from 'react';
import SmileImage from '../assets/HomePage/Caraousel/Smile_L.jpg';
import LogoImage from '../assets/HomePage/Caraousel/Logo_L_Bright.jpg';
import TeethImage from '../assets/HomePage/Caraousel/Teeth.jpg';

const images = [
  SmileImage,
  LogoImage,
  TeethImage,
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [current]);

  const goToPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  const goToNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden h-64 md:h-[32rem]">
      {images.map((img, idx) => {
        let position = idx === current ? 'translate-x-0 z-10' : idx < current ? '-translate-x-full z-0' : 'translate-x-full z-0';
        // For wrap-around
        if (current === 0 && idx === images.length - 1 && direction === -1) position = '-translate-x-full z-0';
        if (current === images.length - 1 && idx === 0 && direction === 1) position = 'translate-x-full z-0';
        return (
          <img
            key={idx}
            src={img}
            alt={`carousel-${idx}`}
            className={`absolute top-0 left-0 w-full h-64 md:h-[32rem] object-cover transition-transform duration-700 ease-in-out ${position}`}
            style={{transitionProperty: 'transform'}}
          />
        );
      })}
      {/* Left arrow */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full p-2 shadow-md z-10"
        onClick={goToPrev}
        aria-label="Previous"
      >
        &#8592;
      </button>
      {/* Right arrow */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full p-2 shadow-md z-10"
        onClick={goToNext}
        aria-label="Next"
      >
        &#8594;
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-cyan-600' : 'bg-white border border-cyan-600'}`}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 