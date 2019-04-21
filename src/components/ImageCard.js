import React from 'react'
import { animated } from 'react-spring'

const ImageCard = props => {
  return (
    <animated.div style={{ ...props.styles }}>
      <img src={props.urls.regular} alt={props.description} />
    </animated.div>
  )
}

export default ImageCard
