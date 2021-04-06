import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import { Card } from 'react-bootstrap'

const Layout = props => (
  <Fragment>
    <Header />
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
    <Footer />
  </Fragment>
)

export default Layout
