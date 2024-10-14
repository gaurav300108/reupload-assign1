import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <div className='bg-gray-100'>
      <Router>
        <Routes>
          {/* Define routes for dashboard and signin */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          
          {/* Redirect any undefined routes to dashboard */}
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
