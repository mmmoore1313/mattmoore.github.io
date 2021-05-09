import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
// import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Link to='https://github.com/mmmoore1313'>
          Github
        </Link>
        <br />
        <Link to='https://www.linkedin.com/in/matt-m-moore-130013/'>
          LinkedIn
        </Link>
        <br />
        <Link to='https://github.com/mmmoore1313/mattmoore.github.io#matt-moores-digital-portfolio'>
          Docs
        </Link>
      </div>
    </footer>
  )
}

export default Footer