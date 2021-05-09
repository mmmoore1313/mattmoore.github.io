import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/layout'
import { Button } from 'react-bootstrap'
import './style.scss'

const Home = () => {
  return (
  <Layout>
    <div className='home'>
      <div className='title'>
        <h1>
          <p>Hi!</p>
          <p>My name is Matt</p>
          <p>Software Engineer</p>
        </h1>
        <Link to='about'>
          <Button>More Info</Button>
        </Link>
      </div>
      <div className='person'>
        <img
          src={`${process.env.PUBLIC_URL}/donkey.jpg`}
        />
      </div>
    </div>
  </Layout>
)}

export default Home