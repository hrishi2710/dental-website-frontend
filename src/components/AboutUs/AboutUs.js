import AboutImagesGrid from './AboutImagesGrid';
import AboutText from './AboutText';
import Chair from '../../assets/AboutUs/Chair.jpg';
import Reception from '../../assets/AboutUs/Reception.jpg';
import WorkingBack from '../../assets/AboutUs/Working_back.jpg';
import WorkingFront from '../../assets/AboutUs/Working_Front.jpg';

const aboutImages = [Chair, Reception, WorkingBack, WorkingFront];

const AboutUs = () => (
  <section className="w-full bg-white py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
    <AboutImagesGrid images={aboutImages} />
    <AboutText />
  </section>
);

export default AboutUs; 