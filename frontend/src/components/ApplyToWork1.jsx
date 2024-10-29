import React, { useState } from 'react';
import { reasonsToChoose } from '../constants';
import '../index.css';

const ApplyToWork1 = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    surname: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    referralCode: '',
    pccFile: null, // New field for PCC file
    profession: '' // New field for profession
  });

  const [errors, setErrors] = useState({}); // State to hold validation errors

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'pccFile') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Assuming 10-digit phone number

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.surname) newErrors.surname = "Surname is required.";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.profession) newErrors.profession = "Profession is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format. Should be 10 digits.";
    }
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.pccFile) newErrors.pccFile = "Police Clearance Certificate is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Only proceed if form is valid

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:8081/apply', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        navigateTo('ApplyToWork2');
      } else {
        const data = await response.json();
        alert(data.message || 'Error submitting application.');
      }
    } catch (error) {
      alert('Error submitting application.');
    }
  };

  return (
    <div className='min-w-full min-h-[200vh] flex flex-col justify-between items-center relative space-y-10 py-10'>
      <div className="w-[80%] text-center bg-gray-100 p-8 rounded-lg shadow-md mb-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Why Join SwiftFix?</h1>
        <p className="text-lg text-gray-700">
          At SwiftFix, we empower professionals like you by providing flexible work opportunities, competitive pay, and the ability to work on your own terms. Join our growing network and be part of a team that values quality service and professionalism!
        </p>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-[80%]">
        <h2 className='text-3xl font-bold mb-6'>Apply Now</h2>
        <form className='space-y-4' onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Existing form fields */}
          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" className='p-2 rounded-lg border border-gray-300' required />
            {errors.firstName && <span className="text-red-600">{errors.firstName}</span>}
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Middle Name</label>
            <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Enter your middle name" className='p-2 rounded-lg border border-gray-300' />
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Surname</label>
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Enter your surname" className='p-2 rounded-lg border border-gray-300' required />
            {errors.surname && <span className="text-red-600">{errors.surname}</span>}
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Date of Birth</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className='p-2 rounded-lg border border-gray-300' required />
            {errors.dateOfBirth && <span className="text-red-600">{errors.dateOfBirth}</span>}
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className='p-2 rounded-lg border border-gray-300' required>
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span className="text-red-600">{errors.gender}</span>}
          </div>

          {/* New Profession Field */}
          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Profession</label>
            <select name="profession" value={formData.profession} onChange={handleChange} className='p-2 rounded-lg border border-gray-300' required>
              <option value="" disabled>Select your profession</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Electrical">Electrical</option>
              <option value="Cleaning services">Cleaning services</option>
              <option value="Painting">Painting</option>
              <option value="Appliance repair">Appliance repair</option>
              <option value="AC Services">AC Services</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Landscaping">Landscaping</option>
              <option value="Roofing">Roofing</option>
            </select>
            {errors.profession && <span className="text-red-600">{errors.profession}</span>}
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className='p-2 rounded-lg border border-gray-300' required />
            {errors.email && <span className="text-red-600">{errors.email}</span>}
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Phone Number</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" className='p-2 rounded-lg border border-gray-300' required />
            {errors.phoneNumber && <span className="text-red-600">{errors.phoneNumber}</span>}
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" className='p-2 rounded-lg border border-gray-300' required />
            {errors.address && <span className="text-red-600">{errors.address}</span>}
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Referral Code (Optional)</label>
            <input type="text" name="referralCode" value={formData.referralCode} onChange={handleChange} placeholder="Enter your referral code" className='p-2 rounded-lg border border-gray-300' />
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Police Clearance Certificate (PCC)</label>
            <input type="file" name="pccFile" onChange={handleChange} className='p-2 rounded-lg border border-gray-300' required />
            {errors.pccFile && <span className="text-red-600">{errors.pccFile}</span>}
          </div>

          <div className="flex justify-center">
               <button type="submit" className="flex justify-center font-medium my-5 px-7 py-1 rounded transition duration-300 ease-in-out bg-[#001F3F] text-white hover:bg-orange-500 hover:text-black transform hover:scale-105">
                  Submit
              </button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyToWork1;
