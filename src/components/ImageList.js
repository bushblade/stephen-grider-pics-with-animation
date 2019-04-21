import React from 'react'
import { useTrail, config } from 'react-spring'

import './imageList.css'
import ImageCard from './ImageCard'

const ImageList = ({ images }) => {
  const trail = useTrail(images.length, {
    opacity: 1,
    transform: `scale(1)`,
    from: {
      opacity: 0,
      transform: `scale(0)`
    },
    config: config.stiff
  })

  return (
    <div className="image-list">
      {trail.map((styles, index) => (
        <ImageCard key={images[index].id} {...images[index]} styles={styles} />
      ))}
    </div>
  )
}

export default ImageList
