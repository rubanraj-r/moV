import React from 'react';
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react';
import './style.css';

const propTypes  = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string
};

const MovieCard = ({title, poster}) => (
  <Card>
    <Image src={poster} wrapped ui={false} />
    <Card.Content>
      <Card.Header className="title">{title}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <input 
        type="number"
        name="rating"
        min="1"
        max="10"
        step="0.5"
        defaultValue="3"
      />
    </Card.Content>
  </Card>
);

MovieCard.propTypes = propTypes;

export default MovieCard;