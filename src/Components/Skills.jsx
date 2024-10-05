import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <section className='experience-section' id='about'>
      <div className='container'>
        <div className='section_title center'>
          <p>My Profession</p>
          <h1>My Skills</h1>
        </div>
        <div className='experience-items'>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>HTML</p>
              <p>90%</p>
            </div>
            <div className='progress-line' data-percent="90%">
                <span style={{width: "90%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>CSS</p>
              <p>80%</p>
            </div>
            <div className='progress-line' data-percent="80%">
                <span style={{width: "80%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>JavaScript</p>
              <p>80%</p>
            </div>
            <div className='progress-line' data-percent="80%">
                <span style={{width: "80%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>React.Js</p>
              <p>60%</p>
            </div>
            <div className='progress-line' data-percent="60%">
                <span style={{width: "60%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>Node.Js</p>
              <p>50%</p>
            </div>
            <div className='progress-line' data-percent="50%">
                <span style={{width: "50%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>Express.Js</p>
              <p>60%</p>
            </div>
            <div className='progress-line' data-percent="60%">
                <span style={{width: "60%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>Mongo DB</p>
              <p>60%</p>
            </div>
            <div className='progress-line' data-percent="60%">
                <span style={{width: "60%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>SQL</p>
              <p>79%</p>
            </div>
            <div className='progress-line' data-percent="79%">
                <span style={{width: "79%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>C++</p>
              <p>75%</p>
            </div>
            <div className='progress-line' data-percent="75%">
                <span style={{width: "75%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>Tailwind Css</p>
              <p>85%</p>
            </div>
            <div className='progress-line' data-percent="85%">
                <span style={{width: "85%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>Data Structure & Algorithms</p>
              <p>55%</p>
            </div>
            <div className='progress-line' data-percent="55%">
                <span style={{width: "55%"}}></span>
            </div>
          </div>
          <div className='experience-item'>
            <div className='experience-info'>
              <p>Three.Js</p>
              <p>30%</p>
            </div>
            <div className='progress-line' data-percent="30%">
                <span style={{width: "30%"}}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
