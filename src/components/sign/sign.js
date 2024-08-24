import React, { useState } from 'react';
import './sign.css'; // Correct CSS file path

const SignUpPage = () => {
  const [form, setForm] = useState({
    companyName: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="signup-container">
      <h1>Sign Up to use our calculator</h1>
      <div className="signup-content">
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  class="check"
                  checked={form.rememberMe}
                  onChange={handleChange}
                />
                Remember Me
              </label>
              <span className="login-link">
                Already registered? <a href="/login">Login</a>
              </span>
            </div>
          </div>
          <button type="submit" className="btn-signup">
            Sign-Up
          </button>
        </form>

        <div className="signup-text">
          <h2>
            <span>Ready</span>
            <span>to</span>
            <span>make</span>
            <span>a </span>
            <span>difference?</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
