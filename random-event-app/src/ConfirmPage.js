import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class ConfirmPage extends Component {
  render() {
  
    return (
      <div className="App">
      <Header />
        <div class="ui container">
          <div id='spacer' />
          <h1>Event Added!</h1>
          <a class="ui purple button" href='/'>Return Home</a>
        </div>
      </div>
    );
  }
}

export default ConfirmPage;
