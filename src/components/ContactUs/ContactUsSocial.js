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

const ContactUsSocial = ({ small }) => {
  const iconCircleClass = small
    ? 'bg-[#a2501c] text-white rounded-full flex items-center justify-center w-10 h-10 aspect-square shadow-sm border border-gray-100 text-base'
    : 'bg-[#a2501c] text-white rounded-full flex items-center justify-center w-14 h-14 aspect-square shadow-sm border border-gray-100 text-xl';
  return (
    <div className={small ? 'max-w-xs px-2 py-4' : 'max-w-lg px-4 py-8'}>
      <h2 className={small ? 'text-2xl font-bold text-[#7c3f18] mb-2' : 'text-4xl md:text-5xl font-bold text-[#7c3f18] mb-4'}>Let’s connect</h2>
      <p className={small ? 'text-sm text-gray-700 mb-6' : 'text-lg text-gray-700 mb-10'}>
        We are dedicated to enhancing and providing better oral health care. Are you?
        <br />
        <b>Click on the any contact link below and get started.</b>
      </p>
      <div className={small ? 'space-y-4 mb-4' : 'space-y-8 mb-8'}>
        {contactInfo.map((item, idx) => (
          <div key={idx} className={small ? 'flex items-center gap-4' : 'flex items-center gap-6'}>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={small ? 'flex items-center gap-4 group' : 'flex items-center gap-6 group'}
              >
                <span className={iconCircleClass + ' group-hover:bg-[#7c3f18] transition-colors'}>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className={small ? 'text-base text-gray-900 font-bold' : 'text-lg md:text-xl text-gray-900 font-bold'}>
                  {item.label}
                </span>
              </a>
            ) : (
              <>
                <span className={iconCircleClass}>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className={small ? 'text-base text-gray-900 font-bold' : 'text-lg md:text-xl text-gray-900 font-bold'}>{item.label}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsSocial;
