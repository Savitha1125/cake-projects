import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.jsx'
import { WishlistProvider } from './WishlistContext'; 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
   <WishlistProvider>
      <App />
    </WishlistProvider>
  </BrowserRouter>
);
