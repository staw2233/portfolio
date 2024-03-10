import React, { useState } from "react";

import "./ContactForm.css";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tutaj możesz zrobić coś z danymi formularza, np. wysłać je do serwera
    console.log(formState);
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formState.firstname}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formState.lastname}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="message"
          cols="30"
          rows="3"
          placeholder="Message"
          value={formState.message}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
