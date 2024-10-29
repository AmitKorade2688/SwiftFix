import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState(''); // New address field
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in from localStorage on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
      setUsername(localStorage.getItem('username') || '');
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!username.trim()) {
      alert('Username is required.');
      return;
    }

    if (!password) {
      alert('Password is required.');
      return;
    }

    if (!isLogin) {
      if (!confirmPassword) {
        alert('Please confirm your password.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      if (!phoneNumber.trim()) {
        alert('Phone number is required.');
        return;
      }

      // Simple phone number validation (adjust regex as needed)
      const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
      if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number.');
        return;
      }

      if (!address.trim()) {
        alert('Address is required.');
        return;
      }
    }

    const endpoint = isLogin ? 'http://localhost:8081/login' : 'http://localhost:8081/signup';

    const userData = {
      username,
      password,
      ...(isLogin ? {} : { confirmPassword, phoneNumber, address }), // Include address in sign-up
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        if (isLogin) {
          alert('Login successful!');
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', username);
        } else {
          alert('Sign-up successful! Please login.');
          setIsLogin(true);
        }
      } else {
        alert(result.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Server error! Please try again later.');
    }
  };

  // Handle logout and clear localStorage
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    alert('You have been logged out.');
  };

  // Handle close button click and navigate back to home page
  const handleClose = () => {
    window.location.href = '/'; // Redirect to home page
  };

  if (isLoggedIn) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
            aria-label="Close"
          >
            &#x2715;
          </button>
          <h2 className="text-3xl font-bold mb-6">Welcome, {username}!</h2>
          <p className="text-lg text-gray-700">You are now logged in.</p>
          <button
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
          aria-label="Close"
        >
          &#x2715;
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
