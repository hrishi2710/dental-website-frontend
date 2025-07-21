import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => (
  <div className="hidden md:flex flex-col items-end flex-1">
    <div className="flex items-center space-x-6 text-sm text-black">
      <span className="flex items-center gap-1 text-black">
        <span className="bg-[#a2501c] hover:bg-[#7c3f18] text-white rounded-full w-6 h-6 flex items-center justify-center transition-colors">
          <FontAwesomeIcon icon={faPhone} className="text-base" />
        </span>
        +91-9731869915
      </span>
      <a
        href="mailto:muskurahatdentalstudio@gmail.com"
        className="flex items-center gap-1 hover:underline text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bg-[#a2501c] hover:bg-[#7c3f18] text-white rounded-full w-6 h-6 flex items-center justify-center transition-colors">
          <FontAwesomeIcon icon={faEnvelope} className="text-base" />
        </span>
        muskurahatdentalstudio@gmail.com
      </a>
    </div>
  </div>
);

export default ContactInfo; 