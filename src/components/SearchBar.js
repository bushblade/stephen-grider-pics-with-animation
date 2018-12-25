import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  state = { term: '' }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.term)
  }

  render() {
    const {
      state: { term },
      onFormSubmit
    } = this
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
}

export default SearchBar
