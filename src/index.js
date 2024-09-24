import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarbonForm from './pages/CarbonForm';
import Dashboard from './pages/dashboard/dashboard';
import Marketplace from './components/carbon credit/Marketplace';
import Result from './components/EmissionForm/Result';
import Navbar from './components/navbar/navbar';
import SignUp from './components/sign/sign'; // Import the SignUp component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar /> {/* Ensure Navbar is rendered at the top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carbonform/*" element={<CarbonForm />} />
        <Route path="/carbon" element={<Marketplace />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
        <Route path="/result" element={<Result />} />
        <Route path="/signup" element={<SignUp />} /> {/* Sign Up route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
