import React from 'react'
import Layout from '../shared/layout'
import './style.scss'

const Skills = () => {
  return (
    <div className='skills'>
      <h1>Skillz</h1>
      <div className='content'>
        <div>
          <strong>Languages:</strong>
          <li>JavaScript</li>
          <li>Python</li>
          <li>C#</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>Express.js</li>
          <li>DJango</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Eslint</li>
          <li>Chrome</li>
          <li>Git & GitHub</li>
        </div>
      </div>
    </div>
  )
}

export default Skills
