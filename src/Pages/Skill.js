import React from 'react'
import './Skill.scss'
const Skill = () => {
  return (
    <div className='skill'>
      <div className='header'>
        <h1>Skills</h1>
        <img src='/images/about04.png' alt='about'></img>
      </div>
      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='card'>
              <img src='images/html.png' alt='html'></img>
            </div>
            <div className='card'>
              <img src='images/css.png' alt='css'></img>
            </div>
            <div className='card'>
              <img src='images/javascript.png' alt='js'></img>  
            </div>
          </div>
          <div className='row'>
            <div className='card'>
                <img src='images/sass.png' alt='sass'></img>
              </div>
              <div className='card'>
                <img src='images/redux.png' alt='redux'></img>
              </div>
              <div className='card'>
                <img src='images/git.png' alt='git'></img>  
              </div>
            </div>
          <div className='row'>
          <div className='card'>
              <img src='images/node.png' alt='node'></img>
            </div>
            <div className='card'>
              <img src='images/figma.png' alt='figma'></img>
            </div>
            <div className='card'>
              <img src='images/cpp.png' alt='cpp'></img>  
            </div>
          </div>
        </div>
      <div className='major-skill'>
        <div className='docker'>
          <img src='/images/docker.png' alt='dockerImg'></img>
        </div>
        <div className='react'>
          <img src='/images/react.png' alt='reactImg'></img>
        </div>
      </div>
      <div className='mid-skill'>
          <div className='kubernetes'>
            <img src='/images/kubernetes.png' alt='kubernetesImg'></img>
          </div>
          <div className='jenkins-python'>
            <img src='/images/jenkins.png' alt='jenkinsImg'></img>
            <img src='/images/python.png' alt='pythonImg'></img>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Skill
