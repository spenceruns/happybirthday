import React from 'react'
import './card.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import Note from './note'

export default function Card(props) {
  return (
    <div className="card">
      {props.image &&
      <>
        <img src={builder(imageObj(props.image[0])).url()}
          alt={props.name}/>
        <div>Submitted by: <span className="card__name">{props.person}</span></div>
      </>}
      {props.abstract &&
        <Note note={props} />}
    </div>
  )
}
