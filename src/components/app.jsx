import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ViewContext } from '../helpers/context'
import client from '../helpers/sanity'
import './app.scss'
import Header from './header';
import NavBar from './navbar'
import HomePage from './homepage'
import Photos from './photos'
import Horoscope from './horoscope'

export default function App(props) {
  const [view, setView] = useState(window.location.pathname.slice(1))
  const [data, setData] = useState([])
  useEffect(() => {
    const query = `{
      "photos": *[_type == "images"],
      "notes": *[_type == "notes"]
    }`
    client.fetch(query)
      .then(data => {
        setData(data)
      })
  }, [])
  return (
    <ViewContext.Provider value={{ view, setView }}>
      <Router>
        <Header />
        <NavBar />
        {data.length !== 0 &&
          <Switch>
            <Route exact path="/" render={() => <HomePage photos={data.photos.slice(0, 4)} />} />
            <Route path="/photos" render={() => <Photos photos={data.photos} />} />
            <Route path="/horoscope" component={Horoscope} />
          </Switch>
        }
      </Router>
    </ViewContext.Provider>
  )
}
