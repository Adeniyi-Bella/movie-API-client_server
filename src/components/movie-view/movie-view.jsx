import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick, addFavorite } = this.props;
    console.log(movie);
    const name = []
    movie.actors.forEach(element => {
      name.push(element.name)
    });
    // console.log(name);
    return (
      <Card border="light" body style={{}}>
        <Card.Body>
          <Card.Img
            style={{ width: '18rem', margin: 'auto' }}
            className="justify-content-md-centre"
            variant="top"
            src={movie.image}
            crossOrigin="anonymous"
          />
          <Card.Title style={{ padding:  '10px 0'}}>
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
          </Card.Title>
          <Card.Text>
            <span className="label">Actor/s: </span>
            <span className="value">{`${name}`}</span>
          </Card.Text>
          <Card.Text>
            <span className="label">Release year/Rating/ Popularity: </span>
            <span className="value">{`${movie.release_year}/${movie.rating}/${movie.popularity}`}</span>
          </Card.Text>
          <Card.Text>
            <span className="label">Description: </span>
            <span className="value">{movie.description || null}</span>
          </Card.Text>
          <Card.Text>
            <span className="label">Director/s: </span>
            <span className="value">{`${movie.director_names}`}</span>
          </Card.Text>
          <Card.Text>
            <span className="label">Genre/s: </span>
            <span className="value">{`${movie.genres}`}</span>
          </Card.Text>
          <Card.Text>
            <span className="label">Language/s: </span>
            <span className="value">{`${movie.languages}`}</span>
          </Card.Text>
          <Button
            className="button-movie-view-add-favorite"
            variant="outline-warning"
            size="sm"
            type="button"
            onClick={() => addFavorite(movie._id)}
          >
            Add to favorites
          </Button>
          {/*
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link> */}
          <Button
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
        </Card.Body>
      </Card>
    );
  }

  // componentDidMount() {
  //   document.addEventListener('keypress', event => {
  //     console.log(event.key);
  //   });
  // }
}
