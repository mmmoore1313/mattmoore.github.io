import React from 'react'
import Layout from '../shared/layout'
import { Card } from 'react-bootstrap'

const About = () => {
  return (
    <Layout className='about'>
      <Card.Title>Who Is Matt Moore?</Card.Title>
      <Card.Text>This Is the About Me Card</Card.Text>
    </Layout>
  )
}

export default About