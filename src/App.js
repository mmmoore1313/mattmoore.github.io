import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import './App.css';

// styles
import "bootstrap/scss/bootstrap.scss";

// routes
import Home from './components/routes/Home'

const App = props => (
  <React.Fragment>
    <div className="App">
      {props.location.state ? props.location.state.msg : null}
    </div>
    <Route exact path='/' component={Home} />
  </React.Fragment>
)

export default withRouter(App)
