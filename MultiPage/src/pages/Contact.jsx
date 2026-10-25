import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('Message submitted successfully!');
    setMessage('');
  }

  return (
    <section className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input id="name" required placeholder="Enter your name" />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message"
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}