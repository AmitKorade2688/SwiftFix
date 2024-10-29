import React from 'react';

const Cartt = ({ cart, removeFromCart }) => {
  // Calculate total amount
  const totalAmount = cart.reduce((total, service) => total + service.price * service.quantity, 0);

  return (
    <div className="cart mt-24 p-4">
      <div className="cart-items">
        <div className="grid grid-cols-6 gap-4 items-center text-gray-600 text-sm">
          <p>Service</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="my-4" />

        {/* List cart items dynamically */}
        {cart.length === 0 ? (
          <div className="flex justify-center items-center mt-10">
            <h2 className="text-2xl text-gray-600">Cart is empty!</h2>
          </div>
        ) : (
          cart.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-6 gap-4 items-center my-4 text-black">
                <p>{item.subserviceName}</p> {/* Service name */}
                <p>₹{item.price}</p> {/* Price */}
                <p>{item.quantity}</p> {/* Quantity */}
                <p>₹{item.price * item.quantity}</p> {/* Total */}
                <p 
                  className="cursor-pointer text-red-500"
                  onClick={() => removeFromCart(item)}
                >
                  x
                </p>
              </div>
              <hr className="my-4" />
            </div>
          ))
        )}
      </div>

      {/* Cart totals */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 mt-20">
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Cart Totals</h2>
          <div>
            <div className="flex justify-between my-4 text-gray-600">
              <p>Subtotal</p>
              <p>₹{totalAmount}</p>
            </div>
            <hr />
            <div className="flex justify-between my-4 text-gray-600">
              <p>Delivery Fee</p>
              <p>₹2</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <b>Total</b>
              <b>₹{totalAmount + 2}</b>
            </div>
          </div>
          <button className="bg-red-500 text-white w-full lg:w-1/3 py-3 mt-4 rounded-lg">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo code input */}
        <div className="flex-1">
          <p className="text-gray-600">If you have a promo code, enter it here</p>
          <div className="flex justify-between items-center mt-4 bg-gray-100 p-2 rounded-lg">
            <input type="text" placeholder="promo code" className="bg-transparent outline-none border-none pl-2 w-full" />
            <button className="bg-black text-white py-3 px-5 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartt;
