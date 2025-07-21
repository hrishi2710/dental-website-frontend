import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex flex-row items-start gap-6">
    <span className="flex-shrink-0 bg-[#6a2d13] rounded-full w-20 h-20 flex items-center justify-center text-4xl">
      <FontAwesomeIcon icon={icon} />
    </span>
    <div>
      <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
      <p className="text-white text-base font-light">{desc}</p>
    </div>
  </div>
);

export default FeatureCard; 