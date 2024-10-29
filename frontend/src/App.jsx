import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainpage1 from './components/Mainpage1';
import Mainpage2 from './components/Mainpage2';
import SubServices from './components/SubServices';
import IndividualSearch from './components/IndividualSearch.jsx';
import ApplyToWork1 from './components/ApplyToWork1.jsx';
import ApplyToWork2 from './components/ApplyToWork2.jsx';
import ApplyToWork3 from './components/ApplyToWork3.jsx';
import ApplyToWork4 from './components/ApplyToWork4.jsx';
import LiveChat from './components/LiveChat.jsx';
import Footer from './components/Footer.jsx';
import Cart from './pages/Cart.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import ContactUs from './components/ContactUs.jsx';
import PaymentPage from './components/PaymentPage.jsx';
import SubscriptionPlans from './components/SubscriptionPlans.jsx';
import useCart from './constants/useCart.js';
import GetService from './components/GetService.jsx';
import './i18n'; // Ensure this is included

const App = () => {
  const { cart, addToCart, removeFromCart, promoCode, setPromoCode, applyPromoCode, discount } = useCart();
  const [activeService, setActiveService] = useState(null);
  const [location, setLocation] = useState('');

  return (
    <Router>
      <Navbar setLocation={setLocation} />
      <Routes>
        <Route path="/" element={<Mainpage1 />} /> {/* Navigate to Mainpage1 when root path is accessed */}
        <Route path="/get-service/:selectedService" element={<GetService addToCart={addToCart} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/mainpage2" element={<Mainpage2 setActiveService={setActiveService} addToCart={addToCart} />} />
        <Route path="/about-us" element={<IndividualSearch />} />
        <Route path="/subscription" element={<SubscriptionPlans />} />
        <Route path="/apply-to-work1" element={<ApplyToWork1 navigateTo={() => {}} />} />
        <Route path="/apply-to-work2" element={<ApplyToWork2 navigateTo={() => {}} />} />
        <Route path="/apply-to-work3" element={<ApplyToWork3 navigateTo={() => {}} />} />
        <Route path="/apply-to-work4" element={<ApplyToWork4 navigateTo={() => {}} />} />
        <Route path="/live-chat" element={<LiveChat navigateTo={() => {}} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
