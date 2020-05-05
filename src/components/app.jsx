import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './header'
import HomePage from './homepage'
import './app.scss'

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}
