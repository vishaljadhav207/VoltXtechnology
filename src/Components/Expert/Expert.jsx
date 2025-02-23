import React, { useRef } from "react";
import "./Expert.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import director from "../../assets/director.jpg";
import business_dev from "../../assets/business_dev.png";
import firmware_eng from "../../assets/firmware-eng.png";
import hardware_eng from "../../assets/hardware-eng.jpg";

const teamMembers = [
  {
    img: director,
    name: "Vishal Khandagale",
    role: "Founder & Director",
  },
  {
    img: business_dev,
    name: "Prashant Khandagale",
    role: "Business Development Officer",
  },
  {
    img: firmware_eng,
    name: "Vivek Jadhav",
    role: "Robotic Firmware Engineer",
  },
  {
    img: hardware_eng,
    name: "Ansari Salman",
    role: "Robotic Hardware Design Engineer",
  },
];

const OurExpertTeam = () => {
  const slider = useRef();
  let scrollPosition = 0;

  const slideForward = () => {
    if (scrollPosition > -(teamMembers.length - 1) * 100) {
      scrollPosition -= 100;
      slider.current.style.transform = `translateX(${scrollPosition}%)`;
    }
  };

  const slideBackward = () => {
    if (scrollPosition < 0) {
      scrollPosition += 100;
      slider.current.style.transform = `translateX(${scrollPosition}%)`;
    }
  };

  return (
    <div className="our-expert-team">
      <h2 className="section-title">Our Expert Team</h2>
      <div className="team-container">
        <img src={back_icon} alt="Previous" className="back-btn" onClick={slideBackward} />
        <div className="slider-wrapper">
          <div className="slider" ref={slider}>
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.img} alt={member.name} className="team-img" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      </div>
    </div>
  );
};

export default OurExpertTeam;
