import React, { useState } from 'react';
import './login.css'; // CSS file for dark theme
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginWindow = ({ onClose }) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const auth = getAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginForm;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Logged in:', user);
        onClose(); // Close the login window after successful login
        navigate('/dashboard'); // Navigate to /dashboard after successful login
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="login-overlay">
      <div className="login-window">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginForm.email}
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
              value={loginForm.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginWindow;
