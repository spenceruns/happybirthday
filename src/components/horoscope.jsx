import React, { useState, useEffect } from 'react'
import './horoscope.scss'

export default function Horoscope(props) {
  const [horoscope, setHoroscope] = useState()
  const sign = 'Taurus'
  useEffect(() => {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    fetch(URL, {
      method: 'POST'
    })
      .then(data => data.json())
      .then(horoscopeData => setHoroscope(horoscopeData))
  }, [])
  console.log(horoscope)
  return (
    <div className="horoscope">
      <div className="horoscope__title">Horoscope</div>
      <div className="horoscope__sign">{sign}</div>
      {!horoscope ? <div>Loading</div> : <Loaded horoscope={horoscope} />}
    </div>
  )
}

function Loaded({ horoscope }) {
  return (
    <>
      <div className="horoscope__container">
        <div className="horoscope__name">Date: <span className="horoscope__text">{horoscope.current_date}</span></div>
        <div className="horoscope__name">Color: <span className="horoscope__text">{horoscope.color}</span></div>
        <div className="horoscope__name">Lucky Number: <span className="horoscope__text">{horoscope.lucky_number}</span></div>
        <div className="horoscope__name">Lucky Time: <span className="horoscope__text">{horoscope.lucky_time}</span></div>
        <div className="horoscope__name">Mood: <span className="horoscope__text">{horoscope.mood}</span></div>
        <div className="horoscope__name">Compatibility: <span className="horoscope__text">{horoscope.compatibility}</span></div>
      </div>
    <div className="horoscope__text">{horoscope.description}</div>
    </>
  )
}
