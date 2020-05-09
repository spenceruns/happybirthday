import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ViewContext } from '../helpers/context'
import './navbar.scss'

export default function NavBar(props) {
  const {view, setView} = useContext(ViewContext)
  return (
    <div className="navbar">
      <Link to="/">
        <div className={`navbar__item ${view === "all" ? "selected" : ""}`} onClick={() => setView("all")}>All</div>
      </Link>
      <Link to="/photos">
        <div className={`navbar__item ${view === "photos" ? "selected" : ""}`} onClick={() => setView("photos")}>Photos</div>
      </Link>
      <Link to="/notes">
        <div className={`navbar__item ${view === "notes" ? "selected" : ""}`} onClick={() => setView("notes")}>Notes</div>
      </Link>
      <Link to="/horoscope">
        <div className={`navbar__item ${view === "horoscope" ? "selected" : ""}`} onClick={() => setView("horoscope")}>Horoscope</div>
      </Link>
    </div>
  )
}
