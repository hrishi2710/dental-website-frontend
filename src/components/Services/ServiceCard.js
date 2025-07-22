import { useRef, useEffect, useState } from 'react';

const ServiceCard = ({ image, label, onClick }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

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

  return (
    <div
      ref={ref}
      className={`w-80 rounded-3xl shadow-xl flex flex-col items-center transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
      onClick={onClick}
      style={{ minWidth: '20rem' }}
    >
      <div className="relative w-full" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={image}
          alt={label}
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10">
          <span className="px-8 py-3 rounded-full bg-white/70 border border-white text-xl font-bold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 