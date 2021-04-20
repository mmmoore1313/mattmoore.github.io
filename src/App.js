import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import './App.css';

// styles
import "bootstrap/scss/bootstrap.scss";

// routes
import Home from './components/routes/Home'
import About from './components/routes/About'

const App = props => (
  <React.Fragment>
    <div className="App">
      {props.location.state ? props.location.state.msg : null}
    </div>
    <Route exact path='/' component={Home} />
    <Route exact path='/About' component={About} />
  </React.Fragment>
)

export default withRouter(App)
