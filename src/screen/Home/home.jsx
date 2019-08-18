import React from 'react';
import './style.css';
import {
  Header,
  MovieCard,
  FilterMenu,
  Pagination
} from './../../component/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storeMovies } from './../../actions/index.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  transformMovieRes(movies, posterURL) {
    return movies.map(movie => {
      movie.poster_path = posterURL.images.base_url + 
        posterURL.images.poster_sizes[1] + movie.poster_path;
      return movie;
    });
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=1d76cf519e61077a326903a4ae9a9f83&page=2')
      .then(movieResponse => movieResponse.json())
      .then(movieRes => {
        fetch('https://api.themoviedb.org/3/configuration?api_key=1d76cf519e61077a326903a4ae9a9f83')
          .then(posterResponse => posterResponse.json())
          .then(posterRes => {
            const transformedMovieRes = this.transformMovieRes(movieRes.results, posterRes);
            console.log(transformedMovieRes);
            this.props.storeMovies(transformedMovieRes);
          })
      })
      .catch(err => this.props.storeMovies([]));
  }
  generateMovieList(movies){
    console.log('generating list - > ', movies[0]);
    return movies.map((movie, i) => {
      return (
        <MovieCard
          key = {i}
          title = {movie.title}
          poster = {movie.poster_path}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        {this.props.movies ? this.generateMovieList(this.props.movies) : null}
        <Pagination totalPages={this.state.totalPages} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {movies: state.movies};
};

// Dispactches Actions
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    storeMovies
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);