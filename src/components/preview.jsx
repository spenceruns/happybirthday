import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ViewContext } from '../helpers/context'
import './preview.scss'
import ShortCard from './short-card'
import Loading from './loading';

export default function Preview(props) {
  const { setView } = useContext(ViewContext)
  const name = props.name.charAt(0).toUpperCase() + props.name.slice(1)
  return (
    <div className="preview">
      <div className="preview__header">
        {name}
        <Link to={props.name} onClick={() => setView(props.name)}>
          <div className="preview__button">
            See more
          </div>
        </Link>
      </div>
      <div className="preview__container">
        {props.assets.length !== 0 ?
          props.assets.map(asset => <ShortCard key={asset.name} {...asset} />)
        :
        <Loading />}
      </div>
    </div>
  )
}
