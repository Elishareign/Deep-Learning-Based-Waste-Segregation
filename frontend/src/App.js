import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className="title">Welcome Back</h1>
      
      {/* Email Input */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Email"
          className="custom-input"
        />
      </div>

      {/* Password Input */}
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          className="custom-input"
        />
      </div>

      {/* Login Button */}
      <button className="login-btn">Login</button>

      {/* Sign Up Link */}
      <p className="signup-text">
        Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
      </p>
    </div>
  );
}

export default App;
