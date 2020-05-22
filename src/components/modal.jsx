import React, {useLayoutEffect} from 'react'
import { createPortal } from 'react-dom'
import './modal.scss'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'

export default function Modal(props) {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = originalStyle;
  }, []);
  return createPortal(
    <div className="modal">
      <div className="modal__shadow" onClick={props.close}/>
      <span className='modal__x' onClick={props.close}>&times;</span>
      <div className="modal__content">
        {props.asset.image &&
          <img src={builder(imageObj(props.asset.image[0])).url()} alt={props.name} />}
        {props.asset.abstract &&
          <div className="modal__note">
            {props.asset.abstract}
          <br/>
          <div className="modal__note__name">Love,<br/><span>{props.asset.name}</span></div>
          </div>}
      </div>
    </div>, document.getElementById("modal-root"))
}
