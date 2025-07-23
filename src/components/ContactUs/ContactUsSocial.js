import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const contactInfo = [
  {
    icon: faEnvelope,
    label: 'muskurahatdentalstudio@gmail.com',
    href: 'mailto:muskurahatdentalstudio@gmail.com',
    bold: false,
  },
  {
    icon: faPhone,
    label: '+91 9731869915',
    href: 'tel:9731869915',
    bold: false,
  },
  {
    icon: faMapMarkerAlt,
    label: 'BUILDING NUMBER-19, OM SAI JYOT CO-OP HSG SOCIETY LTD, SHOP NO 3, Madhuban Township, Vasai East, Vasai-Virar, Maharashtra 401208',
    href: 'https://maps.app.goo.gl/FvjVgYnZe5h1eFWv9',
    bold: false,
  },
  {
    icon: faWhatsapp,
    label: 'WhatsApp: +91 9731869915',
    href: 'https://wa.me/919731869915',
    bold: false,
  },
  {
    icon: faInstagram,
    label: 'Instagram: @smile_withmds',
    href: 'https://www.instagram.com/smile_withmds/',
    bold: false,
  },
];

// const iconCircleClass =
//   'bg-[#a2501c] text-white rounded-full w-14 h-14 flex items-center justify-center text-xl';
const iconCircleClass =
  'bg-[#a2501c] text-white rounded-full flex items-center justify-center w-14 h-14 aspect-square shadow-sm border border-gray-100';

const ContactUsSocial = () => (
  <div className="max-w-lg px-4 py-8">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let’s connect</h2>
    <p className="text-lg text-gray-700 mb-10">
      We are dedicated to enhancing and providing better oral health care. Are you?
      <br />
      Click on the any contact link below and get started.
    </p>
    <div className="space-y-8 mb-8">
      {contactInfo.map((item, idx) => (
        <div key={idx} className="flex items-center gap-6">
          {item.href ? (
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <span className={iconCircleClass + " group-hover:bg-[#7c3f18] transition-colors"}>
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="text-lg md:text-xl text-gray-900 font-bold">
                {item.label}
              </span>
            </a>
          ) : (
            <>
              <span className={iconCircleClass}>
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="text-lg md:text-xl text-gray-900 font-bold">{item.label}</span>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ContactUsSocial;
