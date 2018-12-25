import React from 'react'
import './imageList.css'
import ImageCard from './ImageCard'

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(img => (
        <ImageCard key={img.id} {...img} />
      ))}
    </div>
  )
}

export default ImageList
