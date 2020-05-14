import React from 'react'
import { createPortal } from 'react-dom'
import './modal.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'
import Note from './note'

export default function Modal(props) {
  return createPortal(
    <div className="modal">
      <div className="modal__shadow" onClick={props.close}/>
      <span className='modal__x' onClick={props.close}>&times;</span>
      <div className="modal__content">
        {props.asset.image &&
          <img src={builder(imageObj(props.asset.image[0])).url()} alt={props.name} />}
        {props.asset.abstract &&
          <Note note={props.asset} />}
      </div>
    </div>, document.getElementById("modal-root"))
}
