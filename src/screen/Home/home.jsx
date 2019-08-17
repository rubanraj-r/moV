import React from 'react';
import './style.css';
import {
  Header,
  MovieCard,
  FilterMenu,
  Pagination
} from './../../component/index.js';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      totalPages: 0
    };
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=1d76cf519e61077a326903a4ae9a9f83&page=1')
      .then(response => response.json())
      .then(res => {
        this.setState(() => {
          return { movies: res.results, totalPages: res.totalPages }
        });
      })
      .catch(err => console.log(err));
  }
  generateMovieList(movies){
    return movies.map((movie, i) => {
      return (
        <MovieCard
          key = {i}
          title = {movie.title}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.generateMovieList(this.state.movies)}
        <Pagination totalPages={this.state.totalPages} />
      </div>
    );
  }
}