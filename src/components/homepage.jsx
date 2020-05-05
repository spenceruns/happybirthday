import React from 'react'
import './homepage.scss'
import BigButton from './big-button'
import Banner from './banner'
import Button from './button'

export default function Homepage(props) {
  const buttons = [
    {
      key: 2,
      name: "Photos",
      icon: "far fa-images"
    },
    {
      key: 3,
      name: "Countdown",
      icon: "far fa-clock"
    },
    {
      key: 4,
      name: "Horoscope",
      icon: "far fa-moon"
    },
    {
      key: 6,
      name: "Settings",
      icon: "fas fa-cog"
    }
  ]
  return (
    <div className="homepage">
      <h2>Happy Birthday Lucy!</h2>
      <div className="homepage__btn-container">
        <BigButton />
        <Banner />
        {buttons.map(button => <Button  key={button.key} name={button.name} icon={button.icon} />)}
      </div>
    </div>
  )
}
