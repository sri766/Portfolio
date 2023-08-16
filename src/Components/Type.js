import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import './Type.scss'


const Type = () => {
  return (
    <div className='intro'>
        <h1>Hello👋<br/> I'm Srisanth Seth</h1>
        <br/>
        <Typewriter className='type'
          words={['MERN Developer', 'DevOps Enthusiast', 'Figma Designer', "BTech in Industrial Design", 'Student @ NIT Rourkela']}
          loop={12}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
  )
}

export default Type
