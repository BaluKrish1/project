import React, { Component } from 'react'; // Import Component from 'react'

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields here (e.g., check for empty fields, valid email, phone number, password match)
    const errors = {}; // Create an errors object to store validation errors

    // Example validation for a non-empty username
    if (!this.state.username.trim()) {
      errors.username = 'Username is required';
    }

    // Example validation for a valid email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.state.email)) {
      errors.email = 'Invalid email address';
    }

    // Example validation for a valid phone number (10 digits)
    const phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(this.state.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }

    // Example validation for password match
    if (this.state.password !== this.state.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // If there are no errors, you can proceed with registration
      // Send registration data to your server or perform other actions
      // Reset the form or redirect the user
      console.log('Registration data:', this.state);
      // Reset the form
      this.setState({
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {},
      });
    } else {
      // If there are errors, update the state to display them
      this.setState({ errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h2>Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>
          <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => this.props.onFormSwitch('UserLogin')}>Already have an account? Login here </button>
      </div>
    )  
  }
}

export default Registration; // Export the Register component
