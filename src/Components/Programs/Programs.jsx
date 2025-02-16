import React, { useState } from "react";
import "./Programs.css";
import program_1 from "../../assets/Robotic_Lab.jpg";
import program_2 from "../../assets/Robotic_kits.png";
import program_3 from "../../assets/Indutrial_Training.png";
import program_4 from "../../assets/IOT.png";
import program_5 from "../../assets/3d_printing.jpeg";
import program_6 from "../../assets/robotic_3_hand.jpg";

import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";

import program_icon_3 from "../../assets/program-icon-3.png";

const programsData = [
  { img: program_1, icon: program_icon_1, title: "Robotic Lab" },
  { img: program_2, icon: program_icon_2, title: "Robotic Kit" },
  { img: program_3, icon: program_icon_3, title: "Industrial Workshops" },
  { img: program_4, icon: program_icon_3, title: "IoT" },
  { img: program_5, icon: program_icon_3, title: "3D Printing" },
  { img: program_6, icon: program_icon_3, title: "Internship" },
];

const Programs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = programsData.length;
  const visibleSlides = 3; // Show 3 slides at a time

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleSlides < totalSlides ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalSlides - visibleSlides
    );
  };

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
              <img src={program.img} alt={program.title} height={340} />
              <div className="caption">
                <img src={program.icon} alt="" />
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
