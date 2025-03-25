import React from 'react';
import './CSS/whychooseus.css'; // Link to your CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

export const WhyTrainWithUs = () => {
  return (
    <section className="why-train">
      <div className="container">
      <h2 className="about-us-heading">Why Train With Us?</h2>
        <div className="reasons">
          <div className="reason">
            <i className="fas fa-dumbbell"></i>
            <h2>State-of-the-Art Equipment</h2>
            <p>Our gym is equipped with the latest machines and tools to help you reach your fitness goals.</p>
          </div>
          <div className="reason">
            <i className="fas fa-users"></i>
            <h2>Expert Trainers</h2>
            <p>Train with certified and experienced trainers who guide you through every step of your journey.</p>
          </div>
          <div className="reason">
            <i className="fas fa-heartbeat"></i>
            <h2>Personalized Programs</h2>
            <p>We create custom workout plans tailored to your fitness level and goals.</p>
          </div>
          <div className="reason">
            <i className="fas fa-clock"></i>
            <h2>Flexible Timings</h2>
            <p>With extended hours, you can fit your workout into even the busiest schedule.</p>
          </div>
        </div>
      </div>
    </section>
  );
};



