import React from 'react';
import Introduction from './Introduction';
import WhatSection from './WhatSection';
import HowDoesItHelp from './HowDoesItHelp';

const ServicePage = () => {
  return (
    <>
      <Introduction
        subheading="Implants"
        heading="Get The Best Dental Implants in Mumbai"
        description={`Don’t wait to get the dental implants you need and deserve—get them now with the best care offered at India's top clinic in Mumbai. Say goodbye to awkwardness and discomfort due to teeth that are out-of-shape and say hello to optimal beauty with permanent dental implants. Enjoy comfort, convenience, reliability, affordability, and outstanding results when getting The Best Dental Implants. So don't delay—book an appointment today and start your journey toward a healthy smile!`}
        image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
      />
      <WhatSection
        heading="What is bone grafting?"
        description={`Oftentimes, in the case of periodontal disease, dental infections or traumatic injuries, bone and soft tissue may atrophy in areas around the diseased teeth as a result. This process of bone loss is accelerated when teeth are missing, and nothing is done to replace the stimulation that a tooth root provides. When the quality and quantity of bone is inadequate for the placement of dental implants, the deteriorated bone must be replaced.`}
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      />
      <HowDoesItHelp
        heading="How does it help?"
        description={"Due to the development of advanced techniques over the years, we now have the ability to grow bone where it is needed, enabling us to replace missing teeth with dental implants, even for patients with significant bone loss."}
        image="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
      />
    </>
  );
};

export default ServicePage; 