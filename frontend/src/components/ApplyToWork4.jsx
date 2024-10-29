import React from 'react'

const ApplyToWork4 = ({navigateTo}) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[80%] p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6">Background Check Application</h2>

        <p className="text-sm mb-4 text-gray-600">
          As a home service provider, it is crucial to undergo a background verification process for safety and legal compliance. Please upload the required documents and provide consent to proceed.
        </p>

        {/* Aadhaar Card Upload */}
        <div className="mb-6">
          <label htmlFor="aadhar-card" className="block text-lg font-semibold mb-2">
            Upload Aadhaar Card:
          </label>
          <input
            type="file"
            id="aadhar-card"
            accept=".pdf,.doc,.docx"
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Police Clearance Certificate Upload */}
        <div className="mb-6">
          <label htmlFor="police-clearance-certificate" className="block text-lg font-semibold mb-2">
            Upload Police Clearance Certificate:
          </label>
          <input
            type="file"
            id="police-clearance-certificate"
            accept=".pdf,.doc,.docx"
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* PAN Card Upload */}
        <div className="mb-6">
          <label htmlFor="pan-card" className="block text-lg font-semibold mb-2">
            Upload PAN Card:
          </label>
          <input
            type="file"
            id="pan-card"
            accept=".pdf,.doc,.docx"
            className="block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              required
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">
              I consent to the background verification check, including identity, criminal records, and employment history.
            </span>
          </label>
        </div>

        {/* Disclaimer */}
        <div className="text-sm text-gray-600 mb-4">
          Your information will be kept confidential and will only be used for employment purposes. By submitting this form, you agree to SwiftFix's terms of service and privacy policy.
        </div>

        {/* Submit Button */}
        {/* Buttons */}
        <div className='flex justify-center mt-6'>
          <button
            onClick={() => navigateTo('ApplyToWork3')}
            className='bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300'
          >
            Back
          </button>
          <button
            type="submit"
            className='bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ml-5'
            onClick={() => navigateTo('ApplyToWork4')}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>

  );
}

export default ApplyToWork4;

