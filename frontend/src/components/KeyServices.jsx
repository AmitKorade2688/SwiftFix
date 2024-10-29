import React from 'react';
import { newServices } from '../constants/index.jsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: 'rgba(173, 216, 230, 1)',
        borderRadius: '50%',
        padding: '10px',
        position: 'absolute',
        top: '50%',
        right: '0px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        color: 'black',
        fontSize: '30px',
        fontWeight: 'bolder'
      }}
    >
      &rarr; {/* Right Arrow Symbol */}
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: 'rgba(173, 216, 230, 1)',
        borderRadius: '50%',
        padding: '10px',
        position: 'absolute',
        top: '50%',
        left: '0px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        color: 'black',
        fontSize: '30px',
        fontWeight: 'bolder'
      }}
    >
      &larr; {/* Left Arrow Symbol */}
    </div>
  );
};

const KeyServices = ({ addToCart }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  const { t } = useTranslation();
  const bgStyle = {
    color: 'var(--dark-color-two)',
    background: 'linear-gradient(135deg, #e0f7ff, #ffffff)', // Lighter background for better contrast
  };

  return (
    <div className="key-services-slider container mx-auto py-8 min-w-full min-h-[120vh] flex flex-col justify-evenly" style={bgStyle}>
      <h2 className="text-center text-4xl mb-6  text-[#001F3F] font-bold tracking-wider">{t("What's New!")}</h2>
      <Slider {...settings} className="relative z-20">
      {newServices.map((item, index) => (
                <div key={index} className="key-services p-3 text-center">
                    <div
                        className="key-service-item shadow-lg rounded-md p-6 mx-auto transition-transform duration-300 hover:shadow-4xl flex flex-col justify-between h-96 w-72"
                        style={{
                            borderRadius: '12px',
                            background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                        }}
                    >
                        <p className="text-[24px] font-bold mb-1 text-sky-600 overflow-hidden">{t(item.serviceName)}</p>
                        <img src={item.image} alt={t(item.h3)} className="w-full h-40 object-cover mb-3 rounded-lg shadow-md" />
                        <p className="text-lg font-semibold mb-2 text-left">{t("Rating")}: {item.rating}</p>
                        <p className="text-base text-justify text-gray-700">₹{item.price}</p>
                        <div className="flex justify-start items-center">
                            <button
                                onClick={() => {
                                    const itemWithDetails = {
                                        ...item,
                                        subserviceName: item.serviceName,
                                    };
                                    addToCart(itemWithDetails);
                                }}
                                className="py-1 w-36 rounded-md transition cursor-pointer text-white bg-sky-600 hover:shadow-lg"
                            >
                                {t("Book Now!")}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
      </Slider>
    </div>
  );
}

export default KeyServices;
