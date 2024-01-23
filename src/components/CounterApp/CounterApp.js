import React, { Component } from 'react';
import './CounterApp.css';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div id='counter'>
        <h1>Counter: {this.state.count}</h1>
        <button className='counter-buttons' onClick={this.increment}>Increment</button>
        <button className='counter-buttons'onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;