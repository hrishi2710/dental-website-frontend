const AboutImagesGrid = ({ images }) => (
  <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full md:w-1/2 max-w-lg">
    {images.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`about-${idx}`}
        className="object-cover w-full h-40 md:h-48 rounded-lg shadow"
      />
    ))}
  </div>
);

export default AboutImagesGrid; 