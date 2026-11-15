import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-page">
      <div className="contact-intro">
        <p className="contact-label">Contact Terra & Form</p>
        <h1>Tell us about your project.</h1>
        <p>
          Where are you thinking of building, and how would you like
          to live there? We’d love to hear your ideas.
        </p>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        onChange={() => setSubmitted(false)}
    >
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" autoComplete="name" required />
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us a little about your idea…"
          required
        />
        <button type="submit">Submit</button>
        <p className="contact-feedback" role="status">
          {submitted && "Thank you for your feedback <3"}
        </p>
      </form>
    </section>
  );
}

export default Contact;