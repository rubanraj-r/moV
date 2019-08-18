import React from 'react';
import PropTypes from 'prop-types'

const propTypes  = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string
};

const MovieCard = ({title, poster}) => (
  <div className='movie-card'>
    <img src={poster} alt={title} />
    <div className="w3-container w3-center">
      <p>{title}</p>
    </div>
  </div>
);

MovieCard.propTypes = propTypes;

export default MovieCard;