import React, { useState, useEffect } from 'react'
import client from '../helpers/sanity'
import './homepage.scss'
import NavBar from './navbar'
import Preview from './preview'

export default function Homepage(props) {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    const query = `*[_type == "images"][0..3]`

    client.fetch(query).then(data => {
      setPhotos(data);
    })
  }, [])
  return (
    <div className="homepage">
      <NavBar />
      <Preview name={'Photos'} assets={photos} />
      <Preview name={'Notes'} assets={photos} />
      <Preview name={'Horoscope'} assets={photos} />
    </div>
  )
}
