import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SignUp from './components/SignUp';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<App />} />
        
        {/* Route for Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
