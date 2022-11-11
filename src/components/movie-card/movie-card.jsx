import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    console.log(movie.image);

    return (

        <Card border="light" body style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src={movie.image}
              crossOrigin="anonymous"
            />

            <Card.Title>{movie.Title}</Card.Title>
            {/* <Card.Text>{movie.description}</Card.Text> */}
            <Button
              onClick={() => onMovieClick(movie)}
              variant="primary"
            >
              More Info
            </Button>
          </Card.Body>
        </Card>

    );

  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
