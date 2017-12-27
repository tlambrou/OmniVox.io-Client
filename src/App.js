import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer, toggleVote } from './api'

class App extends Component {

  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));

    this.state = {
      timestamp: 'no timestamp yet',
      vote: false
    };

  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
        <h3>
          The current vote is set to: {this.state.vote ? `ON` : 'OFF' }
        </h3>
        <button onClick={toggleVote((this.state.vote) => {this.setState({ vote: !currentVote })})}>Toggle Me</button>
      </div>
    );
  }
}

export default App;
