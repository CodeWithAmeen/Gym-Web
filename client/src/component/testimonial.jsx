import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CSS/testimonial.css';

 const testimonials = [
  {
    stars: 5,
    text: "CoreFit keeps me motivated and stronger every day. The variety of classes is amazing, and the trainers are so supportive. I love my fitness journey here!Electro Market Store exceeded my expectations. The product quality is top-notch and the service is excellent!",
    author: "John Doe",
    img: "images/testimonial1.jpg"
  },
  {
    stars: 4.5,
    text: "I lost 15 pounds in just 3 months! CoreFit has the best equipment and an incredible atmosphere. I’m so happy I joined!",
    author: "Jane Smith",
    img: "images/testimonial2.jpg"
  },
  {
    stars: 5,
    text: "The community at CoreFit is unbeatable! The workouts are challenging but fun, and I feel so much more confident. It’s been a game changer for me.",
    author: "Michael Brown",
    img: "images/testimonial3.jpg"
  },
  {
    stars: 4.5,
    text: "CoreFit made it easy to start my fitness journey. The personalized training plan was exactly what I needed, and I’ve seen amazing results. Highly recommend!",
    author: "Emily Davis",
    img: "images/testimonial4.jpg"
  },
  {
    stars: 5,
    text: "CoreFit offers the perfect mix of strength and cardio workouts. The facility is clean, and the staff is friendly. I’ve never felt better!",
    author: "Chris Wilson",
    img: "images/testimonial5.jpg"
  },
  {
    stars: 4.5,
    text: "Electro Market Store offers great value for money. I'm impressed with their selection.",
    author: "Sarah Johnson",
    img: "images/testimonial6.jpg"
  },
  {
    stars: 5,
    text: "Exceptional service and high-quality products. Highly recommend to everyone.",
    author: "David Lee",
    img: "images/testimonial7.jpg"
  },
  {
    stars: 5,
    text: "Very happy with my purchase. The customer support was very helpful.",
    author: "Lisa Martinez",
    img: "images/testimonial8.jpg"
  },
  {
    stars: 5,
    text: "Electro Market Store has become my go-to for electronics. Excellent quality and service.",
    author: "Robert Hernandez",
    img: "images/testimonial9.jpg"
  },
  {
    stars: 4.5,
    text: "Very satisfied with the products and service. Will definitely return for more.",
    author: "Jessica Gonzalez",
    img: "images/testimonial10.jpg"
  }
];

export const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="testimonials">
      <div className="container">
      <h2 className="about-us-heading">FeedBack</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="testimonial-content">
                <img src={testimonial.img} alt={testimonial.author} className="testimonial-image" />
                <div className="stars">
                  {[...Array(5)].map((star, i) => (
                    <i
                      key={i}
                      className={`fas fa-star${i < testimonial.stars ? "" : "-half-alt"}`}
                    />
                  ))}
                </div>
                <p>{testimonial.text}</p>
                <div className="author">- {testimonial.author}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

