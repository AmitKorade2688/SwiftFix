import React from 'react';
import { assests } from '../constants/index.jsx';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const footerStyle = {
    background: 'rgba(0, 31, 63, 0.90)', // --dark-color-one:#36494E; 
    color: '#ffffff'
  };

  return (
    <div className="footer py-10 md:py-16 px-6 md:px-8" style={footerStyle}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Footer Left Section */}
        <div className="footer-content-left space-y-6">
          <img src={assests.logo} alt="logo" className="w-24 md:w-32 hover:scale-105 transition-transform duration-300" />
          <p className="text-sm md:text-md leading-6">
            {t('SwiftFix is your go-to home service provider, connecting you with reliable professionals for all your home maintenance needs. Our mission is to simplify your life by offering top-notch services at your convenience.')}
          </p>
          
          {/* Social Icons */}
          <div className="footer-social-icons flex space-x-4">
            <img src={assests.facebook_icon} alt="Facebook" className="w-6 md:w-8 h-6 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-300" />
            <img src={assests.twitter_icon} alt="Twitter" className="w-6 md:w-8 h-6 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-300" />
            <img src={assests.linkedin_icon} alt="LinkedIn" className="w-6 md:w-8 h-6 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Footer Center Section - Company Links */}
        <div className="footer-content-center">
          <h2 className="text-lg md:text-xl font-bold mb-4">{t('COMPANY')}</h2>
          <ul className="space-y-2 font-semibold">
            <li className="hover:text-sky-400 cursor-pointer transition-colors duration-300">{t('Home')}</li>
            <li className="hover:text-sky-400 cursor-pointer transition-colors duration-300">{t('About Us')}</li>
            <li className="hover:text-sky-400 cursor-pointer transition-colors duration-300">{t('Privacy Policy')}</li>
            <li className="hover:text-sky-400 cursor-pointer transition-colors duration-300">{t('Delivery')}</li>
          </ul>
        </div>

        {/* Footer Right Section - Get In Touch */}
        <div className="footer-content-right">
          <h2 className="text-lg md:text-xl font-bold mb-4">{t('GET IN TOUCH')}</h2>
          <ul className="space-y-2">
            <li className="text-sm md:text-md font-semibold">{t('+91 9967351242')}</li>
            <li className="text-sm md:text-md font-semibold">{t('contact@swiftfix.com')}</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="my-8 border-gray-600" />
      <div className="text-center">
        <p className="text-sm md:text-md font-semibold">&copy; {t('2024 SwiftFix.com - All Rights Reserved.')}</p>
      </div>
    </div>
  );
};

export default Footer;
