// 

import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesOffered } from '../constants'; // Import services data
import { useNavigate } from 'react-router-dom';

const SearchedService = () => {
  const { serviceName } = useParams(); // Get the service name from the URL
  const service = servicesOffered.find(item => item.serviceName === serviceName); // Find the service data
  const navigate = useNavigate();
  const cardStyle = {
    color: 'var(--dark-color-two)',
    background: 'var(--light-color-one)',
  };
  const bgStyle = {
    color: 'var(--dark-color-two)',
    background: 'linear-gradient(135deg, #e0f7ff, #ffffff)', // Lighter background for better contrast
  };
  return (
<div className="min-h-screen flex items-start justify-center py-10 px-4" style={bgStyle}>
  {/* Set the card's width and height to 40% of the viewport */}
  <div className="w-[40vw] h-[80vh] rounded-lg shadow-lg p-8 flex flex-col" style={cardStyle}>
    {service ? (
      <div className="service-details flex flex-col h-full">
        <h2 className="text-center text-4xl mb-4 font-bold tracking-wider whitespace-nowrap overflow-hidden text-ellipsis" style={{ color: 'var(--dark-color-two)' }}>
          {service.serviceName}
        </h2>
        <div className="service-item text-black bg-white rounded-lg overflow-hidden shadow-md flex-grow transition duration-300 hover:shadow-2xl hover:bg-gray-100"> 
          {/* Adjust the image height to 25% of the card's height */}
          <img
            src={service.image}
            alt={service.h3}
            className="w-full h-[25vh] object-cover transition duration-300 hover:scale-105"
          />
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-3 transition duration-300 hover:text-yellow-500" style={{ color: 'var(--dark-color-two)' }}>
              {service.h3}
            </h3>
            <p className="mt-2 flex-grow transition duration-300 hover:text-stone-300" style={{ color: 'var(--dark-color-two)' }}>
              {service.p}
            </p>
          </div>
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="mt-4 font-semibold py-2 px-4 rounded transition duration-300 bg-black text-white"
        >
          Back
        </button>
      </div>
    ) : (
      <p className="text-center text-xl" style={{ color: 'var(--dark-color-two)' }}>
        Service not found
      </p>
    )}
  </div>
</div>


  );
};

export default SearchedService;
