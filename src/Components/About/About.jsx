import React from 'react'
import './About.css'
import about_img from '../../assets/pic1.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>VoltXTechnology</h3>
        <h2>Empowering the Innovators of Tomorrow</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you're preparing students to be future scientists, engineers, technologists, or leaders, our tailored lab setups and educational resources offer the perfect platform to nurture talent and unlock their full potential in shaping a better tomorrow.</p>
      </div>
    </div>
  )
}

export default About
