import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

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
            <Header />
        <div class="container">
          <div id='spacer' />
            <h1>Local Event Finder</h1>
            <p>Discover great local events going on right now!</p>

                <div className="ui buttons">
                  <button  className="ui purple button" onClick={this.find}>Find Event</button>
                  <div class="or"></div>
                  <button className="ui positive button" onClick={this.add}>Add Event</button>        
                </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
