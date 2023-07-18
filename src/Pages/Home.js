import React from 'react'
import './Home.scss'
import { Typewriter } from 'react-simple-typewriter';


import About from './About';
import Skill from './Skill';
import Project from './Project';
//component
import Contact from '../Components/Contact';
import Navbar from '../Components/Navbar'


const Home = () => {
  return (
    <>
    <div className='Home'>
      <div className='profileImage'>
        <img src="/images/pp.png" alt='profile'></img>
      </div>
      <div className='intro'>
        <h1>Hello👋<br/> I'm Srisanth Seth</h1>
        <br/>
        <Typewriter className='type'
          words={['MERN Developer', 'DevOps Engineer', 'Figma Designer', 'Student @ NIT Rourkela']}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <Navbar />
      <div className='contactMe'>
        <img src="/images/email.png" alt='email'></img>
        <p>Contact Me</p>
      </div>
      <div className='circle1'>
        <img src='/images/Ellipse 1.svg' alt="circle1"></img>
      </div>
      <div className='circle2'>
        <img src='/images/Ellipse 2.svg' alt="circle2"></img>
      </div>
      <div className='rect'>
        <img src='/images/Rectangle1.svg' alt='rect1' className='rect1'></img>
        <img src='/images/Rectangle2.svg' alt='rect2' className='rect2'></img>
      </div>
    </div>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    </>
  )
}

export default Home;
