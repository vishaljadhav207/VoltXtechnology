import React, { useState, useEffect } from "react";
import "./Programs.css";
import program_1 from "../../assets/Robotic_Lab.jpg";
import program_2 from "../../assets/Robotic_kits.png";
import program_3 from "../../assets/Indutrial_Training.png";
import program_4 from "../../assets/IOT.png";
import program_5 from "../../assets/3d_printing.jpeg";
import program_6 from "../../assets/robotic_3_hand.jpg";

const programsData = [
  { img: program_1, title: "Robotic Lab" },
  { img: program_2, title: "Robotic Kit" },
  { img: program_3, title: "Industrial Workshops" },
  { img: program_4, title: "IoT" },
  { img: program_5, title: "3D Printing" },
  { img: program_6, title: "Internship" },
];

const Programs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = programsData.length;
  const visibleSlides = 3; // Show 3 slides at a time

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < totalSlides - (visibleSlides - 1) ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalSlides - visibleSlides
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="programs-container">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="programs">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
          }}
        >
          {programsData.map((program, index) => (
            <div className="program" key={index}>
              <img src={program.img} alt={program.title} />
              <div className="caption">
                <p>{program.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Programs;