import React from 'react';

const MovieCard = ({title}) => (
  <div className='movie-card'>
    <div className="w3-container w3-center">
      <p>{title}</p>
    </div>
  </div>
);

export default MovieCard;