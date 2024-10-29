import React, { useState } from 'react';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isPaymentComplete, setIsPaymentComplete] = useState(false); // State to show the modal

  const handlePaymentSelection = (method) => {
    setSelectedMethod(method);
  };

  // Function to handle the payment confirmation
  const handlePaymentConfirmation = () => {
    if (selectedMethod) {
      setIsPaymentComplete(true); // Show the modal when payment is complete
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsPaymentComplete(false); // Close the modal
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">
        <button onClick={closeModal} className="absolute top-2 right-2">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/multiply.png"
            alt="Close"
          />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Options</h2>

        <div className="space-y-4">
          {/* Credit/Debit Card Option */}
          <button
            onClick={() => handlePaymentSelection('card')}
            className={`w-full flex items-center p-3 border rounded-md ${
              selectedMethod === 'card' ? 'bg-blue-100 border-blue-400' : 'border-gray-300'
            }`}
          >
            <img src="https://img.icons8.com/ios/50/000000/bank-cards.png" alt="Card" className="w-8 h-8 mr-4" />
            <span className="text-lg">Credit/Debit Card</span>
          </button>

          {/* UPI Option */}
          <button
            onClick={() => handlePaymentSelection('upi')}
            className={`w-full flex items-center p-3 border rounded-md ${
              selectedMethod === 'upi' ? 'bg-blue-100 border-blue-400' : 'border-gray-300'
            }`}
          >
            <img src="https://img.icons8.com/color/48/000000/upi.png" alt="UPI" className="w-8 h-8 mr-4" />
            <span className="text-lg">UPI</span>
          </button>

          {/* Net Banking Option */}
          <button
            onClick={() => handlePaymentSelection('netbanking')}
            className={`w-full flex items-center p-3 border rounded-md ${
              selectedMethod === 'netbanking' ? 'bg-blue-100 border-blue-400' : 'border-gray-300'
            }`}
          >
            <img src="https://img.icons8.com/ios/50/000000/online-money-transfer.png" alt="Net Banking" className="w-8 h-8 mr-4" />
            <span className="text-lg">Net Banking</span>
          </button>

          {/* Wallet Option */}
          <button
            onClick={() => handlePaymentSelection('wallet')}
            className={`w-full flex items-center p-3 border rounded-md ${
              selectedMethod === 'wallet' ? 'bg-blue-100 border-blue-400' : 'border-gray-300'
            }`}
          >
            <img src="https://img.icons8.com/ios/50/000000/wallet--v1.png" alt="Wallet" className="w-8 h-8 mr-4" />
            <span className="text-lg">Wallet</span>
          </button>

          {/* Cash on Delivery Option */}
          <button
            onClick={() => handlePaymentSelection('cod')}
            className={`w-full flex items-center p-3 border rounded-md ${
              selectedMethod === 'cod' ? 'bg-blue-100 border-blue-400' : 'border-gray-300'
            }`}
          >
            <img src="https://img.icons8.com/ios/50/000000/cash-in-hand.png" alt="COD" className="w-8 h-8 mr-4" />
            <span className="text-lg">Cash on Delivery</span>
          </button>
        </div>

        {/* Payment Summary */}
        {selectedMethod && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-center">You selected: {selectedMethod}</h3>
            <button
              onClick={handlePaymentConfirmation}
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Proceed to Payment
            </button>
          </div>
        )}

        {/* Modal */}
        {isPaymentComplete && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full relative">
              <button onClick={closeModal} className="absolute top-2 right-2">
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/multiply.png"
                  alt="Close"
                />
              </button>
              <h3 className="text-xl font-bold text-center mb-4">Payment Successful!</h3>
              <p className="text-center mb-4">Your payment has been processed successfully.</p>
              <button
                onClick={closeModal}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
