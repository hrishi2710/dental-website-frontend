import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => (
  <div className="hidden md:flex flex-col items-end flex-1">
    <div className="flex items-center space-x-6 text-sm text-black">
      <span className="flex items-center gap-1">
        <FontAwesomeIcon icon={faPhone} className="text-cyan-500" />
        +91-9731869915
      </span>
      <span className="flex items-center gap-1">
        <FontAwesomeIcon icon={faEnvelope} className="text-cyan-500" />
        muskurahatdentalstudio@gmail.com
      </span>
    </div>
  </div>
);

export default ContactInfo; 