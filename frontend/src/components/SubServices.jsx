import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { serviceDescription } from '../constants';
import { ArrowLeft } from 'lucide-react'; // Importing Lucide React icon for back button

const SubServices = ({ activeService, setActiveService, addToCart }) => {
  const navigate = useNavigate(); // Initialize navigate
  // Filter subservices that match the activeService
  const filteredSubServices = serviceDescription.filter(service => service.serviceName === activeService);
   
  // Define styles
  const cardStyle = {
    color: 'var(--dark-color-two)',
    background: 'var(--light-color-one)',
  };

  const bgStyle = {
    color: 'var(--dark-color-two)', // Text color for background
    background: 'linear-gradient(135deg, #e0f7ff, #ffffff)', // Lighter background gradient
  };

  return (
    <div className="container mx-auto py-10 min-w-full" style={cardStyle}>
      <button
        className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
        type="button"
        onClick={() => navigate('/')} // Navigate to Mainpage1 on button click
      >
        <div
          className="bg-sky-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#000000"
            ></path>
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <p className="translate-x-2">Go Back</p>
      </button>

      <h2 className="text-center text-4xl font-bold mb-10 text-sky-900">
        Sub Services for {activeService}
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {/* Display filtered sub-services */}
        {filteredSubServices.length > 0 ? (
          filteredSubServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col max-w-sm w-64  shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              style={bgStyle}
            >
              <img className="w-full h-48 object-cover" src={service.image} alt={service.subserviceName} />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-semibold text-sky-600">{service.subserviceName}</h3>
                <p className="mt-2" style={{ color: 'var(--dark-color-two)' }}>
                  Price: <span className="font-bold">₹{service.price}</span>
                </p>
                <div className="mt-4">
                  <p style={{ color: 'var(--dark-color-two)' }}>
                    Rating: <span className="font-semibold">{service.rating}</span>
                  </p>
                  <p style={{ color: 'var(--dark-color-two)' }}>
                    Users: <span className="font-semibold">{service.users}</span>
                  </p>
                </div>
                <button
                  className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                  onClick={() => addToCart(service)} // Add service to cart on click
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-yellow-600 text-2xl font-bold">No sub-services available for {activeService}.</p>
        )}
      </div>
    </div>
  );
};

export default SubServices;
