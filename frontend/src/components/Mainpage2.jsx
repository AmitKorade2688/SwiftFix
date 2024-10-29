import React from 'react';
import Slider from 'react-slick';
import { servicesOffered } from '../constants/index.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import KeyServices from './KeyServices';
import { useTranslation } from "react-i18next";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      aria-label="Next Slide"
      style={{
        backgroundColor: 'rgba(173, 216, 230, 1)',
        borderRadius: '50%',
        padding: '10px',
        position: 'absolute',
        top: '55%',
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
      &rarr;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      aria-label="Previous Slide"
      style={{
        backgroundColor: 'rgba(173, 216, 230, 1)',
        borderRadius: '50%',
        padding: '10px',
        position: 'absolute',
        top: '55%',
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
      &larr;
    </div>
  );
};

const Mainpage2 = ({ setActiveService, addToCart }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const navigate = useNavigate();
  const { t } = useTranslation();

  const bgStyle = {
    color: 'var(--dark-color-two)',
    background: 'linear-gradient(135deg, #e0f7ff, #ffffff)', // Same background as KeyServices
  };

  return (
    <div
      className="services-slider container mx-auto py-8 min-h-[120vh] min-w-full outline-none border-none relative flex flex-col justify-evenly"
      style={bgStyle}
    >
      <div className="relative flex justify-center items-center h-full w-full z-20">
        <h2
          className="text-4xl mb-6 font-bold tracking-wider"
          style={{
            color: '#001F3F',
            margin: '25px',
            display: 'inline-block',
          }}
        >
          {t("Services We Offer")}
        </h2>
      </div>

      <Slider {...settings} className="relative z-20">
      {servicesOffered.map((item, index) => (
                <div
                    key={index}
                    className="services p-3 text-center"
                    onClick={() => {
                        setActiveService(item.serviceName);
                        navigate(`/get-service/${item.serviceName}`);
                    }}
                >
                    <div
                        className="service-item rounded-md p-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-96 w-72 shadow-lg border border-gray-200 relative cursor-pointer"
                        style={{
                            borderRadius: '12px',
                            background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                            zIndex: 20 
                        }}
                    >
                        <h2 className="text-2xl font-bold mb-1 text-[#001F3F]">{t(item.serviceName)}</h2>
                        <img src={item.image} alt={t(item.h3)} className="w-full h-32 object-cover mb-3 rounded-lg shadow-md" />
                        <h3 className="text-lg font-semibold mb-2 text-center">{t(item.h3)}</h3>
                        <p className="text-base text-gray-600 mb-2">{t(item.p)}</p>
                    </div>
                </div>
            ))}
      </Slider>

      {/* Render KeyServices and pass addToCart to it */}
      <KeyServices addToCart={addToCart} />
    </div>
  );
};

export default Mainpage2;
