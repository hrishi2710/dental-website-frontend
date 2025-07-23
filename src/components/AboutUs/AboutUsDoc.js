import React, { useRef, useEffect, useState } from 'react';

const AboutUsDoc = ({ image, heading, content }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState('down');
  const lastY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY > lastY.current ? 'down' : 'up');
      lastY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const base = 'w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 my-16 px-2 md:px-6 transition-all duration-700 ease-out';
  const anim = visible
    ? ' opacity-100 translate-y-0'
    : direction === 'down'
      ? ' opacity-0 translate-y-16'
      : ' opacity-0 -translate-y-16';

  return (
    <div
      ref={ref}
      className={base + anim}
    >
      {/* Left: Circular Image */}
      <div className="flex-shrink-0 flex items-center justify-center mb-8 md:mb-0 md:mr-12 md:-ml-24">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white bg-white flex items-center justify-center transition-all duration-300">
          <img src={image} alt="Doctor" className="object-cover w-full h-full" />
        </div>
      </div>
      {/* Right: Heading and Content */}
      <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#7c3f18] mb-1 flex items-end gap-2">
            <span className="font-light">Meet</span>
            <span className="font-extrabold whitespace-nowrap">{heading}</span>
          </h2>
          <div className="w-16 h-1 bg-[#b97a56] rounded mb-6" />
        <p className="text-lg md:text-xl text-gray-800 mb-2 whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};

export default AboutUsDoc; 