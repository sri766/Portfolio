import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <hr/>
      <h1>Let's Connect</h1>
      <ul>
        <li>
          <a href='https://twitter.com/SrisanthSeth' target="_blank" rel="noreferrer noopener">
            <span>Twitter</span>
            <img src="./images/twitter.png" alt="twitter" style={{ height:'35px'}} />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/sri_santh._/' target="_blank" rel="noreferrer noopener">
            <span>Instagram</span>
          <img src="./images/2.png" alt="instagram" style={{ height:'40px'}}/>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/srisanth-seth-51b54b225/' target="_blank" rel="noreferrer noopener">
            <span>Linkedin</span>
          <img src="./images/1.png" alt="linkedin" style={{ height:'40px'}}/>
          </a>
        </li>
        <li>
          <a href='https://github.com/sri766' target="_blank" rel="noreferrer noopener">
            <span>GitHub</span>
            <img src="./images/3.png" alt="github" style={{ height:'40px'}}/>
          </a>
        </li>
      </ul>
      <div class="card">
        <div class="contact__info">
          <h3 class="contact__info-title">Let's talk about Anything!</h3>
          <p class="contact__info-text">Don't like forms? Send me an  <a href="mailto:srisanthseth28@gmail.com"><img src='/images/email.png' alt='email' style={{ height:'2rem'}}></img></a><span class="contact__info-highlight"> Email</span>. 👋</p>
        </div>  
      </div>
    </div>
  )
}

export default Contact
