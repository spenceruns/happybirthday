import React from 'react'
import './homepage.scss'
import Preview from './preview'

export default function Homepage({ photos }) {
  return (
    <div className="homepage">
      <Preview name={'photos'} assets={photos} />
      <Preview name={'notes'} assets={photos} />
      <Preview name={'horoscope'} assets={photos} />
    </div>
  )
}
