import React from 'react'

export default class NoteSearch extends React.Component {
  handleSearch = event => {
    this.props.onSearch(event.target.value.toLowerCase())
  }

  render() {
    return (
      <input
        type="search"
        className="search-input"
        placeholder="Search a note..."
        onChange={event => {
          this.handleSearch(event)
        }}
      />
    )
  }
}
