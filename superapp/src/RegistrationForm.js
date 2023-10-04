// RegistrationForm.js
import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  const [alertMessages, setAlertMessages] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
    console.log(`Checkbox checked state: ${newValue}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here (e.g., send data to an API)

    // Perform validation and set alert messages dynamically
    const newAlertMessages = {};

    if (!formData.username) {
      newAlertMessages.username = "Field is required";
    }

    if (!formData.email) {
      newAlertMessages.email = "Field is required";
    }

    if (!formData.password) {
      newAlertMessages.password = "Field is required";
    }

    if (!formData.confirmPassword) {
      newAlertMessages.confirmPassword = "Field is required";
    }

    if (!formData.checkbox) {
      newAlertMessages.checkbox = "Check this box if you want to proceed";
    }

    // Check if there are any validation errors
    if (Object.keys(newAlertMessages).length === 0) {
      // If no errors, perform registration logic here (e.g., send data to an API)

      // Reset the form after submission
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkbox: false,
      });
      setAlertMessages({});
    } else {
      // If there are errors, display them
      setAlertMessages(newAlertMessages);
    }
  };
  return (
    <div className="registration-form">
      <h1>Super app</h1>
      <h2>Create your new account</h2>
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <span className="alert">{alertMessages.username}</span>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="alert">{alertMessages.username}</span>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />{" "}
          <span className="alert">{alertMessages.password}</span>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />{" "}
          <span className="alert">{alertMessages.password}</span>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <label>Share my registration data with Superapp</label> <br></br>
          <span className="alert">{alertMessages.checkbox}</span>
        </div>
        <button type="submit">Sign Up</button>
        <p>
          By clicking on Sign up. you agree to Superapp
          <span className="highlighted-text"> Terms and Conditions of Use</span>
        </p>

        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp
          <span className="highlighted-text"> Privacy Policy</span>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
