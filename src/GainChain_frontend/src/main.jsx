import React from 'react';
import ReactDOM from 'react-dom/client'; // or 'react-dom' depending on your version
import App from './App';
import './index.css'; // Ensure this imports your Tailwind styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
