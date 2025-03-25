import React from 'react';
import './CSS/pricing.css'; // Import CSS for pricing section

export const Pricing = () => {
  const plans = [
    {
      name: 'Cardio Plan',
      price: '$30',
      description: 'Boost your endurance with unlimited access to our state-of-the-art cardio machines, treadmills, and cycling classes.',
      features: ['Treadmills', 'Ellipticals', 'Cycling classes', 'Heart-rate monitoring'],
      buttonText: 'Get Cardio Plan',
      buttonLink: '#link-here',
      isPremium: false,
    },
    {
      name: 'Premium Training',
      price: '$80',
      description: 'Elevate your fitness with our Premium Training package, including personalized coaching, yoga sessions, and a diet plan.',
      features: ['Personal Trainer', 'Custom workout plan', 'Yoga classes', 'Diet plan'],
      buttonText: 'Join Premium Training',
      buttonLink: '#link-here',
      isPremium: true,
    },
    {
      name: 'Yoga & Wellness',
      price: '$50',
      description: 'Rejuvenate your mind and body with unlimited access to yoga, meditation sessions, and holistic wellness plans.',
      features: ['Yoga classes', 'Meditation', 'Pilates', 'Holistic wellness guide'],
      buttonText: 'Get Yoga & Wellness',
      buttonLink: '#link-here',
      isPremium: false,
    },
  ];

  return (
    <section id="gym-pricing" className="gym-pricing-section">
      <h1 style={{ fontSize: '40px', color: '#39FF14', marginTop: '40px', marginBottom: '20px', fontFamily: '-moz-initial' }}>Pricing</h1>
      <h2 className="about-us-heading">Our Pricing Plans</h2>

      <p className="pricing-description">
        Achieve your fitness goals with our specially designed pricing plans. Choose the one that fits your workout style and needs, and enjoy the best gym facilities and support.
      </p>
      <div className="gym-pricing-container">
        {plans.map((plan, index) => (
          <div className={`gym-pricing-card ${plan.isPremium ? 'premium' : ''}`} key={index}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price} / month</p>
            <p className="plan-description">{plan.description}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a
              href={plan.buttonLink}
              className={plan.isPremium ? 'premium-btn' : 'btn'} // Only premium plan gets 'premium-btn', others get 'btn'
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
