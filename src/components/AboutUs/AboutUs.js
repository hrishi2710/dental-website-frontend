import AboutImagesGrid from './AboutImagesGrid';
import AboutText from './AboutText';

const aboutImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
];

const AboutUs = () => (
  <section className="w-full bg-white py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
    <AboutImagesGrid images={aboutImages} />
    <AboutText />
  </section>
);

export default AboutUs; 