import React from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  return (
    <form action="https://submit-form.com/JKDieJ1Sl" className="feedback-form" id="feedback">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Email" required />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default FeedbackForm;