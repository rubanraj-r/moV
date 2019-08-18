import React from 'react';
import MovieCard from './../movieCard/movieCard.jsx';
import { connect } from 'react-redux';
import './style.css';

const classNames = ['one', 'two', 'three', 'four', 'five', 
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen','fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
      ];

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  generateMovieList(movies){
    var movieTemp = movies && movies.filter(x => x.selected);
    movieTemp.sort((x, y) => y.popularity - x.popularity);

    return movieTemp.map((movie, i) => {
      if (movie && movie.selected && i < 20) {
        return (
          <div key = {i} className = {`${classNames[i]}`}>
            <MovieCard
              title = {movie.title}
              poster = {movie.poster_path}
            />
          </div>
        );
      }
    });
  }
  
  render() {
    return (
      <div className='movies'>
        {this.generateMovieList(this.props.movies)}
      </div>
    );
  }
}

export default Movies;

