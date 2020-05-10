import React, { useContext } from 'react'
import { PhotoContext } from '../helpers/context'
import './homepage.scss'
import Preview from './preview'

export default function Homepage(props) {
  let { photos } = useContext(PhotoContext)
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = photos[i]
    photos[i] = photos[j]
    photos[j] = temp
  }
  photos = photos.slice(0, 4)
  return (
    <div className="homepage">
      <Preview name={'photos'} assets={photos} />
      <Preview name={'notes'} assets={photos} />
      <Preview name={'horoscope'} assets={photos} />
    </div>
  )
}
