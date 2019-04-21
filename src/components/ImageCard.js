import React, { useState, useEffect, createRef } from 'react'
import { animated, useSpring, config } from 'react-spring'

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
    <animated.div style={{ gridRowEnd: `span ${spans}`, ...props.styles }}>
      <img ref={imageRef} src={props.urls.regular} alt={props.description} />
    </animated.div>
  )
}

export default ImageCard
