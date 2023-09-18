import axios from 'axios';
import React, { useState } from 'react';
const UserLogin = ({ setUserType, onFormSwitch }) => {
  // const { UserLogin } = useAuth();
  const [response, setResponse] = useState("");
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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Fetch POST Request Example' })
  };
   var postData = {
    email : "test@test.com",
    password : "password"
   };
   let axiosConfig = {
    headers : {
      'content-Type' : 'application/json;charset=UTF_8',
      
    }
   };

    axios.post('http://localhost:3000/login', postData, axiosConfig)
      .then((response) => {
      setResponse(response);
      'mode' : 'cors'
    });
    console.log("response",response)
    
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
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
      <a href='/register' ><button className="link-btn">
        Don't have an account? Register here
      </button></a>
    </div>
  );
};

export default UserLogin;
