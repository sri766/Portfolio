import React from 'react'
import './About.scss'
const About = () => {
  return (
    <div className='about'>
      <div className='head-about'>
        <img src="/images/about03.png" alt='about'></img>
        <h1>About</h1>
      </div>
      <div className='content'>
        <p>Hey! This is Srisanth Seth. A Undergrad student at
            National institute of Technology, Rourkela.
            I am Currently in 3rd year of  my B.Tech Degree in Industrial Design.
            I am interested in Front-end development and DevOps. It's really 
            attracts me how websites, web apps get deployed on servers with CI/CD, Downtown Management, Microservices.
        </p>
      </div>
    </div>
  )
}

export default About
