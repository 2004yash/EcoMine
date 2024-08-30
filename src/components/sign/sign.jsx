import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation
import './sign.css'; // Import the CSS for styling
import '../../firebase'; // Import your Firebase configuration
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import LoginWindow from '../login/LoginWindow'; // Import the LoginWindow component

function SignUp() {
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    confirmEmail: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [showLoginWindow, setShowLoginWindow] = useState(false); // State to manage the login window visibility

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      setError('Emails do not match.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Save user details to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        companyName: formData.companyName,
        email: formData.email,
        contactNumber: formData.contactNumber,
      });

      console.log('User signed up successfully:', user);
      navigate('/carbonform'); // Navigate to CarbonForm after successful signup
    } catch (error) {
      console.error('Error during sign-up:', error);
      setError('Failed to sign up.');
    }
  };

  const handleLoginClick = () => {
    setShowLoginWindow(true); // Show the login window when "Already registered?" is clicked
  };

  const closeLoginWindow = () => {
    setShowLoginWindow(false); // Close the login window
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="signup-heading">Sign Up to Use Our Calculator</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="confirmEmail">Confirm Email</label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-column">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-actions">
          <label>
            <input type="checkbox" name="remember-me" />
            Remember Me
          </label>
          <div className="login-link">
            <a href="#!" onClick={handleLoginClick}>Already registered? Login here</a>
          </div>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      {showLoginWindow && <LoginWindow onClose={closeLoginWindow} />}
    </div>
  );
}

export default SignUp;
