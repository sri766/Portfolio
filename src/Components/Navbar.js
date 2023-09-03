import React from 'react'
import './Navbar.scss'
import { useEffect } from 'react';
const Navbar = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className='navbar'>
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}

        style={{
          background:'none',
          border: 'none',

        }}
      >
        <img src="/images/Home.svg" alt="homeIcon"></img>
        <p>Home</p>
      </button>

      <button
        onClick={() => {
          window.scrollTo({top: 750, left: 750, behavior: 'smooth'});
        }}

        style={{
          background:'none',
          border: 'none',

        }}
      >
        <img src="/images/information.png" alt="homeIcon"></img>
        <p>About</p>
      </button>

      <button
        onClick={() => {
          window.scrollTo({top: 1500, left: 1500, behavior: 'smooth'});
        }}

        style={{
          background:'none',
          border: 'none',
          
        }}
      >
        <img src="/images/skills.svg" alt="homeIcon"></img>
        <p>Skills</p>
      </button>

      <button
        onClick={() => {
          window.scrollTo({top: 2350, left: 2350, behavior: 'smooth'});
        }}

        style={{
          
          border: 'none',
          background:'none',
        }}
      >
        <img src="/images/projects.svg" alt="homeIcon"></img>
        <p>Projects</p>
      </button>

      
      </div>
  )
}

export default Navbar
