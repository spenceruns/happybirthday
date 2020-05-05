import React, { useState, useEffect } from 'react'
import client from '../helpers/sanity'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import './app.scss'

export default function App() {
  const [test, setTest] = useState([])
  useEffect(() => {
    const query = `*[_type == "images"]`

    client.fetch(query).then(data => {
      setTest(data[0]);
    })
  }, [])
  return (
    <div className="App">
      <header className="App__header">
        {test.length !== 0 &&
          <img
            src={builder(imageObj(test.image[0])).url()}
            alt={test.name}
            className="App__image" />}
        <h1>Happy Birthday Lucy!</h1>
      </header>
    </div>
  )
}
