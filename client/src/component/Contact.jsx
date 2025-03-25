import React from 'react';
import './CSS/contact.css'; // Import custom CSS for styling

export const ContactPage = () => {
  return (
    <section id="contact-page" className="contact-page">
      <h2 className="about-us-heading" >Get in Touch</h2>
      <div id="contact-container" className="contact-container">
        
        {/* Contact Form */}
        <div id="contact-form" className="contact-form">
          <h2 id="contact-us-heading">Contact With Us</h2>
          <br />
          <form id="contact-form-element">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name-input" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email-input" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message-input" rows="4" placeholder="Write your message"></textarea>
            </div>
            <button id="send-message-button" type="submit" className="join-us-button">➤ Send Message</button>
          </form>
        </div>

        {/* Location Section */}
        <div id="location-section" className="location-section">
          <h2 id="location-heading">Our Location</h2>
          <p id="location-address">123 Gym Street, Fitness City, Workout Country</p>
          <iframe
            id="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354343575393!2d144.95373531531047!3d-37.81620397975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad643ef96779f7f%3A0x5045675218ce7e33!2s123+Fake+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sus!4v1510910098270"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Gym Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
