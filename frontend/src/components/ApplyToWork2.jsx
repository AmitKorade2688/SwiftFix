import React from 'react';
import ApplyToWork1 from './ApplyToWork1';

const ApplyToWork2 = ({ goToApplyToWork1,navigateTo }) => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-50'>
        <form className='bg-gray-100 p-8 rounded-lg shadow-md w-[80%]'>
          <h2 className="text-xl font-semibold mb-4 text-center">Professional Information</h2>
      
          {/* Skills/Expertise */}
          <div className='mb-4'>
            <label htmlFor="skills" className='block font-medium mb-2'>Skills/Expertise</label>
            <select
              id="skills"
              multiple
              className='w-full p-2 border rounded-md focus:border-blue-600 focus:shadow-lg transition-all duration-300'
            >
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Painting">Painting</option>
              <option value="AC Services">AC Services</option>
            </select>
          </div>
      
          {/* Experience */}
          <div className='mb-4'>
            <label htmlFor="experience" className='block font-medium mb-2'>Years of Experience</label>
            <input
              type="number"
              id="experience"
              className='w-full p-2 border rounded-md focus:border-blue-600 focus:shadow-lg transition-all duration-300'
              placeholder="Enter years of experience"
            />
          </div>
      
          {/* Certifications */}
          <div className='mb-4'>
            <label htmlFor="certifications" className='block font-medium mb-2'>Certifications</label>
            <input
              type="text"
              id="certifications"
              className='w-full p-2 border rounded-md focus:border-blue-600 focus:shadow-lg transition-all duration-300'
              placeholder="Enter certifications"
            />
          </div>
      
          {/* Availability */}
          <div className='mb-4'>
            <label htmlFor="availability" className='block font-medium mb-2'>Availability</label>
            <select
              id="availability"
              className='w-full p-2 border rounded-md focus:border-blue-600 focus:shadow-lg transition-all duration-300'
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Specific Days/Hours">Specific Days/Hours</option>
            </select>
          </div>
      
          {/* Previous Employment */}
          <div className='mb-4'>
            <label htmlFor="company" className='block font-medium mb-2'>Previous Employment</label>
            <input
              type="text"
              id="company"
              className='w-full p-2 border rounded-md focus:border-blue-600 focus:shadow-lg transition-all duration-300 mb-2'
              placeholder="Company name"
            />
            <input
              type="text"
              id="duration"
              className='w-full p-2 border rounded-md focus:border-blue-600 focus:shadow-lg transition-all duration-300'
              placeholder="Duration of employment"
            />
          </div>
      
          {/* Portfolio/Work Samples */}
          <div className='mb-4'>
            <label htmlFor="portfolio" className='block font-medium mb-2'>Portfolio/Work Samples</label>
            <input
              type="file"
              id="portfolio"
              className='w-full p-2 border rounded-md focus:border-blue-600 focus:shadow-lg transition-all duration-300'
            />
          </div>
      
          {/* Preferred Work Locations */}
          <div className="w-full mb-6">
            <label htmlFor="preferred-locations" className="block text-lg font-semibold mb-2">
              Preferred Work Locations:
            </label>
            <select
              id="preferred-locations"
              className="block w-full border border-gray-300 rounded-md p-2 focus:border-blue-600 focus:shadow-lg transition-all duration-300"
            >
              <option value="">Select location</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Pune">Pune</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
      
          {/* Why Do You Want to Join SwiftFix */}
          <div className="w-full mb-6">
            <label htmlFor="motivation" className="block text-lg font-semibold mb-2">
              Why Do You Want to Join SwiftFix? (Optional):
            </label>
            <textarea
              id="motivation"
              className="block w-full border border-gray-300 rounded-md p-2 h-28 focus:border-blue-600 focus:shadow-lg transition-all duration-300"
              placeholder="Tell us why you'd like to work with SwiftFix"
            ></textarea>
          </div>
      
          {/* Upload Resume */}
          <div className="w-full mb-6">
            <label htmlFor="resume" className="block text-lg font-semibold mb-2">
              Upload Resume:
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              className="block w-full border border-gray-300 rounded-md p-2 focus:border-blue-600 focus:shadow-lg transition-all duration-300"
            />
          </div>
      
          {/* Buttons */}
          <div className='flex justify-center mt-6'>
            <button
              onClick={() => navigateTo('ApplyToWork1')}
              className='bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300'
            >
              Back
            </button>
            <button
              type="submit"
              className='bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ml-5'
              onClick={() => navigateTo('ApplyToWork3')}
            >
              Proceed 
            </button>
          </div>
        </form>
      </div>
      
    );
}

export default ApplyToWork2;
