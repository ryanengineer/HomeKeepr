import React from 'react'
import NoteForm from './NoteForm'
import { withRouter } from 'react-router-dom'

const NoteEdit = props => {
  const note = props.location.state.note
  return (
    <div>
      <h3>Edit a Note</h3>
      <NoteForm onNoteAdd={props.onNoteAdd} noteValues={note} />
    </div>
  )
}

export default withRouter(NoteEdit)
