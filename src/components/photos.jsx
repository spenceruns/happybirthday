import React, { useState, useEffect } from 'react'
import client from '../helpers/sanity'
import builder from '../helpers/image-url'
import imageObj from '../helpers/imageBuilder'

export default function Photos(props) {
  const [test, setTest] = useState([])
  useEffect(() => {
    const query = `*[_type == "images"]`

    client.fetch(query).then(data => {
      setTest(data[0]);
    })
  }, [])
  return (
    null
  )
}
