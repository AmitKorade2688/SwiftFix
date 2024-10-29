// import React from 'react';

// const Cart = ({ cart, removeFromCart }) => {
//   // Calculate total amount
//   const totalAmount = cart.reduce((total, service) => total + service.price * service.quantity, 0);

//   return (
//     <div className="cart mt-10">
//       <h1 className="flex justify-center text-3xl tracking-wider font-semibold text-cyan-200">Your Cart</h1>
      
//       {cart.length === 0 ? (
//         <div className="flex justify-center items-center mt-10">
//           <h2 className="text-2xl text-gray-600">Cart is empty!</h2>
//         </div>
//       ) : (
//         <>
//           <div className="cart-items mt-5">
//             <div className="cart-items-title flex justify-evenly font-medium text-lg text-slate-50">
//               <p>Service</p>
//               <p>Price</p>
//               <p>Quantity</p>
//               <p>Total</p>
//               <p>Remove</p>
//             </div>
//             <hr className="my-4" />

//             {/* List cart items */}
//             {cart.map((item, index) => (
//               <div key={index} className="cart-item flex justify-evenly items-center py-3">
//                 <p>{item.subserviceName}</p>
//                 <p>${item.price}</p>
//                 <p>{item.quantity}</p>
//                 <p>${item.price * item.quantity}</p>
//                 <button 
//                   className="text-red-500 hover:text-red-700"
//                   onClick={() => removeFromCart(item)} // Remove service from cart
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             {/* Display total amount */}
//             <div className="flex justify-end mt-5 text-lg font-bold text-slate-50">
//               <p>Total Amount: ${totalAmount}</p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

// Cart.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalAmount * (1 - discount);

  const applyPromoCode = () => {
    if (promoCode === 'NAVRATRI#20' || 'DIWALI#20') {
      setDiscount(0.20);
    } else {
      alert('Invalid promo code');
      setDiscount(0);
    }
  };

  const proceedToCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white shadow-lg z-50 p-4 overflow-y-auto">
      <div className="w-full bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        <button className="text-sky-500 mb-2" onClick={() => navigate(-1)}>Close</button>

        {cart.length === 0 ? (
          <div className="flex justify-center items-center mt-10">
            <h2 className="text-2xl text-gray-600">Cart is empty!</h2>
          </div>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="grid grid-cols-6 gap-4 items-center my-4 text-black">
              <p>{item.serviceName}</p>
              <p>₹{item.price}</p>
              <p>{item.quantity}</p>
              <p>₹{(item.price * item.quantity).toFixed(2)}</p>
              <p className="cursor-pointer text-red-600" onClick={() => removeFromCart(item)}>x</p>
            </div>
          ))
        )}

        <div className="flex flex-col lg:flex-row justify-between gap-12 mt-20">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Cart Totals</h2>
            <div>
              <div className="flex justify-between my-4 text-gray-600">
                <p>Total</p>
                <p>₹{totalAmount.toFixed(2)}</p>
              </div>
              {discount > 0 && (
                <>
                  <div className="flex justify-between my-4 text-green-600">
                    <p>Discount (20%)</p>
                    <p>-₹{(totalAmount * 0.20).toFixed(2)}</p>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold text-black">
                    <p>Discounted Total</p>
                    <p>₹{discountedPrice.toFixed(2)}</p>
                  </div>
                </>
              )}
              <hr />
            </div>
            <button
              className="bg-sky-600 text-white w-full lg:w-1/3 py-3 mt-4 rounded-lg"
              onClick={proceedToCheckout}
            >
              Proceed to Payment
            </button>
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-semibold">Apply Promo Code</h2>
            <div className="flex mt-4">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg flex-1"
                placeholder="Enter promo code"
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2"
                onClick={applyPromoCode}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
