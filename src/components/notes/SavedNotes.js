import React from 'react'
import Note from './Note'
import NoteSearch from './NoteSearch'
import { Link } from 'react-router-dom'

export default class SavedNotes extends React.Component {
  state = {
    notes: [],
    filteredNotes: [],
    searchValue: ''
  }

  componentDidMount() {
    const localNotes = JSON.parse(localStorage.getItem('notes'))

    if (localNotes) {
      this.setState({ notes: localNotes, filteredNotes: localNotes })
    }
  }

  handleSearch = text => {
    this.setState({ searchValue: text })
  }

  render() {
    let { notes, searchValue } = this.state

    notes =
      notes.filter(note =>
        note.subject.toLowerCase().includes(searchValue.toLowerCase())
      ) || []
    return (
      <div className="notes-app" style={{ textAlign: 'center' }}>
        <h2 className="app-header">Notes</h2>
        <NoteSearch onSearch={text => this.handleSearch(text)} />
        {notes.length > 0 ? (
          notes.map(note => (
            <Note
              note={note}
              key={note.id}
              handleNoteDelete={this.props.handleNoteDelete}
            />
          ))
        ) : (
          <Link
            to="/notes/new"
            className="waves-effect waves-light btn"
            style={{ marginTop: '20px' }}
          >
            CREATE A NOTE
          </Link>
        )}
      </div>
    )
  }
}
