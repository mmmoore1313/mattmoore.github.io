import React, { Fragment } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
// import BPane from './buttonPane.js'
// import { Container } from 'react-bootstrap'

const Layout = props => (
  <Fragment>
    <NavBar />
    <Fragment>

      {props.children}

    </Fragment>
    <Footer />
  </Fragment>
)

export default Layout
