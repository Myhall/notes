import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import base from './rebase';
import Notes from './Notes';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Notes</h1>
        </header>
          <div className='container'>
            <Notes />
          </div>
      </div>
    );
  }
}

export default App;
