import React, { useState, useEffect } from "react";
import "./Hero.css";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/robotic_3_hand.jpg";

const images = [hero1, hero2, hero3,hero4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Background Carousel */}
      <div className="carousel">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Our cutting-edge curriculum empowers students with knowledge, skills,
          and experiences to excel in education.
        </p>
        
      </div>
    </div>
  );
};

export default Hero;
