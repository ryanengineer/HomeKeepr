import React from 'react'
import NoteForm from './NoteForm'

const NoteCreate = ({ onNoteAdd }) => {
  return (
    <div>
      <h3>Create a Note</h3>
      <NoteForm onNoteAdd={onNoteAdd} />
    </div>
  )
}

export default NoteCreate
