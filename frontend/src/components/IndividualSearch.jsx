import { reasonsToChoose, servicesOffered } from '../constants';
import React, { useState, useEffect, useRef } from 'react';
import homeservices from '../assets/apply-to-work-1.png';
import { useNavigate } from 'react-router-dom';
import ServiceProviders from './ServiceProviders';
import { useTranslation } from 'react-i18next';
const IndividualSearch = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Initialize search term
  const [activeService, setActiveService] = useState(''); // State for the active service
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For fade-in effect
  const searchRef = useRef(null); // Reference for search input
  const fadeInSectionRef = useRef(null); // Reference for fade-in section
  const navigate = useNavigate(); // Using navigate from react-router-dom
  const { t } = useTranslation();
  // Handle input change for search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  // Handle service selection
  const handleSearchSubmit = (serviceName) => {
    setActiveService(serviceName); // Set selected service as active
    setSearchTerm(serviceName); // Update search term with selected service
    setShowSuggestions(false); // Hide suggestions
  };

  // Filter services based on search term
  const filteredServices = servicesOffered.filter((service) =>
    service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle clicks outside the search input
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false); // Hide suggestions when clicking outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  // Function to navigate to ApplyToWork1
  const goToApplyToWork = () => {
    navigate('/apply-to-work1'); // Use navigate to go to ApplyToWork1 page
  };

  // Intersection observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (fadeInSectionRef.current) {
      observer.observe(fadeInSectionRef.current);
    }

    return () => {
      if (fadeInSectionRef.current) {
        observer.unobserve(fadeInSectionRef.current);
      }
    };
  }, []);

  // Styles
  const cardStyle = {
    color: 'var(--dark-color-two)',
    background: 'linear-gradient(135deg, #e0f7ff, #ffffff)',
  };

  return (
    <div>
      <div className='w-full min-h-[150vh] flex justify-evenly items-center flex-col' style={cardStyle}>
        <h1 className='text-4xl text-[#001F3F] font-bold tracking-wide mt-0'>{t('Why to Choose SwiftFix?')}</h1>

        {/* Reason Section */}
        <div className="reason flex justify-evenly items-center rounded-lg bg-sky-500 max-w-[80%] min-h-[25%]">
          {reasonsToChoose.map((item, index) => (
            <div key={index} className="text-base text-white flex items-center min-w-[30%] py-2 px-2">
              <a href="#" className="text-4xl pl-2 hover:scale-110">{item.a}</a>
              <h3 className="px-3">{t(`reasonsToChoose.${index}`)}</h3>
            </div>
          ))}

        </div>

        {/* Image Section */}
        <div
          ref={fadeInSectionRef}
          className={`relative flex flex-col items-center justify-evenly mt-3 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative w-[75vw] h-[75vh] rounded-lg overflow-hidden">
            <img
              src={homeservices}
              alt="Home Services"
              className='w-full h-full object-cover opacity-90'
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>

          {/* Main Heading */}
          <h1 className='absolute left-[10%] top-[15%] text-[white] text-4xl font-extrabold tracking-wider drop-shadow-xl hover:scale-110 ease-in-out'>
            {t('Be the SwiftFix Expert Everyone Trusts!')}
          </h1>

          {/* Bullet Points */}
          <div className='absolute left-[10%] top-[35%] text-white text-xl font-semibold flex flex-col justify-evenly h-[50%] space-y-3'>
            <p>{t('✔ Earn top rates for your skills and expertise in home services.')}</p>
            <p>{t('✔ Balance your work and personal life with our adaptable schedules.')}</p>
            <p>{t('✔ Join a company that values respect, honesty, and professionalism.')}</p>
            <p>{t('✔ Consistent job availability ensures financial stability.')}</p>
          </div>
        </div>

        <div className='flex'>
          <p className='text-sky-900 font-medium text-lg'>{t('Want to be a SwiftStar?')}</p>
          <button
            className="flex justify-center underline text-lg font-medium ml-5 bg-transparent text-green-600 hover:text-sky-400 transition duration-150 ease-in-out"
            onClick={goToApplyToWork} // Call the function to navigate to ApplyToWork1
          >
            {t('Apply for work')}
          </button>
        </div>
      </div>
      <ServiceProviders />
    </div>
  );
};

export default IndividualSearch;
