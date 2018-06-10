import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LandingPage extends Component {
	constructor(props) {
		super(props);
    this.find = this.find.bind(this);
    this.add = this.add.bind(this);
	}

  find(e) {
    e.preventDefault();
    this.props.history.push('/find');
    
  }

  add(e) {
    e.preventDefault();
    this.props.history.push('/add');
    
  }

  render() {
  
    return (
      <div className="App">
        <div class="w3-container">
          <div id='spacer' />
          <h1>Local Event Finder</h1>
          <p>Discover great local events going on right now!</p>
          <button id='btnFind' className="w3-btn w3-purple" onClick={this.find}>Find Event</button>
          <br />
          <button id='btnAdd' className="w3-btn w3-lime" onClick={this.add}>Add Event</button>        
        </div>
      </div>
    );
  }
}

export default LandingPage;
