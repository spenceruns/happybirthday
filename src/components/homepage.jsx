import React, { useState, useEffect } from 'react'
import client from '../helpers/sanity'
import './homepage.scss'
import Preview from './preview'

export default function Homepage(props) {
  const [photos, setPhotos] = useState([])
  const [notes, setNotes] = useState([])
  useEffect(() => {
    const photoQuery = `*[_type == "images"][0..3]`
    const noteQuery = `*[_type == "notes"][0..3]`

    client.fetch(photoQuery).then(data => {
      setPhotos(data);
    })
    client.fetch(noteQuery).then(data => {
      setNotes(data);
    })
  }, [])

  return (
    <div className="homepage">
      <Preview name={'photos'} assets={photos} />
      <Preview name={'notes'} assets={notes} />
      <Preview name={'horoscope'} assets={photos} />
    </div>
  )
}
