import React from 'react';
import Note from './Note';
import base from './rebase';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : []
    }
  }

  componentDidMount(){
    var notesList = base.syncState('notes', {
      context : this,
      state : 'list',
      asArray : true
      });
    }

  render(){
    return (
      <ul className='notes-list'>
        {this.state.list.map((item) => {
          return <Note  key={item.key} author={item.author} timestamp={item.timestamp} body ={item.body} />
        })}
      </ul>
    )
  }
}

export default Notes;
