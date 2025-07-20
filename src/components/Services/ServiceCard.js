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
      className={`flex flex-col items-center cursor-pointer transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      onClick={onClick}
    >
      <div className="w-80 h-80 rounded-2xl border-2 border-[#995023] overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={label}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4 px-6 py-3 rounded-2xl border-2 border-[#995023] bg-white -translate-y-6 shadow text-center w-80">
        <span className="text-xl font-semibold text-gray-900">{label}</span>
      </div>
    </div>
  );
};

export default ServiceCard; 