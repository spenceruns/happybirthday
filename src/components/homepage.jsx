import React, { useState, useEffect } from 'react'
import client from '../helpers/sanity'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import './homepage.scss'

export default function App() {
  const [test, setTest] = useState([])
  useEffect(() => {
    const query = `*[_type == "images"]`

    client.fetch(query).then(data => {
      setTest(data[0]);
    })
  }, [])
  return (
    <div className="homepage">
      <header className="homepage__test">
        {test.length !== 0 &&
          <img
            src={builder(imageObj(test.image[0])).url()}
            alt={test.name}
            className="homepage__image" />}
        <h1>Happy Birthday Lucy!</h1>
      </header>
    </div>
  )
}
