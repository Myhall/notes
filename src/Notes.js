import React from 'react';
import Note from './Note';
import base from './rebase';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing : null,
      list : []
    }

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing(noteId) {
    this.setState({
      editing : noteId
    })
  }

  componentDidMount(){
    var notesList = base.syncState('notes', {
      context : this,
      state : 'list',
      asArray : true
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mode !== this.state.mode) {
      this.setState({
        mode : nextProps.mode
      });
    }
  }

  render(){
    return (
      <ul className = 'notes-list list-group'>
        {this.state.list.map((item) => {
          return <Note
                    key = {item.key}
                    author = {item.author}
                    timestamp = {item.timestamp}
                    body = {item.body}
                    mode = {this.state.editing === item.key ? 'edit' : 'view'}
                    onClick = {this.toggleEditing.bind(null, item.key)}/> })}
      </ul>
    )
  }
}

export default Notes;
