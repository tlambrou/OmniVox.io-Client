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

    toggleVote( (currentVote) => this.setState({ vote: !currentVote }))

    this.state = {
      timestamp: 'no timestamp yet',
      toggleVote: false
    };

  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
        <h3>
          The current vote is set to: {this.state.toggleVote ? `ON` : 'OFF' }
        </h3>
        <button onClick={toggleVote((currentVote) => {this.setState({ vote: !currentVote })})}>Toggle Me</button>
      </div>
    );
  }
}

export default App;
