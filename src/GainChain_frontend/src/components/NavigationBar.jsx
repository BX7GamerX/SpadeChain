// src/components/NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
//import './.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/tokens">Tokens</Link>
    </nav>
  );
};

export default NavigationBar;
