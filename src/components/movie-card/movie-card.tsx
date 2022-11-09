import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { TMovie } from '../../@types';

interface IProps {
  movie: TMovie;
  onMovieClick: (movie: TMovie) => void;
}
export class MovieCard extends React.Component<IProps, {}> {
  static propTypes: {
    movie: PropTypes.Validator<
      NonNullable<
        PropTypes.InferProps<{
          Title: PropTypes.Validator<string>;
          description: PropTypes.Validator<string>;
          image: PropTypes.Validator<string>;
        }>
      >
    >;
    onMovieClick: PropTypes.Validator<(movie: TMovie) => void>;
  };
  render() {
    const { movie, onMovieClick } = this.props;
    console.log(movie.image);
    return (
      <div
        className="movie-card"
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.Title}
      </div>
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
