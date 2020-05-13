import React from 'react'
import './short-card.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import LazyLoad from 'react-lazyload';
import ReactLoading from 'react-loading';
import Note from './note'

export default function ShortCard(props) {
  return (
    <div className="short-card">
      { props.image &&
      <LazyLoad placeholder={<ReactLoading type={"bars"} color={"black"}/>}>
        <img src={builder(imageObj(props.image[0])).url()}
          alt={props.name}
        />
      </LazyLoad> }
      {props.abstract &&
        <Note note={props}/>}
    </div>
  )
}
