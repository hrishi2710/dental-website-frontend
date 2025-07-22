import React from 'react';
import Introduction from './Introduction';
import WhatSection from './WhatSection';
import HowDoesItHelp from './HowDoesItHelp';
import Cases from './Cases';
import ServicesUtils from './IndividualServicesUtils';

const data = ServicesUtils[0];

const ServicePage = () => {
  return (
    <>
      <Introduction
        subheading={data["Introduction"]["subHeading"]}
        heading={data["Introduction"]["heading"]}
        description={data["Introduction"]["description"]}
        image={data["Introduction"]["image"]}
      />
      <WhatSection
        heading={data["WhatSection"]["heading"]}
        description={data["WhatSection"]["description"]}
        image={data["WhatSection"]["image"]}
      />
      <HowDoesItHelp
        heading={data["HowDoesItHelp"]["heading"]}
        description={data["HowDoesItHelp"]["description"]}
        image={data["HowDoesItHelp"]["image"]}
      />
      <Cases
        heading={data["Cases"]["heading"]}
        cases={data["Cases"]["casesData"]}
      />
    </>
  );
};

export default ServicePage; 