import React from 'react'
import './Programs.css'
import program_1 from '../../assets/Indutrial-Automation-2.jpg'
import program_2 from '../../assets/v3.jpg'
// import program_2 from '../../assets/R-ai.png'
import program_3 from '../../assets/stem.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" height={340}/>
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Industrial-Automation</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" height={340} />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Robotocs with AI</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" height={340}/>
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>STEM and Tinkering</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
