import React, { useRef } from 'react';

const Cases = ({ heading, cases }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#e3f1f3] py-16 px-4 md:px-16">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold text-[#225c63]">{heading}</h2>
        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="bg-yellow-200 rounded-full p-3 shadow hover:bg-yellow-300 transition">
            <span className="text-2xl">&#8592;</span>
          </button>
          <button onClick={() => scroll('right')} className="bg-yellow-200 rounded-full p-3 shadow hover:bg-yellow-300 transition">
            <span className="text-2xl">&#8594;</span>
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
        {cases.map((item, idx) => (
          <div key={idx} className="min-w-[320px] max-w-xs bg-white rounded-xl shadow flex flex-col items-center p-0" style={{height: '420px'}}>
            <img src={item.image} alt={item.title} className="w-full" style={{height: '230px', objectFit: 'cover', borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem'}} />
            <span className="uppercase text-[#225c63] font-semibold tracking-widest mb-2 mt-6">{item.category}</span>
            <h3 className="text-xl font-bold text-[#225c63] mb-2 text-center">{item.title}</h3>
            <span className="text-[#225c63] font-semibold cursor-pointer flex items-center gap-2 hover:underline">Read More <span className="text-xl">&#8594;</span></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cases; 