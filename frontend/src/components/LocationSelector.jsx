import React, { useState } from 'react';

const LocationSelector = () => {
  const [location, setLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  // Fetch user's current location using Geolocation API
  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);

          // If using a third-party API (e.g., Google Maps), you can fetch the location name here
          // Example API call with Google Maps Reverse Geocoding:
          // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`)
          //   .then(response => response.json())
          //   .then(data => setCurrentLocation(data.results[0].formatted_address));
        },
        (error) => {
          alert('Unable to retrieve your location');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser');
    }
  };

  // Handle manual location input
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="location-selector">
      <h2 className="text-lg font-semibold mb-4">Select Your Location</h2>
      
      {/* Text input for manual location */}
      <div className="manual-location mb-4">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter your city (e.g., Delhi, Mumbai)"
          className="border border-gray-300 py-2 px-4 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Button to get current location */}
      <div className="current-location">
        <button
          onClick={handleGetCurrentLocation}
          className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out"
        >
          Get Current Location
        </button>
        {currentLocation && (
          <p className="mt-4 text-gray-700">
            <strong>Current Location:</strong> {currentLocation}
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationSelector;
