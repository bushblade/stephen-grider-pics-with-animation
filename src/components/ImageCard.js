import React, { useState, useEffect, createRef } from 'react'

const ImageCard = props => {
  const [spans, set] = useState(0)
  const imageRef = createRef()

  const setSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height + 10)
    set(spans)
  }

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans)
  }, [])

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={props.urls.regular} alt={props.description} />
    </div>
  )
}

export default ImageCard
