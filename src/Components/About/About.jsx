import React from "react";
import "./About.css";
import about_img from "../../assets/pic1.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>voltx technologies</h3>
        <h2>Empowering the Innovators of Tomorrow</h2>
        <p>
          At Voltx Technologies, we are dedicated to shaping the future of
          education through innovative technological solutions. Specializing in
          educational technologies, we provide cutting-edge robotic labs,
          learning kits, industrial workshops, internships, 3D printing, and
          more to empower students with practical, hands-on learning
          experiences. Our mission is to equip students with the skills and
          knowledge needed to thrive in the evolving technological landscape.
          With a vision to make students future-ready, we aim to inspire
          creativity, critical thinking, and problem-solving abilities that will
          drive success in the industries of tomorrow.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
