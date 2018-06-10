import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

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
      <Header />
      <div id="spacer"></div>
        <div class="ui container">
          <div class="ui centered two column grid">
            <div class="column">
              <div class="ui form">
                <div class="ui dividing header">Create an Event!</div>
                <div class="field">
                  <label>Event Name</label>
                  <input type="text" name="eventTitle" placeholder="Event Name"></input>
                </div>
                <div class="field">
                  <label>Event Location</label>
                  <input type="text" name="eventLocation" placeholder="Event Location"></input>
                </div>
                <div class="two fields">
                <div class="field">
                  <label>Event Start Date & Time</label>
                  <div class="two fields">

                    <div class="field">
                      <input type="date" name="date"></input>
                    </div>
                    <div class="field">
                      <input type="time" name="time"></input>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label>Event End Date & Time</label>
                  <div class="two fields">

                    <div class="field">
                      <input type="date" name="enddate"></input>
                    </div>
                    <div class="field">
                      <input type="time" name="endtime"></input>
                    </div>
                  </div>
                </div>
                </div>
                <div class="field">
                  <label>Description/Tags</label>
                  <textarea rows="2"></textarea>
                </div>
                <button className="ui green button" type="submit" onClick={this.createEvent}>Let the Fun Begin!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPage;
