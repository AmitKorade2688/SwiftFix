import { assests } from '../constants'; // Importing assets
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { servicesOffered } from '../constants';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'; // Import your language switcher
import mainPageBg1 from '../assets/main-page-bg-1.jpg';
import { AiOutlineMessage } from 'react-icons/ai'; // Import chatbot icon from react-icons

const Mainpage1 = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState(''); // Initialize search term
  const [activeService, setActiveService] = useState(''); // State for the active service
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false); // State to control chatbot visibility
  const [fadeIn, setFadeIn] = useState(false); // State to control fade-in effect

  const searchRef = useRef(null);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true); // Show suggestions when typing
  };

  const handleSearchSubmit = (serviceName) => {
    setActiveService(serviceName); // Pass the selected service to Mainpage2
    setSearchTerm(serviceName); // Update input with the selected service
    setShowSuggestions(false); // Hide suggestions after selecting
  };

  const filteredServices = servicesOffered.filter((service) =>
    service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false); // Hide the suggestions if clicked outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  // Navigate to the desired page after selecting a service
  const navigate = useNavigate();
  const handleBookService = () => {
    if (activeService) {
      navigate(`/get-service/${activeService}`);
    } else {
      alert('Please select a service');
    }
  };
  
  const bgstyle = {
    backgroundImage: `url(${mainPageBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    backgroundAttachment: 'fixed', // Added for parallax effect
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true); // Set fade-in effect after a delay
    }, 1000); // Delay of 1 second before showing text and navbar

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center relative overflow-x-hidden' style={bgstyle}>
  {/* Black Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 1,
    }}
  />

  {/* Content goes on top */}
  <div className='relative z-10'>
    <div className={`inline-block mx-auto transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <h1
        className='text-white mt-20 font-bold tracking-wider text-3xl overflow-hidden border-r border-sky-500 whitespace-nowrap'
        style={{
          animation: 'typing 4s steps(40, end), blink-caret 0.75s step-end',
        }}
      >
        {t('Fixing Swift, Serving Smart – SwiftFix, Your Home’s Best Friend')}
      </h1>
    </div>

    {/* Video Assets Row */}
    <div className='flex justify-center rounded-lg mt-10 gap-4 mb-8 w-full overflow-auto p-4'>
      {/* Video assets */}
      {['electricianmp4', 'pestcontrolmp4', 'roofengmp4', 'laptoprepairmp4', 'cleeningmp4', 'peintingmp4'].map((video, index) => (
        <div key={index} className='flex-shrink-0 w-40 hover:scale-110 transition-transform duration-300'>
          <video src={assests[video]} autoPlay loop muted className='w-full rounded-lg shadow-xl'></video>
        </div>
      ))}
    </div>

    {/* Search Bar and Book Service Button */}
    <div className='flex flex-row items-center justify-center w-full'>
      <div className="service-search relative flex items-center max-w-lg w-full lg:w-1/2 mr-10" ref={searchRef}>
        <i className="fa-solid fa-magnifying-glass absolute left-3 text-[#001F3F] transition-transform duration-300 hover:scale-125"></i>
        <input
          type="text"
          className="py-3 pl-10 pr-6 w-full text-gray-700 border border-[#001F3F] rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none transition duration-150 ease-in-out placeholder-[#001F3F] shadow-md hover:shadow-lg"
          placeholder={t('Search for Services')}
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setShowSuggestions(true)}
        />
        {/* Suggestions List */}
        {showSuggestions && filteredServices.length > 0 && (
          <ul className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
            {filteredServices.map((service, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-[#001F3F]"
                onClick={() => handleSearchSubmit(service.serviceName)}
              >
                {service.serviceName}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={handleBookService}
        className='px-6 py-3 rounded-md transition duration-300 font-normal ease-in-out bg-orange-500 text-black hover:bg-[#001F3F] hover:text-white transform hover:scale-105'
        style={{
          '--tw-shadow': '0 0 0 4px #fff, 0 0 0 8px #4070fa',
        }}
      >
        <p>{t('Book a Service')}</p>
      </button>
    </div>
  </div>

  {/* Chatbot Icon */}
  <div className='fixed bottom-5 right-5 z-[100]'>
    <button
      className='bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 hover:scale-105 transition-transform'
      onClick={() => setShowChatbot(true)}
    >
      <AiOutlineMessage size={30} />
    </button>
  </div>

  {/* Chatbot Box */}
  {showChatbot && (
    <div className='fixed inset-0 flex items-center justify-center z-[200]'>
      <div className='bg-white rounded-lg shadow-lg p-4 relative w-[90%] max-w-md'>
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=fecac622-0d3e-49be-b5a3-453a3eeebce0"
          title="Chatbot"
          style={{ width: '100%', height: '400px', border: 'none' }}
        />
        <button
          className='absolute top-2 right-2 text-red-600'
          onClick={() => setShowChatbot(false)}
        >
          X
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default Mainpage1;
