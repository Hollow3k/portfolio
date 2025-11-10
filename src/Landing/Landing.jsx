import React from 'react'
import './Landing.css'
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function Landing() {
  const scrollToSection = (sectionId) => {
    gsap.to(window, { duration: 1, scrollTo: sectionId });
  };

  return (
    <span className='landing'>
      <div className='text'>
        <div className="navButtons">
          <button className='navButton' onClick={() => scrollToSection('#skills')}></button>
          <button className='navButton' onClick={() => scrollToSection('#projects')}></button>
          <button className='navButton' onClick={() => scrollToSection('#reachout')}></button>
        </div>
        <h1>Angad Bajaj</h1>
        <h2>Full Stack Developer</h2>
      </div>
    < div className='figure'> 
        <img src='/figure.png' alt='figure' />
      </div>
    </span>
  )
}

export default Landing

