// Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LiveChat from './LiveChat';
import Mainpage2 from './Mainpage2';
import KeyServices from './KeyServices';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Mainpage2 />
      <KeyServices />
      <LiveChat />
      <Footer />
    </>
  );
};

export default Layout;
