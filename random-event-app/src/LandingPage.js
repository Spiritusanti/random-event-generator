import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LandingPage extends Component {
  render() {
  
    return (
      <div className="App">
        <div class="w3-container">
          <div id='spacer' />
          <h1>Local Event Finder</h1>
          <p>Discover great local events going on right now!</p>
          <button id='btnFind' className="w3-btn w3-purple">Find Event</button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
