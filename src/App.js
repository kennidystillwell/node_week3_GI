import React, { Component } from 'react';
import CounterApp from './components/CounterApp/CounterApp';
import MovieSearchApp from './components/MovieSearchApp/MovieSearchApp'; 

class App extends Component {
  render() {
    return (
      <div>
        <CounterApp />
        <MovieSearchApp />
      </div>
    );
  }
}

export default App;