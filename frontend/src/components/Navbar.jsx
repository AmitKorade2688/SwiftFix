import React, { useState, useEffect, useRef } from 'react';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';
import logoy from '../assets/logoy.png';
import LanguageSwitcher from './LanguageSwitcher'; // Import the LanguageSwitcher component
import { useTranslation } from 'react-i18next';

const Navbar = ({ toggleCart, setLocation }) => {
  const [showLogin, setShowLogin] = useState(false);
  const loginRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const navbarStyle = {
    background: 'white', 
    color: 'black', 
    height: '70px',
    overflow: 'hidden', 
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const openCart = () => {
    navigate("/cart");
  };

  const handleLogoClick = () => {
    navigate("/"); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [currentLocation, setCurrentLocation] = useState('Detecting location...');
  const [latitude, setLatitude] = useState(null);  // Add latitude
  const [longitude, setLongitude] = useState(null); // Add longitude
  const [isLocationFetching, setIsLocationFetching] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          fetchLocationFromCoordinates(latitude, longitude);
        },
        () => {
          setIsLocationFetching(false);
          setCurrentLocation('Location access denied');
        }
      );
    } else {
      setIsLocationFetching(false);
      setCurrentLocation('Geolocation not supported');
    }
  }, []);

  const fetchLocationFromCoordinates = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    const data = await response.json();
    if (data && data.city) {
      setCurrentLocation(data.city);
      setLocation(data.city);
    } else {
      setCurrentLocation('Location not found');
    }
    setIsLocationFetching(false);
  };

  const openGoogleMaps = () => {
    if (latitude && longitude) {
      const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 text-black border-b overflow-x-hidden" style={navbarStyle}>
        <div className="container mx-auto flex items-center justify-between px-4 h-full">
          <div className="flex items-center">
            <img 
              className="mr-2 cursor-pointer" 
              src={logoy} 
              alt="Logo" 
              style={{ maxHeight: '80px', width: 'auto' }} 
              onClick={handleLogoClick}
            />
          </div>

          <ul className="hidden lg:flex space-x-8 items-center h-full">
            <li>
              <a
                href="#"
                className="font-medium text-lg relative group flex items-center h-full"
                onClick={() => navigate("/")} 
              >
                {t('Home')}
                <span className="absolute left-0 right-0 bottom-[-5px] h-0.5 bg-black transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-lg relative group flex items-center h-full"
                onClick={() => navigate("/mainpage2")} 
              >
                {t('Services')}
                <span className="absolute left-0 right-0 bottom-[-5px] h-0.5 bg-black transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-lg relative group flex items-center h-full"
                onClick={() => navigate("/about-us")} 
              >
                {t('Join Us')}
                <span className="absolute left-0 right-0 bottom-[-5px] h-0.5 bg-black transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-lg relative group flex items-center h-full"
                onClick={() => navigate("/subscription")} 
              >
                {t('Subscription')}
                <span className="absolute left-0 right-0 bottom-[-5px] h-0.5 bg-black transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-8">
            <div 
              className="text-light-color-two cursor-pointer" 
              style={{ color: 'black' }} 
              onClick={openGoogleMaps} // Opens Google Maps on click
            >
              {isLocationFetching ? 'Fetching location...' : currentLocation}
            </div>
            <LanguageSwitcher /> {/* Add the LanguageSwitcher here */}
            <button 
              onClick={handleLoginClick} 
              className="px-4 py-1 rounded transition duration-300 ease-in-out bg-[#001F3F] text-white hover:bg-orange-500 hover:text-black transform hover:scale-105"
            >
              <p> {t('Login')}</p>
            </button>
            <button 
              onClick={openCart} 
              className="px-4 py-1 rounded transition duration-300 ease-in-out bg-[#001F3F] text-white hover:bg-orange-500 hover:text-black transform hover:scale-105"
            >
              <p> {t('Cart')}</p>
            </button>
          </div>
        </div>
      </nav>

      {showLogin && <LoginPage ref={loginRef} closeLogin={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
