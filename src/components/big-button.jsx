import React from 'react'
import './big-button.scss'

export default function BigButton(props) {
  return (
    <div className="big-button">
      <div className="big-button__icon">
        <i className="far fa-envelope"></i>
      </div>
        <h3 className="big-button__text">Notes</h3>
    </div>
  )
}
