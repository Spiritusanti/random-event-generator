import React, { Component } from 'react';

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

class Header extends Component {

    render() {
        return (
            <div class="ui top fixed menu">
                <div class="right menu">
                    <a class="item">Sign Up</a>
                    <a class="item">Help</a>
                </div>
            </div> 
            )
    }
    
}



export default Header;
