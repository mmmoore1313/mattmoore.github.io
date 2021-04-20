import React, { Fragment } from 'react'
import { Row, Col, Button, Nav } from 'react-bootstrap'

const BPane = ({}) => (
  <Fragment>
    <Row>
      <Col>
        <Nav.Link href='#/'>
          <Button>
            Home
          </Button>
        </Nav.Link>
      </Col>
      <Col>
        <Nav.Link href='#About'>
          <Button>
            Me
          </Button>
        </Nav.Link>
      </Col>
      <Col>
        <Nav.Link href='# '>
          <Button>
          </Button>
        </Nav.Link>
      </Col>
      <Col>
        <Nav.Link href='# '>
          <Button>
          </Button>
        </Nav.Link>
      </Col>
    </Row>
  </Fragment>
)

export default BPane