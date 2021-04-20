import React, { Fragment } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
    <Nav.Link href="#About">About</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      Matt Moore
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {/* user && <span className="navbar-text mr-2">Welcome, {user.email}</span>*/}
        { alwaysOptions }
        {/* user ? authenticatedOptions : unauthenticatedOptions */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header