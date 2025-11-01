import React from 'react'
import './Landing.css'

function Landing() {
  return (
    <span className='landing'>
      <div className='text'>
        <div className="navButtons">
            <button className='navButton' id = "skills"></button>
          <button className='navButton' id = "projects"></button>
          <button className='navButton' id = "links"></button>
          <button className='navButton' id = "contact"></button>
        </div>
        <h1>Angad Bajaj</h1>
        <h2>Full Stack Developer</h2>
      </div>
    < div className='figure'> 
        <img src='../../public/figure.png' alt='figure' />
      </div>
    </span>
  )
}

export default Landing
