import React from 'react';

const ApplyToWork3 = ({ navigateTo }) => {
  // bg-gray-100 p-8 rounded-lg shadow-md w-[80%]
  return (
<div className="min-h-screen flex justify-center items-center bg-gray-200">
  <div className="w-[80%] bg-gray-100 p-8 rounded-lg shadow-md">
    {/* Preferred Work Locations */}
    <div className="w-full mb-6">
      <label htmlFor="preferred-locations" className="block text-lg font-semibold mb-2">
        Preferred Work Locations:
      </label>
      <select
        id="preferred-locations"
        className="block w-full border border-gray-300 rounded-md p-2"
      >
        <option value="">Select location</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Pune">Pune</option>
        <option value="Chennai">Chennai</option>
        {/* Add more options as needed */}
      </select>
    </div>

    {/* Referral Code */}
    <div className="w-full mb-6">
      <label htmlFor="referral-code" className="block text-lg font-semibold mb-2">
        Referral Code (If any):
      </label>
      <input
        type="text"
        id="referral-code"
        className="block w-full border border-gray-300 rounded-md p-2"
        placeholder="Enter referral code"
      />
    </div>

    {/* Why Do You Want to Join SwiftFix */}
    <div className="w-full mb-6">
      <label htmlFor="motivation" className="block text-lg font-semibold mb-2">
        Why Do You Want to Join SwiftFix? (Optional):
      </label>
      <textarea
        id="motivation"
        className="block w-full border border-gray-300 rounded-md p-2 h-28"
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
        className="block w-full border border-gray-300 rounded-md p-2"
      />
    </div>

    {/* References */}
    <div className="w-full mb-6">
      <label className="block text-lg font-semibold mb-2">References:</label>

      <div className="mb-4">
        <label htmlFor="reference-name" className="block text-sm font-medium">
          Name:
        </label>
        <input
          type="text"
          id="reference-name"
          className="block w-full border border-gray-300 rounded-md p-2"
          placeholder="Reference Name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="reference-contact" className="block text-sm font-medium">
          Contact Info:
        </label>
        <input
          type="text"
          id="reference-contact"
          className="block w-full border border-gray-300 rounded-md p-2"
          placeholder="Phone or Email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="reference-relationship" className="block text-sm font-medium">
          Relationship:
        </label>
        <input
          type="text"
          id="reference-relationship"
          className="block w-full border border-gray-300 rounded-md p-2"
          placeholder="Relationship to Reference"
        />
      </div>
    </div>

    {/* Agreement to Terms & Conditions */}
    <div className="w-full mb-6">
      <label className="flex items-center">
        <input type="checkbox" required className="mr-2" />
        I agree to the <a href="/terms" className="text-blue-500 underline">Terms & Conditions</a> and the <a href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</a>.
      </label>
    </div>

    {/* Buttons */}
    <div className="flex justify-center mt-6">
      <button
        onClick={() => navigateTo('ApplyToWork2')}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
      >
        Back
      </button>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ml-5"
        onClick={() => navigateTo('ApplyToWork4')}
      >
        Proceed
      </button>
    </div>
  </div>
</div>

  );
};

export default ApplyToWork3;
