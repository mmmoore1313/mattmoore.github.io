import React from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

// styles
import "bootstrap/scss/bootstrap.scss";

// routes
import Home from './components/Home/'
import About from './components/About/'
import Skills from './components/Skills/'
import Projects from './components/Projects'
import Tutorials from './components/Tutorials'
import Contact from './components/Contact'

function App(props) {
  return (
    <Router>
      <div className="app">
        {props.location.state ? props.location.state.msg : null}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/tutorials' component={Tutorials} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  )
}

export default withRouter(App)
