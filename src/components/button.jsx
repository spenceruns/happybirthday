import React from 'react'
import './button.scss'

export default function Button(props) {
  return (
    <div className="button">
      <div className="button__icon">
        <i className={props.icon}></i>
      </div>
        <h3 className="button__text">{props.name}</h3>
    </div>
  )
}
