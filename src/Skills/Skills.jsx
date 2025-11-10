import React from 'react'
import './Skills.css'
import ScrollVelocity from '../ScrollVelocity/ScrollVelocity.jsx'

const velocity = 100;

function Skills() {
  return (
    <div className='skills' id="skills">
        <div className='heading'>
            <div className='red-dot'></div>
            <h1>Skills</h1>
        </div>
        <div className='web'>
          <h1 id="webT">Web technologies</h1>
        </div>
        <ScrollVelocity
          texts={['✦ MongoDB ✦ Express.js ✦ ReactJS ✦ Node.js ✦ Three.js ✦ HTML ✦ CSS', 'Node.js ✦ Three.js ✦ ReactJS ✦']} 
          velocity={velocity} 
          className="custom-scroll-text"
          />
        <div className='lang'>
          <h1 id="webL">Languages</h1>
        </div>
        <ScrollVelocity
          texts={['✦ Java ✦ Python ✦ C++ ✦ JavaScript ✦ C ', 'JavaScript ✦ C ✦ Java ✦ ']} 
          velocity={velocity} 
          className="custom-scroll-text"
          />
    </div>
  )
}

export default Skills
