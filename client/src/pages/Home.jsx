import React, { useEffect, useState, useRef } from 'react';
import { Trainers } from '../component/Trainers'; 
import { Pricing } from '../component/Pricing';
import { ContactPage } from '../component/Contact'; 
import { WhyTrainWithUs } from '../component/whychooseus'; 
import { TestimonialSlider } from '../component/testimonial';
import './CSS/Home.css';

export const Home = () => {
  const [activeMembers, setActiveMembers] = useState(1);
  const [professionalCoaches, setProfessionalCoaches] = useState(1);
  const [workoutsCompleted, setWorkoutsCompleted] = useState(1);
  const analyticsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateNumber = (setter, finalNumber) => {
    let start = 1;
    const increment = Math.ceil(finalNumber / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= finalNumber) {
        setter(finalNumber);
        clearInterval(interval);
      } else {
        setter(start);
      }
    }, 20);
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        animateNumber(setActiveMembers, 2000);
        animateNumber(setProfessionalCoaches, 120);
        animateNumber(setWorkoutsCompleted, 10000);
        setHasAnimated(true);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.3,
    });

    if (analyticsRef.current) {
      observer.observe(analyticsRef.current);
    }

    return () => {
      if (analyticsRef.current) {
        observer.unobserve(analyticsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div>
      {/* Hero Section */}
      <div id="/" className="content-container">
        <div className="overlay">
          <p>Push yourself, because no one else is going to do it for you.</p>
          <div className="buttons-container">
            <a href="#join-us" className="btn">☎ Join Us</a>
            <a href="#watch-video" className="btn">▶ Watch Video</a>
          </div>
        </div>
      </div>

      {/* Moving Analytics Section */}
      <div id="analytics" className="moving-analytics-section" ref={analyticsRef}>
        <div className="analytics-item">
          <h2>{activeMembers}+</h2>
          <p>Active Members</p>
        </div>
        <div className="analytics-item">
          <h2>{professionalCoaches}+</h2>
          <p>Professional Coaches</p>
        </div>
        <div className="analytics-item">
          <h2>{workoutsCompleted}+</h2>
          <p>Workouts Completed</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div id="#why-choose-us" className="why-choose-us-section">
        <div className="why-choose-us-content">
          <h2 className="why-choose-us-heading">About Us</h2>
          <p className="why-choose-us-description">
            At our core, we believe in delivering unparalleled value to our customers. Our expert team is committed to providing top-notch services tailored to your unique needs. With years of industry experience, innovative solutions, and a customer-first approach, we ensure that your satisfaction is our highest priority. We constantly push boundaries to stay ahead, offering a seamless experience that blends quality, reliability, and innovation. Choose us for the exceptional service you deserve.
          </p>
          <button className="join-us-button">☎ Join Us</button>
        </div>
        <div className="why-choose-us-image">
          <img src="images/about.png" alt="Why Choose Us Image" />
        </div>
      </div>

      <WhyTrainWithUs />

      {/* Services Section */}
      <div id="services" className="about-us-section">
        <h1 style={{ fontSize: '40px', color: '#39FF14', marginTop: '40px', marginBottom: '20px', fontFamily: '-moz-initial' }}>Services</h1>
        <br />
        <h2 className="about-us-heading">TRANSFORM YOUR BODY, TRANSFORM YOUR LIFE!</h2>
        <div className="featured-items">
          <div className="card">
            <img src="images/gymguy1.jpg" alt="Strength Training" className="card__image" />
            <div className="card__content">
              <p className="card__title">Strength Training 💪</p>
              <p className="card__description">Build your strength and endurance with our top-notch training programs.</p>
              <button className="join-us-button">➜ Read more...</button>
            </div>
          </div>
          <div className="card">
            <img src="images/gymgirl1.jpg" alt="Yoga" className="card__image" />
            <div className="card__content">
              <p className="card__title">Yoga 🧘</p>
              <p className="card__description">Enhance flexibility and achieve inner peace with our yoga sessions.</p>
              <button className="join-us-button">➜ Read more...</button>
            </div>
          </div>
          <div className="card">
            <img src="images/gymguy3.jpg" alt="Weight Lifting" className="card__image" />
            <div className="card__content">
              <p className="card__title">Weight Lifting 🏋️‍♂️</p>
              <p className="card__description">Push your limits and build muscle with our weight lifting programs.</p>
              <button className="join-us-button">➜ Read more...</button>
            </div>
          </div>
        </div>
      </div>

      <Trainers />

      <Pricing />

      <TestimonialSlider />

      <ContactPage />

      

    </div>
  );
};
