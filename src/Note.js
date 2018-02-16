import React from 'react';
import base from './rebase';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '',
      author : '',
      timestamp : '',
      body : ''
    }
  }
  componentDidMount() {
    const {id, author, timestamp, body} = this.props;
    this.setState({
      id:id,
      author:author,
      timestamp:timestamp,
      body:body
    });
  }
  render() {
    return (
      <div>
        <li key={this.state.id} className='note'>
          <div className='note-author'>Author: {this.state.author}</div>
          <div className='note-body'>Text: {this.state.body}</div>
          <div className='note-timestamp'>{new Date(this.state.timestamp).toString()}</div>
        </li>
      </div>
    )
  }
}

export default Note;
