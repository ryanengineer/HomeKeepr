import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Note = ({ note, handleNoteDelete, history }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{note.subject}</span>
            <p>{note.text}</p>
          </div>
          <div className="card-action" key={note.id}>
            <Link
              to={{
                pathname: `/notes/edit/${note.id}`,
                state: {
                  note
                }
              }}
            >
              Edit
            </Link>

            <button
              className="waves-effect waves-light btn-small red"
              onClick={() => {
                handleNoteDelete(note)
                history.push('/')
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Note)
