import React from 'react'
import './card.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'

export default function Card(props) {
  // console.log(props)
  return (
    <div className="card">
      {props.image &&
        <img src={builder(imageObj(props.image[0])).url()}
          alt={props.name}
        />}
      <div>Submitted by: <span className="card__name">{props.person}</span></div>
    </div>
  )
}
