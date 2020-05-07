import React from 'react'
import { Link } from "react-router-dom";
import './homepage.scss'
import BigButton from './big-button'
import Banner from './banner'
import Button from './button'

export default function Homepage(props) {
  return (
    <div className="homepage">
      <h2>Happy Birthday Lucy!</h2>
      <div className="homepage__btn-container">
        <BigButton />
        <Banner />
        <Link className="sizing" to="/photos">
          <Button name="Photos" icon="far fa-images" />
        </Link>
        <Link className="sizing" to="/horoscope">
          <Button name="Horoscope" icon="far fa-moon" />
        </Link>
        <Link className="sizing" to="/countdown">
          <Button name="Countdown" icon="far fa-clock" />
        </Link>
        <Link className="sizing" to="/settings">
          <Button name="Settings" icon="fas fa-cog" />
        </Link>
      </div>
    </div>
  )
}
