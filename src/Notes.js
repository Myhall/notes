import React from 'react';
import Note from './Note';
import base from './rebase';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: null,
      list: []
    }

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing(noteId) {
    this.setState({editing: noteId})
  }

  handleNoteChange(changedNote) {
    console.log(this.state);
    console.log(changedNote);

    this.setState({list : {changedNote}});
    // this.setState({
    //   list: {
    //     uid: {
    //       "author": changedNote.author,
    //       "body": changedNote.body,
    //       "timestamp": changedNote.timestamp
    //     }
    //   }
    // });
  }

  componentDidMount() {
    var notesList = base.syncState('notes', {
      context: this,
      state: 'list',
      asArray: true
    });
  }

  render() {
    return (<ul className='notes-list list-group'>
      {
        this.state.list.map((item) => {
          return <Note key={item.key}
                       uid={item.key}
                       author={item.author}
                       timestamp={item.timestamp}
                       body={item.body}
                       mode = {this.state.editing === item.key ? 'edit' : 'view'}
                       onClick={this.toggleEditing.bind(null, item.key)}
                       onNoteSubmit={this.handleNoteChange.bind(this)}/>
        })
      }
    </ul>)
  }
}

export default Notes;
