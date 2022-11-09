import React from 'react';
import {TMovie} from '../../@types'

interface IProps {
  movie: TMovie;
  onBackClick: (movie: TMovie | null) => void;
}
export class MovieView extends React.Component<IProps, {}> {

  render() {
    const { movie, onBackClick } = this.props;
console.log(typeof(movie.image));
    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.image} crossOrigin= 'anonymous' />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.description}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>

      </div>
    );
  }

  // componentDidMount() {
  //   document.addEventListener('keypress', event => {
  //     console.log(event.key);
  //   });
  // }
}