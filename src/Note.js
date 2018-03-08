import React from 'react';
import base from './rebase';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '',
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
    const {id, author, timestamp, body, mode} = this.props;
    this.setState({
      id : id,
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

  handleChange() {

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
                />
          <div className = 'btn-group btn-sm' >
            <button className = 'btn btn-success'
                    type = 'submit'
                    value = "Submit"
                    onClick = {this.handleChange()}> OK </button>
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
        <li key = {this.state.id}
            className = 'note list-group-item container'
            onClick = {this.props.onClick}>
          {this.renderNote()}
        </li>
      </div>
    )
  }
}

export default Note;
