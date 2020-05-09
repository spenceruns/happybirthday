import React, { useState, useEffect } from 'react'
import client from '../helpers/sanity'
import './homepage.scss'
import Preview from './preview'

export default function Photos(props) {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    const query = `*[_type == "images"]`

    client.fetch(query).then(data => {
      setPhotos(data);
    })
  }, [])

  return (
    <div className="homepage">
      <Preview name={'photos'} assets={photos} />
    </div>
  )
}
