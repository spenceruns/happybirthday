import React from 'react'
import './notes.scss'
import ShortCard from './short-card'

export default function Notes({ notes }) {
  for (let i = notes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = notes[i]
    notes[i] = notes[j]
    notes[j] = temp
  }
  return (
    <div className="notes">
      {notes.length !== 0 &&
        notes.map(note => <ShortCard key={note.name} {...note}/>)}
    </div>
  )
}
