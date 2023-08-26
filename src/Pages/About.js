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
      <p>
            Greetings,
            <br /><br />
            I'm Srisanth Seth, an enthusiastic undergraduate at the National Institute of Technology, Rourkela. Currently in my third year of B.Tech studies in Industrial Design, I've developed a strong passion for Front-end Development and DevOps.
            <br /><br />
            The process of turning innovative ideas into functional websites and web applications, along with their seamless deployment using CI/CD, has truly captured my attention. I'm equally intrigued by the concepts of Downtown Management and Microservices, which play pivotal roles in creating efficient digital solutions.
            <br /><br />
            As I continue to learn and grow, I'm excited to explore the ever-evolving realms of technology. Join me on this journey as I strive to enhance user experiences and contribute to the world of Front-end Development and DevOps.
            <br /><br />
            Best regards,
            <br />
            Srisanth Seth
        </p>
      </div>
    </div>
  )
}

export default About
