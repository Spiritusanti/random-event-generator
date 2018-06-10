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

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: props.eventName,
            eventLocation: props.eventLocation,
            eventDate: props.eventDate,
            eventAttendees: props.eventAttendees,
            tags: props.tags
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            eventName: nextProps.eventName,
            eventLocation: nextProps.eventLocation,
            eventDate: nextProps.eventDate,
            eventAttendees: nextProps.eventAttendees,
            tags: nextProps.tags
        });
    }

    render() {
        return (
            <div className="ui centered cards">
                <div class="ui fluid card">
                    <div class="content">
                        <div class="ui dividing left aligned huge header">{this.state.eventName}</div>
                        <div class="meta">
                            Location: {this.state.eventLocation}
                            <br/>
                            Date: {this.state.eventDate}
                        </div>
                        <div class="ui left aligned description">
                            <div class="ui horizontal list">
                                <div class="item">Tags: </div>
                                <div class="item">
                            <div class="ui blue labels">
                                {this.state.tags.map((answer, i) => {
                                console.log("Entered");
                                return <a className="ui label">{answer}</a>

                                })}

                            </div>
                            </div>
                                </div>
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="ui two buttons">
                            <button class="ui basic green button" >Join</button>
                            <button class="ui basic red button" onClick={this.props.handler}>Find Another</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



export default Event;
