import React, { useState } from 'react'
import './card.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import LazyLoad from 'react-lazyload';
import Note from './note'
import Modal from './modal'

export default function Card(props) {
  const [display, setDisplay] = useState(false)
  const open = () => {
    setDisplay(true)
  }
  const close = () => {
    setDisplay(false)
  }
  return (
    <>
      {display && <Modal close={close} asset={props} />}
      <div className="card" onClick={open}>
        {props.image &&
        <>
          <LazyLoad placeholder={<img src={builder(imageObj(props.image[0])).height(64).blur(15).url()} alt="placeholder" />} offset={200}>
            <img src={builder(imageObj(props.image[0])).url()}
              alt={props.name} />
          </LazyLoad>
          <div>Submitted by: <span className="card__name">{props.person}</span></div>
        </>}
        {props.abstract &&
          <Note note={props} />}
      </div>
    </>
  )
}
