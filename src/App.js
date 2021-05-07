import React from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

// styles
import "bootstrap/scss/bootstrap.scss";

// routes
import Home from './components/routes/Home/Home'
import About from './components/routes/About'

function App(props) {
  return (
    <Router>
      <div className="app">
        {props.location.state ? props.location.state.msg : null}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default withRouter(App)
