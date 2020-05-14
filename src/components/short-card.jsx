import React, { useState } from 'react'
import './short-card.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import LazyLoad from 'react-lazyload';
import ReactLoading from 'react-loading';
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
        <LazyLoad placeholder={<ReactLoading type={"bars"} color={"black"}/>}>
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
