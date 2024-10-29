import { useState } from 'react';
import axios from 'axios';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (service) => {
    const existingService = cart.find(item => item.subserviceName === service.subserviceName);
    if (existingService) {
      setCart(cart.map(item =>
        item.subserviceName === service.subserviceName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
  };

  const removeFromCart = (service) => {
    const existingService = cart.find(item => item.subserviceName === service.subserviceName);
    if (existingService) {
      if (existingService.quantity > 1) {
        setCart(cart.map(item =>
          item.subserviceName === service.subserviceName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ));
      } else {
        setCart(cart.filter(item => item.subserviceName !== service.subserviceName));
      }
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const placeOrder = async (userId, userName) => {
    const cartItems = cart.map(item => ({
      subserviceName: item.subserviceName,
      price: item.price,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post('http://localhost:8080/api/orders', {
        userId,
        userName,
        cartItems,
      });
      console.log(response.data); // Check for success message
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    toggleCart,
    placeOrder, // Include placeOrder in return
  };
};

export default useCart;
