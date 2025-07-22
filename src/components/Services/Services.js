import ServiceCard from './ServiceCard.js';
import services from './ServiceUtils.js';
import { useNavigate } from 'react-router-dom';

const toUrl = (label) =>
  label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-12 mb-8">
      <h2 className="text-3xl font-bold text-[#7c3f18] mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center w-full max-w-7xl">
        {services.map((service) => (
          <ServiceCard
            key={service.label}
            image={service.image}
            label={service.label}
            onClick={() => navigate(`/services/${toUrl(service.label)}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services; 