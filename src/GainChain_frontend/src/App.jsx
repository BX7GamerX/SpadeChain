// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home.jsx";
import Messages from "./pages/Messages.jsx";
import Tokens from "./pages/Tokens.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

import "./styles/global.css"; // Adjust this if your global.css isn't loading correctly


function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
