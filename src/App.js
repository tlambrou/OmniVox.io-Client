import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer, toggleVote } from './api'

class App extends Component {

  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => {
      console.log('SUBSCRIBETOTIMER CB called')
      this.setState({timestamp })
    });



    this.state = {
      timestamp: 'no timestamp yet',
      vote: false
    };
  }

  toggle() {
    toggleVote(this.state.vote, (err, toggledVote) => {
      console.log('toggleVote CB called')
      this.setState({vote: toggledVote})
    })
  }


  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
        <h3>
          The current vote is set to: {this.state.vote ? `TRUE` : 'FALSE' }
        </h3>
        <button onClick={this.toggle.bind(this)}>Click me</button>
      </div>
    );
  }
}

export default App;
