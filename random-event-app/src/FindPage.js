import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './event';
import Header from './Header';

class FindPage extends Component {

  constructor(props){
    super(props);
    this.incrementEvent = this.incrementEvent.bind(this);
    this.state = {
      currentEvent: 0,
      currentEvents: [
      {
        "name" : "Soccer Pickup Game",
      "Tags" : ["soccer", "sports", "outdoor", "new friends"],
      "DateTime": "July 16th 2018 1:30pm",
      "Attendees": "2",
      "Location": "Emory Field | Kirkland, WA"
      },
      {
        "name" : "Kids day @ Sounders",
      "Tags" : ["soccer", "sports", "event", "family", "outdoor"],
      "DateTime": "July 18th 2018 1:30pm",
      "Attendees": "8",
      "Location": "CenturyLink Field | Seattle, WA"
      },
      {
        "name": "Tennis & Lunch",
        "Tags":["family friendly", "instructor", "outdoor", "lunch"],
        "DateTime": "June 12th 2018 11:30am",
        "Attendees": "2",
        "Location": "Discovery Park"
      },
      {
        "name": "Steam Train",
        "Tags": ["family friendly", "$25", "trains", "outdoor", "lunch"],
        "DateTime": "July 1st 2018 10:00am",
        "Attendees": "5",
        "Location": "Snoqualimie, WA"
      },
      {
        "name": "Seattle Art Museum",
        "Tags": ["family friendly", "free", "art", "culture", "museum"],
        "DateTime": "June 7th 2018 1:30pm",
        "Attendees": "3",
        "Location": "Seattle, WA"
      }
    ]
    }
  }

  incrementEvent(e){
    e.preventDefault();
    this.forceUpdate();

    this.setState({
      currentEvent: (this.state.currentEvent + 1) % 4
    })
    console.log(this.state.currentEvent);
  }
  renderEvent(i){
    return(
          <Event handler={this.incrementEvent} eventName={this.state.currentEvents[i].name} eventLocation={this.state.currentEvents[i].Location} tags={this.state.currentEvents[i].Tags} eventDate={this.state.currentEvents[i].DateTime} eventAttendees={this.state.currentEvents[i].Attendees}/>
    )
  }

  render() {

    return (
        <div className="App">
            <Header />
            <div id='spacer' />

            <div class="ui container">
            
              <div class="ui two column centered grid">
                <div class="column">
                <div class="ui left aligned huge header">Your Result</div>
                  {this.renderEvent(this.state.currentEvent)}
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default FindPage;
