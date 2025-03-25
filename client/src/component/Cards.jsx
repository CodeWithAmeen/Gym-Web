import React from 'react';
import './CSS/Cards.css'; // Assuming you will add some CSS for styling
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Add these imports for icons

const Card = ({ image, title, description, socialLinks }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <br />
        <div className="card-social-links">
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebookF />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link2">
            <FaInstagram />
          </a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link3">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
