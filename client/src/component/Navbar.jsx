import React, { useState, useEffect } from 'react';
import './CSS/Navbar.css'; // Import CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for icons
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Hamburger and Cross icons

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State for mobile menu
  const [scroll, setScroll] = useState(false); // State for scroll effect

  // Handle scroll effect to add a border to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50); // If user scrolls more than 50px, add the scroll effect
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scroll ? 'navbar-scroll' : ''}`}>
      <div className="logo">
        <img src="/images/Loogoo.png" alt="Logo" />
      </div>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        <li><a href="/">Home</a></li>
        <li><a href="##why-choose-us">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#trainers">Trainers</a></li>
        <li><a href="#gym-pricing">Pricing</a></li>
        <li><a href="#contact-page">Contact</a></li>
      </ul>
      <div className={`contact-button ${isMobile ? 'hide-contact' : ''}`}>
        <a href="#contact" className="btn1"> ➜ Get Started</a>
      </div>
      <div className="mobile-icon" onClick={() => setIsMobile(!isMobile)}>
        <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
      </div>
    </nav>
  );
};
