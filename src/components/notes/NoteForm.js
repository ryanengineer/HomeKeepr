import React from 'react'
import uuidv4 from 'uuid/v4'
import { withRouter } from 'react-router-dom'

class NoteForm extends React.Component {
  state = {
    subject: '',
    text: '',
    id: ''
  }

  componentDidMount() {
    if (this.props.noteValues) {
      const { subject, text } = this.props.noteValues
      this.setState({
        subject,
        text
      })
    }
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubjectChange = event => {
    this.setState({ subject: event.target.value })
  }

  handleNoteSubmit = () => {
    const { subject, text } = this.state
    let id
    if (this.props.noteValues) {
      id = this.props.noteValues.id
    } else {
      id = uuidv4()
    }

    this.props.onNoteAdd({
      subject,
      text,
      id
    })
    this.setState({ subject: '', text: '' })
    this.props.history.push('/')
  }

  render() {
    const { subject, text } = this.state

    return (
      <>
        <div className="row">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="subject"
                type="text"
                onChange={this.handleSubjectChange}
                value={subject}
                className="validate"
                placeholder="Subject"
              />
            </div>
          </div>

          <div className="input-field col s12">
            <input
              placeholder="Write your note here"
              className="materialize-textarea"
              value={text}
              onChange={this.handleTextChange}
            />
          </div>
        </div>
        <button
          className="waves-effect waves-light btn"
          onClick={this.handleNoteSubmit}
        >
          Save
        </button>
      </>
    )
  }
}

export default withRouter(NoteForm)
