import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ConfirmPage extends Component {
  render() {
  
    return (
      <div className="App">
        <div class="w3-container">
          <div id='spacer' />
          <h1>Event Added!</h1>
          <a href='/'>Return to Home</a>
        </div>
      </div>
    );
  }
}

export default ConfirmPage;
