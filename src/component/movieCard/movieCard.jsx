import React from 'react';
import PropTypes from 'prop-types'

const propTypes  = {
  title: PropTypes.string.isRequired
};

const MovieCard = ({title}) => (
  <div className='movie-card'>
    <div className="w3-container w3-center">
      <p>{title}</p>
    </div>
  </div>
);

MovieCard.propTypes = propTypes;

export default MovieCard;