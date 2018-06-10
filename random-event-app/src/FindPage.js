import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './event'

class FindPage extends Component {

  constructor(props){
    super(props);
    this.incrementEvent = this.incrementEvent.bind(this);
    this.state = {
      currentEvent: 1,
      currentEvents: [
      /** "event1": **/{
        "name" : "Strawberry Festival",
        "Tags" : ["family friendly", "outdoor"],
        "Date-Time": ["May 24th 2018, 130pm"],
        "Attendees": ["Lin", "Child_1", "Child_2", "George", "Child_3"],
        "Location": "Marysville WA"
      },
        /**"event2": **/{
        "name": "Swimming Lessons",
        "Tags": ["family friendly", "indoor", "$5"],
        "Date-Time": ["June 6th 2018, 3pm"],
        "Attendees": ["Lin", "Child_1", "Child_2", "Darcy", "Child_3", "child_4"],
        "Location": "Seattle YMCA"
      },
        /**event3: **/{
        "name": "Tennis",
        "Tags":["family friendly", "instructor available", "outdoor", "lunch"],
        "Date-Time": ["June 12th 2018, 1130am"],
        "Attendees": ["Lin", "Child_1", "Child_2", "George", "Darcy", "Child_3", "child_4"],
        "Location": "Discovery Park"
      },
      /**event4: **/{
        "name": "Steam Train",
        "Tags": ["family friendly", "$25", "thomas the train engine", "outdoor", "lunch"],
        "Date-Time": ["July 1st 2018, 10am"],
        "Attendees":["Lin", "Child_1", "Child_2", "George", "Darcy", "Child_3", "child_4"],
        "Location": "Snoqualimie wa"
      },
      /**event5: **/{
        "name": "Seattle Art Museum",
        "Tags": ["family friendly", "free", "art", "culture"],
        "Date-Time": "June 7th 2018, 130pm",
        "Attendees": ["Lin", "Child_1", "child_4"],
        "Location": "Seattle WA"
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
          <Event handler={this.incrementEvent} eventName={this.state.currentEvents[i].name} eventLocation={this.state.currentEvents[i].Location} tags={this.state.currentEvents[i].Tags}/>
    )
  }

  render() {

    return (
      <div className="App">
        <div class="w3-container">
          <div id='spacer' />
          {this.renderEvent(this.state.currentEvent)}
        </div>
      </div>
    );
  }
}

export default FindPage;
