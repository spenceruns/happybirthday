import React from 'react'
import './photos.scss'
import Card from './card'

export default function Photos({ photos }) {
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = photos[i]
    photos[i] = photos[j]
    photos[j] = temp
  }
  return (
    <div className="photos">
      {photos.length !== 0 &&
        photos.map(photo => <Card key={photo.name} {...photo} />)}
    </div>
  )
}
