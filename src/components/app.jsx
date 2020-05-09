import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ViewContext } from '../helpers/context'
import './app.scss'
import Header from './header';
import NavBar from './navbar'
import HomePage from './homepage'
import Photos from './photos'
import Horoscope from './horoscope'

export default function App(props) {
  const [view, setView] = useState("all")
  return (
    <ViewContext.Provider value={{ view, setView }}>
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/photos" component={Photos} />
          <Route path="/horoscope" component={Horoscope} />
        </Switch>
      </Router>
    </ViewContext.Provider>
  )
}
