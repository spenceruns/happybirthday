import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './homepage'
import './app.scss'
import Horoscope from './horoscope';

export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/horoscope" component={Horoscope} />
      </Switch>
    </Router>
  )
}
