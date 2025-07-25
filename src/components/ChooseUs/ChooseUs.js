import { faTooth, faMoneyBillWave, faUserMd } from '@fortawesome/free-solid-svg-icons';
import bgImage from '../../assets/ChooseUs/dentalCare.jpg';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: faTooth,
    title: 'Complete Dental Care',
    desc: 'We provide complete dental care, from routine check-ups to advanced treatments, with experienced dentists and state-of-the-art technology for a comfortable and efficient experience.'
  },
  {
    icon: faMoneyBillWave,
    title: 'Affordable Pricing',
    desc: 'Affordable pricing and flexible payment options are what we aim for, so you can receive exceptional dental care without financial stress.'
  },
  {
    icon: faUserMd,
    title: 'Experienced Doctors',
    desc: 'Our experienced senior doctors ensure that your dental experience is nothing short of outstanding.'
  }
];

const ChooseUs = () => (
  <section
    className="relative w-full min-h-[600px] flex items-center justify-center py-16 px-4"
    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#7c3f18]/90" />
    {/* Content */}
    <div className="relative z-10 max-w-3xl mx-auto text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-white">Why Choose Us</h2>
      <h3 className="text-xl md:text-2xl font-light mb-6 text-white text-center">Best & Most Advanced Dental Clinic in Vasai that You Can Trust</h3>
      <p className="mb-8 text-center text-white max-w-2xl">
        We are the premier choice for all your dental needs. Trust us to help you achieve a healthy and beautiful smile.
      </p>
      <div className="w-full flex flex-col gap-8">
        {features.map((f) => (
          <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </div>
    </div>
  </section>
);

export default ChooseUs; 