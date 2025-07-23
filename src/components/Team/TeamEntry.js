import React from 'react';
import Team from './Team';

// Example images (replace with actual image imports or URLs)
import img1 from '../../assets/AboutUs/Doc.jpg';

const teamMembers = [
  {
    name: 'Dr. Manorama Vijay Singh',
    title: 'Exprience 7+ years',
    details:
      'Prosthodontist & Implantologist\nMDS in Prosthodontics (Mangalore).\nBDS (Belgavai)',
    image: img1,
  },
//   {
//     name: 'Dr. Komal Majumdar',
//     title: 'BDS (GDC, Mumbai)',
//     details:
//       'PG (Cert) Endodontics (IGNOU)\nMaster of Oral Implantology (MOI) (Atlanta, USA)\nClinical Mastership in Oral Implantology (State university of New York at Stony Brook School of Dental Medicine)',
//     image: img2,
//   },
//   {
//     name: 'Dr. Usha Dadlani',
//     title: 'BDS, Chief Aesthetic Dentistry expert.',
//     details:
//       'Famdent Aesthetic Dentist of the year 2022.\nIndian Academy of Aesthetic and Cosmetic Dentistry Accredited Member.\nFellow of Indian Society of Implantologists.',
//     image: img3,
//   },
//   {
//     name: 'Dr. Amruta Pednekar',
//     title: 'BDS, Chief Root Canal Expert.',
//     details:
//       'Fellow of Indian Society of Implantologists.\nMini residency in advanced Implantology and Implant prosthodontics.\nClinical Mastership in aesthetic dentistry.',
//     image: img4,
//   },
];

const TeamEntry = () => {
  // You can slice the array to test with 1, 2, 3, or 4 members
  return <Team members={teamMembers} />;
};

export default TeamEntry; 