import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
class EventApp extends Component {
  render() {
    return (
      <div className="EventApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App Name</h1>
        </header>
        <Event eventName={"Cool Event"} eventLocation={"Seattle"} tags={["Tag", "Tag2"]}/>
      </div>
    );
  }
}*/

class Event extends Component{
  constructor(props){
    super(props);
    this.state = {
      eventName: props.eventName,
      eventLocation: props.eventLocation,
      eventDate: props.eventDate,
      eventAttendees: props.eventAttendees,
      tags: props.tags
    }
  }

  render(){
    return(
      <div className="w3-row w3-padding">
        <div className="w3-container w3-quarter"></div>
        <div className="w3-container w3-half">
          <div className="w3-card">
            <div className="w3-container w3-Left">
              <h1>{this.state.eventName}</h1>
              <h3>{this.state.eventLocation}</h3>
              <p>Description: Some description of this activity</p>
              <div className="w3-container">

                <div className="w3-row">
                  <p>Tags:
                  {this.state.tags.map((answer, i) => {
                    console.log("Entered");
                    return <span className="w3-tag">{answer}</span>

                  })}
                  </p>
                </div>
              </div>
              <div className="w3-row w3-padding">
                <div className="w3-container w3-half">
                  <button className="w3-button w3-block w3-red">Find Another</button>
                </div>
                <div className="w3-container w3-half">
                  <button className="w3-button w3-block w3-green">Join</button>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="w3-container w3-quarter"></div>

      </div>
    )
  }
}



export default Event;
