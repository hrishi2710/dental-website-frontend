const AboutImagesGrid = ({ images }) => (
  <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full md:w-1/2 max-w-lg h-[420px] md:h-[500px]">
    {/* Two tall images on the left */}
    <img
      src={images[0]}
      alt="about-0"
      className="row-span-2 col-span-1 object-cover w-full h-full rounded-lg shadow"
      style={{ gridRow: '1 / span 2', gridColumn: '1 / 2' }}
    />
    <img
      src={images[2]}
      alt="about-2"
      className="row-span-2 col-span-1 object-cover w-full h-full rounded-lg shadow"
      style={{ gridRow: '1 / span 2', gridColumn: '2 / 3' }}
    />
    {/* Two stacked images on the right */}
    <img
      src={images[1]}
      alt="about-1"
      className="row-span-1 col-span-1 object-cover w-full h-full rounded-lg shadow"
      style={{ gridRow: '1 / 2', gridColumn: '3 / 4' }}
    />
    <img
      src={images[3]}
      alt="about-3"
      className="row-span-1 col-span-1 object-cover w-full h-full rounded-lg shadow"
      style={{ gridRow: '2 / 3', gridColumn: '3 / 4' }}
    />
  </div>
);

export default AboutImagesGrid; 