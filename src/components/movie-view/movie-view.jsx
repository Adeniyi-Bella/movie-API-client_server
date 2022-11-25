import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class MovieView extends React.Component {
  addFavorite = (movieId) => {
    const username = localStorage.getItem('user');
    axios
      .post(
        `https://imbd-movies.herokuapp.com/users/${username}/movies/${movieId}`,
        {
          // headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        alert('Movie succesfully added to favorites list')
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    const { movie, onBackClick } = this.props;
    const name = [];
    movie.actors.forEach((element) => {
      name.push(element.name);
    });
    return (
      <Card border="light" body style={{padding: '20px'}}>
        <Card.Body>
          <Card.Img
            style={{ width: '18rem', margin: 'auto' }}
            className="justify-content-md-centre"
            variant="top"
            src={movie.image}
            crossOrigin="anonymous"
          />
          <Card.Title style={{ padding: '10px 0' }}>
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
          </Card.Title>
          <Card.Text>
            <span className="label">Actor/s: </span>
            <span className="value">{`${name}`}</span>
          </Card.Text>
          <Card.Text>
            <span className="label">
              Release year/Rating/ Popularity:{' '}
            </span>
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
            style={{ marginRight: '10px' }}
            onClick={() => {
              this.addFavorite(movie._id);
            }}
          >
            Add to favorites
          </Button>
          <Button
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back To Home
          </Button>
        </Card.Body>
      </Card>
    );
  }

}
