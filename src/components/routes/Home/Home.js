import React from 'react'
// import { Link } from 'react-router-dom'
import Layout from '../../shared/layout'
import { Card } from 'react-bootstrap'

const Home = () => (
  <Layout>
    <Card.Title>
      Welcome to My Portfolio
    </Card.Title>
    <Card.Text>
      This Is the Home Card
    </Card.Text>
  </Layout>
)

export default Home