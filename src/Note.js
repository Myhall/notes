import React from 'react';
import base from './rebase';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid : '',
      author : '',
      timestamp : '',
      body : '',
      mode : ''
    }
    this.renderNote = this.renderNote.bind(this);
    this.renderInEditMode = this.renderInEditMode.bind(this);
    this.renderInViewMode = this.renderInViewMode.bind(this);
  }

  componentDidMount() {
    const {uid, author, timestamp, body, mode} = this.props;
    this.setState({
      uid : uid,
      author : author,
      timestamp : timestamp,
      body : body,
      mode : mode
    });
  }

  disableEditMode() {
    this.setState({
      mode : 'view'
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const newNote = {
      uid : this.state.uid,
      author : this.state.author,
      timestamp : this.state.author,
      body : this.state.body};
    this.props.onNoteSubmit(newNote);
    this.disableEditMode();
  }

  handleChange(event) {
    this.setState({
      body : event.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mode !== this.state.mode) {
      this.setState({
        mode : nextProps.mode
      });
    }
  }

  renderNote() {
    if (this.state.mode === 'edit') {
      return this.renderInEditMode();
    } else {
      return this.renderInViewMode();
    }
  }

  renderInEditMode() {
    return(
      <div>
        <div className = 'row'>
          <div className = 'note-author col'>Author: {this.state.author}</div>
        </div>
        <div className = 'row input-group'>
          <input className = 'note-body-edit col'
                 type = 'text'
                 name = 'Body'
                 defaultValue = {this.state.body}
                 onChange = {this.handleChange.bind(this)}
                />
          <div className = 'btn-group btn-sm' >
            <button className = 'btn btn-success'
                    type = 'submit'
                    value = "Submit"
                    onClick = {this.handleSubmit.bind(this)}> OK </button>
            <button className = 'btn btn-danger'
                    onClick = {this.disableEditMode.bind(this)}> Cancel </button>
          </div>
        </div>
      </div>
    )
  }

  renderInViewMode() {
    return(
      <div>
        <div className = 'row'>
          <div className = 'note-author col'>Author: {this.state.author}</div>
          <div className = 'note-timestamp col'>{new Date(this.state.timestamp).toString()}</div>
        </div>
        <div className = 'row'>
          <div className = 'note-body col'>{this.state.body}</div>
        </div>
      </div>
  )
  }

  render() {
    return (
      <div>
        <li key = {this.state.uid}
            className = 'note list-group-item container'
            onClick = {this.props.onClick}>
          {this.renderNote()}
        </li>
      </div>
    )
  }
}

export default Note;
