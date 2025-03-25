import React from 'react';
import './CSS/trainers.css'; // Import CSS for trainers section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Trainers = () => {
  const trainers = [
    {
      name: 'John Doe',
      image: '/images/trainer1.png', // Replace with your image path
      description: 'Certified personal trainer with 10 years of experience in strength training and nutrition coaching.',
      social: {
        facebook: 'https://facebook.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Jane Smith',
      image: '/images/trainer2.png', // Replace with your image path
      description: 'Specialist in bodyweight exercises and high-intensity interval training.',
      social: {
        facebook: 'https://facebook.com/janesmith',
        instagram: 'https://instagram.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    },
    {
      name: 'Mike Johnson',
      image: '/images/trainer3.png', // Replace with your image path
      description: 'Expert in bodybuilding and strength conditioning with a focus on muscle gain.',
      social: {
        facebook: 'https://facebook.com/mikejohnson',
        instagram: 'https://instagram.com/mikejohnson',
        twitter: 'https://twitter.com/mikejohnson',
      },
    },
  ];

  return (
    <section id="trainers" className="trainers-section">
        <h1 style={{ fontSize: '40px', color: '#39FF14', marginTop: '40px', marginBottom: '20px', fontFamily: '-moz-initial' }}>Trainers</h1>
      <h2 className="about-us-heading">Meet Our Trainers</h2>
      <div className="trainers-container">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.description}</p>
            <div className="trainer-social-links">
              <a href={trainer.social.facebook} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href={trainer.social.instagram} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={trainer.social.twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
