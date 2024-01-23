import React, { Component } from 'react';
import axios from 'axios';
import './MovieSearchApp.css'

class MovieSearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: '',
      searchResults: [],
      similarMovies: [],
    };
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { movieTitle } = this.state;
  
    try {
      const response = await axios.get(`http://localhost:3001/search`, {
        params: { movieTitle },
      });
  
      const movies = response.data;
      this.setState({ searchResults: movies });
    } catch (error) {
      console.error(error);
    }
  };

  handleLinkClick = async (event) => {
    event.preventDefault();

    if (event.target.tagName === 'A') {
      const movieId = event.target.dataset.movieid;

      try {
        const response = await axios.get(`/similar/${movieId}`);
        const similarMovies = response.data;

        this.setState({ similarMovies });
      } catch (error) {
        console.error(error);
      }
    }
  };

  handleInputChange = (event) => {
    this.setState({ movieTitle: event.target.value });
  };

  render() {
    const { movieTitle, searchResults, similarMovies } = this.state;

    return (
      <div id='movies'>

        <h2>Similar Movies:</h2>

        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={movieTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Search</button>
        </form>

        <ul id="resultsList" onClick={this.handleLinkClick}>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <a href="#" data-movieid={movie.id}>{movie.title}</a>
            </li>
          ))}
        </ul>


        <ul>
          {similarMovies.map(similarMovie => (
            <li key={similarMovie.id}>{similarMovie.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MovieSearchApp;