import React from "react";
import { useNavigate } from "react-router-dom";
import { plans } from "../constants";
import { useTranslation } from 'react-i18next';
const SubscriptionPlans = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-evenly items-center w-full min-h-screen bg-white py-8 md:py-10">
      <h1 className="text-3xl md:text-[40px] font-bold mb-6 text-[#001F3F] drop-shadow-xl">
        {t('Subscription Plans')}
      </h1>

      {/* New Text Section */}
      <div className="text-center max-w-2xl md:max-w-3xl mb-6 md:mb-8 px-4">
        <p className="text-base md:text-[19px] text-gray-600">
          {t('Choose the plan that best suits your needs. Whether you are just starting out or looking for more advanced features, we have got a plan for you.')}
        </p>
        <p className="mt-2 text-sm md:text-base italic text-blue-500">
          {t('Flexible options to help you achieve your goals effortlessly.')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg bg-gray-100 shadow-md px-6 py-4 w-full max-w-xs transition-colors duration-300 ease-in-out 
      hover:bg-gray-800 hover:text-white cursor-pointer`}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">{t(plan.title)}</h3>
                <p className="text-2xl md:text-3xl font-bold mb-2">{t(plan.price)}</p>
                <p className="italic mb-4">{t(plan.description)}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="material-icons text-blue-500 mr-2">
                        <i className="fa-solid fa-circle-check"></i>
                      </span>
                      <p className="text-sm md:text-base">{t(feature)}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-2 px-4 mt-auto ${plan.isPremium ? "bg-blue-600" : "bg-blue-500"} 
        text-white rounded-lg font-semibold hover:bg-blue-700`}
                onClick={() => navigate("/payment")}
              >
                {t("Get Started")}
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default SubscriptionPlans;