import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleSignIn = () => {
    // Simulate successful sign-in
    setIsLoggedIn(true);
  };

  return (
    <div className="bg-gray-100">
      <Router>
        <Routes>
          <Route path="*" element={isLoggedIn ? <Dashboard /> : <SignIn onSignIn={handleSignIn} />} />
        </Routes>
      </Router>

      {/* Navigation buttons */}
      <nav className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={() => {
            // Handle dashboard button click (e.g., navigate to "/dashboard")
            window.location.href = '/dashboard';
          }}
        >
          Dashboard
        </button>
      </nav>
    </div>
  );
};

export default App;
