import './SignUp.css';

function SignUp() {
  return (
    <div className="SignUp">
      <h1 className="title">Create an Account</h1>

      {/* Name Input */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          className="custom-input"
        />
      </div>

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

      {/* Confirm Password Input */}
      <div className="input-container">
        <input
          type="password"
          placeholder="Confirm Password"
          className="custom-input"
        />
      </div>

      {/* Sign Up Button */}
      <button className="login-btn">Sign Up</button>

      {/* Back to Login Link */}
      <p className="signup-text">
        Already have an account? <a href="/login" className="signup-link">Login</a>
      </p>
    </div>
  );
}

export default SignUp;
