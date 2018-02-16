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
      id : id,
      author : author,
      timestamp : timestamp,
      body : body
    });
  }

  render() {
    return (
      <div>
        <li key={this.state.id} className='note list-group-item container'>
          <div className='row'>
            <div className='note-author col'>Author: {this.state.author}</div>
            <div className='note-timestamp col'>{new Date(this.state.timestamp).toString()}</div>
          </div>
          <div className='row'>
            <div className='note-body col'>{this.state.body}</div>
          </div>
        </li>
      </div>
    )
  }
}

export default Note;
