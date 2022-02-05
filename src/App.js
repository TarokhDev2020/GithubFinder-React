import React, {Fragment} from 'react'
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/users/User';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Provider store = {store}>
      <Router>
    <Fragment>
      <Navbar title = "Github Finder" icon = "fab fa-github"/>
      <div className = "container">
        <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/user/:login" component = {User} />
        </Switch>
      </div>
    </Fragment>
    </Router>
    </Provider>
  )
}

export default App
