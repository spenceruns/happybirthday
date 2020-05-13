import React from 'react'
import './homepage.scss'
import Preview from './preview'

export default function Homepage({ photos, notes }) {
  return (
    <div className="homepage">
      <Preview name={'photos'} assets={photos} />
      <Preview name={'notes'} assets={notes} />
      {/* <Preview name={'horoscope'} assets={photos} /> */}
    </div>
  )
}
