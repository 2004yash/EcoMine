// SignUpPage.js
import React, { useState } from 'react';
import './sign.css';
import { useNavigate } from 'react-router-dom';
import LoginWindow from '../login/LoginWindow';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const SignUpPage = () => {
  const [form, setForm] = useState({
    companyName: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const [showLogin, setShowLogin] = useState(false);
  const [error, setError] = useState(null); // State to handle errors

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, companyName, contactNumber } = form;

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!email || !password || !companyName || !contactNumber) {
      setError("Please fill out all fields!");
      return;
    }

    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        companyName,
        contactNumber,
        email,
      });

      console.log('User registered and data stored:', user);
      navigate('/CarbonForm');
    } catch (error) {
      setError(error.message);
      console.error('Error during sign-up:', error.message);
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLogin(true);
  };

  const closeLoginWindow = () => {
    setShowLogin(false);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up to use our calculator</h1>
      <div className="signup-content">
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Form fields */}
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
                  className="check"
                  checked={form.rememberMe}
                  onChange={handleChange}
                />
                Remember Me
              </label>
              <span className="login-link">
                Already registered? <a href="#" onClick={handleLoginClick}>Login</a>
              </span>
            </div>
          </div>
          <button type="submit" className="btn-signup">
            Sign-Up
          </button>
        </form>

        {/* Display error message */}
        {error && <p className="error-message">{error}</p>}

        <div className="signup-text">
          <h2>
            <span>Ready</span>
            <span>to</span>
            <span>make</span>
            <span>a</span>
            <span>difference?</span>
          </h2>
        </div>
      </div>
      {showLogin && <LoginWindow onClose={closeLoginWindow} />}
    </div>
  );
};

export default SignUpPage;
