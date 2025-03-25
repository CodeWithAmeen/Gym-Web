import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./CSS/Footer.css"; // Assuming this is the CSS file with your styles

export const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (footerRef.current) {
      const footerPosition = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the footer is within the viewport
      if (footerPosition < windowHeight) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className={`footer-container ${isVisible ? 'footer-visible' : ''}`}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Building core strength and transforming fitness through expert guidance and a supportive community.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#home-section">Home</a></li>
            <li><a href="#about-section">About</a></li>
            <li><a href="#trainer-section">Services</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#gym-pricing">Pricing</a></li>
            <li><a href="#contact-page">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><b>Location:</b> CoreFit Gym, 123 Fitness Lane, Strongsville</p>
          <p><b>Email:</b> corefit@gmail.com</p>
          <p><b>Phone:</b> +92-1234567890</p>

        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" className="facebook-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer" className="twitter-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" className="instagram-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CoreFit - Created by Muhammad Ameen. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
