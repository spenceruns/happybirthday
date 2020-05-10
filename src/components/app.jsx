import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ViewContext, PhotoContext, NoteContext } from '../helpers/context'
import client from '../helpers/sanity'
import './app.scss'
import Header from './header';
import NavBar from './navbar'
import HomePage from './homepage'
import Photos from './photos'
import Horoscope from './horoscope'

export default function App(props) {
  const [view, setView] = useState(window.location.pathname.slice(1))
  const [photos, setPhotos] = useState([])
  const [notes, setNotes] = useState([])
  useEffect(() => {
    const photoQuery = `*[_type == "images"]`
    const noteQuery = `*[_type == "notes"]`

    client.fetch(photoQuery).then(data => {
      setPhotos(data);
    })
    client.fetch(noteQuery).then(data => {
      setNotes(data);
    })
  }, [])
  return (
    <ViewContext.Provider value={{ view, setView }}>
      <PhotoContext.Provider value={{ photos }}>
        <NoteContext.Provider value={{ notes }}>
          <Router>
            <Header />
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/photos" component={Photos} />
              <Route path="/horoscope" component={Horoscope} />
            </Switch>
          </Router>
        </NoteContext.Provider>
      </PhotoContext.Provider>
    </ViewContext.Provider>
  )
}
