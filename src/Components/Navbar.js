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
      </button>
      <button
        onClick={() => {
          window.scrollTo({top: 1080, left: 1080, behavior: 'smooth'});
        }}

        style={{
          background:'none',
          border: 'none',
          
        }}
      >
        <img src="/images/skills.svg" alt="homeIcon"></img>
      </button>
      <button
        onClick={() => {
          window.scrollTo({top: 1850, left: 1850, behavior: 'smooth'});
        }}

        style={{
          background:'none',
          border: 'none',
          
        }}
      >
        <img src="/images/projects.svg" alt="homeIcon"></img>
      </button>
      </div>
  )
}

export default Navbar
