import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import SavedNotes from './notes/SavedNotes'
import NoteEdit from './notes/NoteEdit'
import NoteCreate from './notes/NoteCreate'

class App extends Component {
  state = {
    notes: [],
    searchValue: '',
    filteredNotes: []
  }

  componentDidUpdate() {
    this.saveNoteInLocalStorage()
  }

  handleNoteAdd = newNote => {
    let newNotes = this.state.notes.filter(note => note.id !== newNote.id)
    newNotes.unshift(newNote)
    this.setState({ notes: newNotes })
  }

  handleNoteDelete = noteIdToBeDeleted => {
    const newNotes = this.state.notes.filter(
      note => note.id !== noteIdToBeDeleted.id
    )
    this.setState({ notes: newNotes })
  }

  saveNoteInLocalStorage = () => {
    localStorage.setItem('notes', JSON.stringify(this.state.notes))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact component={Landing} />
          <Route
            path="/notes"
            exact
            component={() => (
              <SavedNotes handleNoteDelete={this.handleNoteDelete} />
            )}
          />
          <Route
            path="/notes/edit/:id"
            exact
            component={() => <NoteEdit onNoteAdd={this.handleNoteAdd} />}
          />
          <Route
            path="/notes/new"
            component={() => <NoteCreate onNoteAdd={this.handleNoteAdd} />}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
