import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('')

  const onFormSubmit = e => {
    e.preventDefault()
    onSearchSubmit(term)
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
        </div>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
}

export default SearchBar
