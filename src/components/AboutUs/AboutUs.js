import React from 'react';
import AboutUsHeader from './AboutUsHeader';
import AboutUsMotto from './AboutUsMotto';
import chairImg from '../../assets/AboutUs/Chair.jpg';
import receptionImg from '../../assets/AboutUs/Reception.jpg';
import workingBackImg from '../../assets/AboutUs/Working_back.jpg';
import workingFrontImg from '../../assets/AboutUs/Working_Front.jpg';

const storyContent = [
  { text: 'At Muskurahat Dental Studio, we help you celebrate the joy of a happy, healthy smile.' },
  { text: 'We started our practice with the goal of reimagining the dental experience. ', bold: false },
  { text: 'We believe going to the dentist should be positive and empowering for the whole family, and we’re doing our part to make that the new reality.', bold: true },
  { text: 'Our office provides cutting-edge techniques, an experienced team, and a whole lot of time spent making sure you feel comfortable.' },
  { text: 'It’s everything you need from a dentist, plus a little extra.' },
];
const images = [chairImg, receptionImg, workingBackImg, workingFrontImg];

const AboutUs = () => (
  <div>
    <AboutUsHeader />
    <AboutUsMotto heading="our story" content={storyContent} images={images} />
  </div>
);

export default AboutUs; 