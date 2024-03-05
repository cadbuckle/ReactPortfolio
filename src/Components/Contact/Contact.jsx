import React, { useState } from "react";
import "./Contact.css";
import ContactFooter from "./ContactFooter";

function Contact() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    const emlRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
    const result = emlRegex.test(formData.emailAddress.trim());
    // Alert the user their first and last name, clear `formData.firstName` and `formData.lastName`, clearing the inputs
    if (!formData.emailAddress) {
      alert("Email address required");
    } else if (!result) {
      alert("Invalid email address");
    } else {
      console.log(formData.firstName, formData.lastName, formData.emailAddress);
      setFormData({
        firstName: "",
        lastName: "",
        emailAddress: "",
      });
    }
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div className="container-flex">
      <h3>Contact Me:</h3>
      <p>Please complete the following form and I will get back to you.</p>
      <form className="form">
        <input
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={formData.emailAddress}
          name="emailAddress"
          onChange={handleInputChange}
          type="text"
          placeholder="Email Address"
        />

        <button className="formBtn" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <br></br><br></br><ContactFooter />
    </div>
  );
}

export default Contact;
