import React from 'react'
import './homepage.scss'
import Header from './header'
import NavBar from './navbar'

export default function Homepage(props) {
  return (
    <div className="homepage">
      <Header />
      <div className="homepage__lower">
        <NavBar />
      </div>
    </div>
  )
}
