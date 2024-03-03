// Testimonial.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from './student.png';

const TestimonialCard = ({ username, review }) => (
  <div className="test-testimonial-card">
    <div className="test-circle-image">
      <img src={img} alt="img" />
    </div>
    <h3>{username}</h3>
    <p>{review}</p>
  </div>
);

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      username: 'Aarav Sharma',
      review: 'Crafting lessons for Ekam Innocations allows me to blend my passion for science, teaching, writing, creativity, and communication. The global reach is a bonus, and the flexibility is unmatched',
    },
    {
      id: 2,
      username: 'Aditi Patel',
      review: 'Ekam Innocations provides a platform to intertwine my love for science, teaching, and creativity. The global impact and flexible work environment make it a rewarding experience',
    },
    {
      id: 3,
      username: 'Vikram Singh',
      review: 'Working with Ekam Innocations is a delightful blend of science, teaching, and creativity. The freedom to choose projects, flexible hours, and collaborative colleagues redefine the way we approach education globally.',
    },
    {
      id: 4,
      username: 'Kriti Verma',
      review: 'Ekam Innocations is a game-changer, allowing me to channel my passion for science and teaching creatively. The flexibility to choose projects and collaborate with like-minded colleagues is truly empowering.',
    },
    // Add more testimonials as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </Slider>
  );
};

export default Testimonial;
