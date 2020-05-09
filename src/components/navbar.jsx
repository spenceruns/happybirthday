import React, { useState } from 'react'
import './navbar.scss'

export default function NavBar(props) {
  const [selected, setSelected] = useState("all")

  return (
    <div className="navbar">
      <div className={`navbar__item ${selected === "all" ? "selected" : ""}`} onClick={() => setSelected("all")}>All</div>
      <div className={`navbar__item ${selected === "photos" ? "selected" : ""}`} onClick={() => setSelected("photos")}>Photos</div>
      <div className={`navbar__item ${selected === "notes" ? "selected" : ""}`} onClick={() => setSelected("notes")}>Notes</div>
      <div className={`navbar__item ${selected === "horoscope" ? "selected" : ""}`} onClick={() => setSelected("horoscope")}>Horoscope</div>
    </div>
  )
}
