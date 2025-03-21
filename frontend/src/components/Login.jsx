import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Correct the path to App.css

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle login button click
  const handleLogin = () => {
    // Here you can add login logic (e.g., validate user)
    // After successful login, navigate to the Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="App">
      <h1 className="title">Welcome Back</h1>

      {/* Email Input */}
      <div className="input-container">
        <input type="text" placeholder="Email" className="custom-input" />
      </div>

      {/* Password Input */}
      <div className="input-container">
        <input type="password" placeholder="Password" className="custom-input" />
      </div>

      {/* Login Button */}
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>

      {/* Sign Up Link */}
      <p className="signup-text">
        Don't have an account?{' '}
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;
