import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarbonForm from './pages/CarbonForm'; // Correct path for CarbonForm component
import Marketplace from './components/carbon credit/Marketplace';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carbonform/*" element={<CarbonForm />} />
        <Route path="/carbon" element={<Marketplace />} />


        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
