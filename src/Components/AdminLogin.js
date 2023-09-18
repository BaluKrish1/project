import React, { useState } from 'react';
import axios from 'axios'; // You'll need Axios or another HTTP client library
// import { useAuth } from './Components/AuthContext';

const UserLogin = ({ setUserType, onFormSwitch }) => {
  // const { UserLogin } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your Node.js server for user authentication
      const response = await axios.post('/api/login', formData);

      // Assuming your server sends back a user object with userType
      const { userType } = response.data;

      // Set the user type in the parent component
      setUserType(userType);

      // Optionally, you can redirect the user to a dashboard or another page
      // using react-router-dom or window.location
    } catch (error) {
      // Handle authentication error (e.g., show an error message)
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
