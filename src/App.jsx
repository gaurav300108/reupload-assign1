import React from 'react';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <div className="bg-gray-100">
      {/* Navigation buttons */}
      <nav className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={() => {
            // Handle sign-in button click (e.g., navigate to "/signin")
            window.location.href = '/signin';
          }}
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

      {/* Render the appropriate component based on the button click */}
      <div className="mt-4">
        {window.location.pathname === '/signin' ? (
          <SignIn />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default App;
