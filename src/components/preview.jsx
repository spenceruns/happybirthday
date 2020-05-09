import React from 'react'
import './preview.scss'
import ShortCard from './short-card'

export default function Preview(props) {
  console.log(props)
  return (
    <div className="preview">
      <div className="preview__header">
        {props.name}
        <div className="preview__button">
          See more
        </div>
      </div>
      <div className="preview__container">
        {props.assets.length !== 0 &&
          props.assets.map(asset => <ShortCard key={asset.name} {...asset} />)}
      </div>
    </div>
  )
}
