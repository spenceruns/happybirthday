import React from 'react'
import './short-card.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import Note from './note'

export default function ShortCard(props) {
  return (
    <div className="short-card">
      { props.image &&
        <img src={builder(imageObj(props.image[0])).url()}
        alt={props.name}
      />}
      {props.abstract &&
        <Note note={props}/>}
    </div>
  )
}
