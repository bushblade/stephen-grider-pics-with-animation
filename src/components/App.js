import React, { useState } from 'react'
import unsplash from '../api/unsplash'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

const App = () => {
  const [images, setImages] = useState([])

  const onSearchSubmit = async term => {
    setImages([])
    const res = await unsplash.get(`/search/photos`, {
      params: { query: term }
    })
    setImages(res.data.results)
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App
