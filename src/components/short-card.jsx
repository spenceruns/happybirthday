import React, { useState } from 'react'
import './short-card.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import LazyLoad from 'react-lazyload';
import Note from './note'
import Modal from './modal'

export default function ShortCard(props) {
  const [loaded, setLoaded] = useState(false)
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
      <div className="short-card" onClick={open}>
        { props.image &&
          <LazyLoad placeholder={<img src={builder(imageObj(props.image[0])).height(64).blur(15).url()} alt="placeholder"/>} offset={200}>
            <img src={builder(imageObj(props.image[0])).url()}
              alt={props.name}
              style={loaded ? {} : {display: 'none'}}
              onLoad={() => setLoaded(true)}
            />
          </LazyLoad> }
        {props.abstract &&
          <Note note={props}/>}
      </div>
    </>
  )
}
