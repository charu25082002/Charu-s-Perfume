import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wk9gb4q",
        "template_94nphnp",
        form.current,
        "Er9yRgJTw8qkC5HT8"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Contact </h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />

          <label>Message</label>
          <textarea name="message" placeholder="Your message..." required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
