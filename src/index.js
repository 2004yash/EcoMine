import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarbonForm from './pages/CarbonForm';
import Dashboard from './pages/dashboard/dashboard'; // Import the Dashboard component
import Result from './components/EmissionForm/Result';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carbonform/*" element={<CarbonForm />} />
<<<<<<< HEAD
=======
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
>>>>>>> 1240625d7edcd4777d02bd221a657da7788e23d2
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
