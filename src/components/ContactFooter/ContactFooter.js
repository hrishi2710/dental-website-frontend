import Logo from '../../assets/logo.png';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SocialIcons from './SocialIcons';
import FooterMenu from './FooterMenu';

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
        <SocialIcons socialLinks={socialLinks} />
      </div>
      {/* Right: Menu */}
      <FooterMenu leftMenu={leftMenu} rightMenu={rightMenu} />
    </div>
  </footer>
);

export default ContactFooter; 