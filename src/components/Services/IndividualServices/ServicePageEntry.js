import React from 'react';
import { useParams } from 'react-router-dom';
import ServicePage from './ServicePage';
import ServicesUtils from './IndividualServicesUtils';

const ServicePageEntry = () => {
  const { serviceLabel } = useParams();
  // Assume ServiceUtils is an object with keys as url params
  const data = ServicesUtils[serviceLabel];

  if (!data) {
    return <div className="p-8 text-center text-red-600">Service not found.</div>;
  }

  return <ServicePage data={data} />;
};

export default ServicePageEntry; 