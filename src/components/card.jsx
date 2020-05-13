import React from 'react'
import './card.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import LazyLoad from 'react-lazyload';
import ReactLoading from 'react-loading';
import Note from './note'

export default function Card(props) {
  return (
    <div className="card">
      {props.image &&
      <>
        <LazyLoad placeholder={<ReactLoading type={"bars"} color={"black"} />}>
          <img src={builder(imageObj(props.image[0])).url()}
            alt={props.name} />
        </LazyLoad>
        <div>Submitted by: <span className="card__name">{props.person}</span></div>
      </>}
      {props.abstract &&
        <Note note={props} />}
    </div>
  )
}
