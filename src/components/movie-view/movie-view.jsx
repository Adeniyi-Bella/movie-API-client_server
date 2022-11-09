import React from 'react';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
console.log(movie);
    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.image} crossOrigin="anonymous"/>
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