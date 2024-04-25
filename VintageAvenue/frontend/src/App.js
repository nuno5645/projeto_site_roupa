import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VintageAvenue from './VintageAvenue';
import LoginPage from './LoginPage'; // Ensure you have this component created as per previous instructions
import MarketPage from './MarketPage'; // You will create this component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VintageAvenue />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/market" element={<MarketPage />} />

      </Routes>
    </Router>
  );
}

export default App;