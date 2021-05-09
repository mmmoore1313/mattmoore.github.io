import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'
// import BPane from './buttonPane.js'
// import { Container } from 'react-bootstrap'

const Layout = props => (
  <Fragment>
    <Header />
    <Fragment>

      {props.children}

    </Fragment>
    <Footer />
  </Fragment>
)

export default Layout
