import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddPage extends Component {
	constructor(props) {
		super(props);
		this.createEvent = this.createEvent.bind(this);
	}

  createEvent(e) {
    e.preventDefault();
    this.props.history.push('/confirm');
    
  }

  render() {
  
    return (
      <div className="App">
        <div className="w3-container">
          <form className="w3-container">
            <h2>Create Event</h2>
            <p>Doing something fun? Let others know!</p>
            <input className="w3-input" type="text" placeholder="Title" /><br/>
            <textarea className="w3-input" placeholder="Description/Tags"></textarea><br/>
            <textarea className="w3-input" placeholder="Attendees"></textarea><br/>
            <input className="w3-input" type="text" placeholder="Location" /><br/>
            <p>Start Date:
              <input type="date" name="bday" />
              Time:
              <input type="time" name="usr_time" /><br/>
            </p>
            <p>End Date:
              <input type="date" name="bday" />
              Time:
              <input type="time" name="usr_time" /><br/>
            </p>
            <p><button className="w3-button w3-black" onClick={this.createEvent}>Let the Fun Begin!</button></p>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPage;
