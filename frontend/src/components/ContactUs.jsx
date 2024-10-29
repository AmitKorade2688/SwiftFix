// import React, { useState } from "react";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here (e.g., send data to backend or API)
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//           Contact Us
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//               required
//             ></textarea>
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//         <div className="mt-8 text-center text-gray-600">
//           <p>Or reach us at:</p>
//           <p>Email: support@swiftfix.com</p>
//           <p>Phone: +1 (123) 456-7890</p>
//           <p>Address: 123 SwiftFix Street, City, Country</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState, useEffect } from 'react';
import { assests } from '../constants';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center bg-opacity-70" style={{ backgroundImage: `url(${assests.carpantry})` }}>
        <div className="w-full h-full bg-black opacity-80 absolute"></div>
        <div className={`relative z-10 text-center mt-48 transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-gray-300 mt-2 text-lg">If you have any questions or need assistance, <br /> our team of experienced healthcare professionals is here to help.</p>
        </div>
      </div>

      <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full max-w-5xl flex flex-col md:flex-row mt-72 z-10">
        <div className="w-full md:w-1/2">
          <img src={assests.electrician} alt="Contact Us" className="object-cover w-full h-full" />
        </div>
        <div className={`w-full md:w-1/2 p-10 flex flex-col justify-center transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <form className="space-y-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Your Name</label>
              <input type="text" placeholder="Enter your first name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Your Email</label>
              <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea placeholder="Write your message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200" rows="4"></textarea>
            </div>
            <button type="submit" className="w-26 h-13 bg-teal-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-orange-600 hover:scale-105">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

