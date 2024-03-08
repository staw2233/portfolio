import React from "react";
import "./Contact.css";

import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className="contact-container">
      <h5>Contact</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
