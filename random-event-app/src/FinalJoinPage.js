import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class FinalJoinPage extends Component {
  render() {
  
    return (
      <div className="App">
        <Header />
        <div class="ui container">
          <div id='spacer' />
          <h1>Event Joined!</h1>
          <a href='/'>Return to Home</a>
        </div>
      </div>
    );
  }
}

export default FinalJoinPage;
