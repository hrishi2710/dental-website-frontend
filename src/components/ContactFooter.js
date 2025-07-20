import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const leftMenu = ["Home", "About", "Testimonials", "Contact Us"];
const rightMenu = ["Blog", "Payments", "Privacy Policy"];

const socialLinks = [
  { icon: faFacebookF, label: 'Facebook', href: '#' },
  { icon: faInstagram, label: 'Instagram', href: '#' },
  { icon: faLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: faWhatsapp, label: 'WhatsApp', href: '#' },
];

const ContactFooter = () => (
  <footer className="w-full bg-[#f8f1ee] py-8 px-2">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
      {/* Left: Logo and Socials */}
      <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-6 md:mb-0">
        <img src={Logo} alt="Logo" className="h-20 w-auto mb-4" />
        <div className="flex flex-row space-x-4 mt-2">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
              <span className="bg-[#a2501c] hover:bg-[#7c3f18] text-white rounded-full w-8 h-8 flex items-center justify-center text-base transition-colors">
                <FontAwesomeIcon icon={s.icon} />
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* Right: Menu */}
      <div className="flex flex-row justify-center w-full md:w-2/3 gap-12">
        <ul className="flex flex-col space-y-4 text-[#222] text-lg font-light">
          {leftMenu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="flex flex-col space-y-4 text-[#222] text-lg font-light">
          {rightMenu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default ContactFooter; 