import React from 'react';
import './style.css';
import {
  Header,
  FilterMenu,
  Movies
} from './../../component/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storeMovies, storeGenres, manageGenreList } from './../../actions/index.js';
import { Pagination } from 'semantic-ui-react'

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      totalPages: 50,
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  transformMovieRes(movies, posterURL) {
    return movies.map(movie => {
      movie.poster_path = posterURL.images.base_url + 
        posterURL.images.poster_sizes[1] + movie.poster_path;
      movie.selected = true;
      return movie;
    });
  }
  componentDidMount() {
    this.fetchMovies(1);
    this.fetchGenres();
  }

  fetchMovies(page) {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1d76cf519e61077a326903a4ae9a9f83&page=${page}`)
      .then(movieResponse => movieResponse.json())
      .then(movieRes => {
        fetch('https://api.themoviedb.org/3/configuration?api_key=1d76cf519e61077a326903a4ae9a9f83')
          .then(posterResponse => posterResponse.json())
          .then(posterRes => {
            const transformedMovieRes = this.transformMovieRes(movieRes.results, posterRes);
            console.log(movieRes.page);
            this.props.storeMovies(transformedMovieRes);
            this.props.manageGenreList(this.props.movies, this.props.genres);
            this.setState({
              totalPages: movieRes.total_pages
            });
          })
      })
      .catch(err => this.props.storeMovies([]));
  }

  fetchGenres() {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1d76cf519e61077a326903a4ae9a9f83&language=en-US')
      .then(genreResponse => genreResponse.json())
      .then(genreRes => this.props.storeGenres(genreRes))
      .catch(err => this.props.storeGenres([]));
  }

  handlePageClick(e, {activePage}) {
    this.fetchMovies(activePage);
    this.setState({activePage});
  };

  render() {
    const { activePage } = this.state;
    return (
      <div>
        <Header />
        <br /><br />
        <FilterMenu />
        <br /><br />
        <Movies movies={this.props.movies} />
        <br /><br />
        <center>
          <Pagination
            activePage={activePage}
            boundaryRange={1}
            onPageChange={this.handlePageClick}
            size='large'
            siblingRange={1}
            totalPages={this.state.totalPages}
            ellipsisItem={undefined}
            firstItem={undefined}
            lastItem={undefined}
            prevItem={undefined}
            nextItem={undefined}
          />
        </center>
        <br /><br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  genres: state.genres
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    storeMovies,
    storeGenres,
    manageGenreList
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);