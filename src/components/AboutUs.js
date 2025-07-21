const aboutImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
];

const AboutUs = () => (
  <section className="w-full bg-white py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
    {/* Left: 2x2 grid of images */}
    <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full md:w-1/2 max-w-lg">
      {aboutImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`about-${idx}`}
          className="object-cover w-full h-40 md:h-48 rounded-lg shadow"
        />
      ))}
    </div>
    {/* Right: Text content */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-xl">
      <h3 className="text-[#8a461f] text-xl font-bold mb-2">About us</h3>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#410d0d] mb-6 leading-tight">Meet High standards of<br/>dentistry</h2>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to Muskurahat Dental Studio! We care for our patients and provide personalized, complete dental services that meet your individual needs.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Our motto is "Every Muskurahat Matters".
      </p>
      <button className="bg-[#b97a56] hover:bg-[#a05f3c] text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition-colors">Learn More</button>
    </div>
  </section>
);

export default AboutUs; 