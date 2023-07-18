import React from 'react'
import './Project.scss'
const Project = () => {
  return (
    <div className='project'>
      <div className='header'>
        <img src='/images/about01.png' alt='about'></img>
        <h1>Projects</h1>
      </div>
      <div className='projects'>
        <div className='projectCard1'>
          <div className='projectImg1'>
            <img src='/images/disney-2.png' alt='project'></img>
          </div>
          <div className='projectContent1'>
            <p>Disney Hotstar Clone with React and firebase</p>
            <button className='btn'><a href='https://todo-3ce31.web.app/'>View Project</a></button>
          </div>
        </div>
        <div className='projectCard2'>
          <div className='projectImg2'>
            <img src='/images/storetrend-1.png' alt='project'></img>
          </div>
          <div className='projectContent2'>
            <p>E-commerce website with Strapi and Stripe</p>
            <button className='btn'><a href='https://todo-3ce31.web.app/'>View Project</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
