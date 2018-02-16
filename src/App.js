import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import base from './rebase';
import Notes from './Notes';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="jumbotron container-fluid text-center App-header">
          <h1>Notes</h1>
          <h5>Simple notes with React and Firebase</h5>
        </header>
          <div className='container'>
            <Notes />
          </div>
      </div>
    );
  }
}

export default App;
