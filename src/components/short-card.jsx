import React from 'react'
import './short-card.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'

export default function ShortCard(props) {
  return (
    <div className="short-card">
      { props.image &&
        <img src={builder(imageObj(props.image[0])).url()}
        alt={props.name}
      />}
    </div>
  )
}
