import React from 'react'
import './Card.css'

function Card({ src, title, description, techStack, icon, link }) {
  return (
    <div className='card'>
      <div className='card-top'>
        <div className='card-left'>
          <img src={src} alt={title || 'project'} />
        </div>
        
        <div className='card-right'>
          <p className='card-description'>{description}</p>
        </div>
      </div>
      
      <div className='card-bottom'>
        <div className='card-bottom-left'>
          <a href={link} target="_blank" rel="noopener noreferrer" className='card-title-link'>
            <h2 className='card-title'>{title}</h2>
          </a>
          <p className='card-tech'>Tech Stack: {techStack}</p>
        </div>
        
        {icon && <img src={icon} alt="tech icon" className='card-icon' />}
      </div>
    </div>
  )
}

export default Card