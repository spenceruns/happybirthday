import React from 'react'
import './note.scss'

export default function Note({ note }) {
  return (
    <div className="note">
      {note.name}
      <hr className="note__bar1"></hr>
      <hr className="note__bar2"></hr>
      <hr className="note__bar3"></hr>
      <hr className="note__bar4"></hr>
      <hr className="note__bar5"></hr>
    </div>
  )
}
