import React from 'react';
import './sign.css'; // Import the CSS for styling

function SignUp() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1 className="signup-heading">Sign Up to Use Our Calculator</h1>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="company-name">Company Name</label>
            <input type="text" id="company-name" name="company-name" required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="confirm-email">Confirm Email</label>
            <input type="email" id="confirm-email" name="confirm-email" required />
          </div>
          <div className="form-column">
            <label htmlFor="contact-number">Contact Number</label>
            <input type="tel" id="contact-number" name="contact-number" required />
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
        </div>
        <div className="form-actions">
          <label>
            <input type="checkbox" name="remember-me" />
            Remember Me
          </label>
          <div className="login-link">
            <a href="/login">Already registered? Login here</a>
          </div>
          
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
