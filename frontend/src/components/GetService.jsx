// GetService.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { serviceDescription } from '../constants/index.jsx';
import './GetService.css';
import { useNavigate } from 'react-router-dom';

const GetService = ({ addToCart }) => {
  const { selectedService } = useParams();
  const [subServices, setSubServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const filteredSubServices = serviceDescription.filter((service) => {
      return service.serviceName.toLowerCase() === selectedService.toLowerCase();
    });
    setSubServices(filteredSubServices);
  }, [selectedService]);

  return (
    <div className="container">
      <button
        className="bg-white text-center w-48 rounded-2xl h-14 relative text-[#001F3F]text-xl font-semibold group"
        type="button"
        onClick={() => navigate('/mainpage2')} // Navigate to Mainpage1 on button click
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
      <h1>Get {selectedService} Services</h1>
      {subServices.length > 0 ? (
        <div className="services-container">
          {subServices.map((service) => (
            <div className="service-card" key={service.subserviceName}>
              <img src={service.image} alt={service.subserviceName} className="service-image" />
              <h3 className="service-title">{service.subserviceName}</h3>
              <p className="service-rating">
                Rating: {service.rating} | Users: {service.users}
              </p>
              <p className="service-price">Price: ₹{service.price}</p>
              <button onClick={() => addToCart(service)} className="book-button">
                Book Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No sub-services found for {selectedService}.</p>
      )}
    </div>
  );
};

export default GetService;