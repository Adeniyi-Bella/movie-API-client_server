import React, { useState, useEffect } from 'react';
import { Row, Button, Figure, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export class FavmovieView extends React.Component {
  constructor() {
    super();
    this.state = {
      // movie: [],
      FavoriteMovies: [],
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem('token');
    this.getUser(accessToken);
  }

  getUser = (token) => {
    const Username = localStorage.getItem('user');
    axios
      .get(`https://imbd-movies.herokuapp.com/users/${Username}`, {
        // headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.setState({
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  onRemoveFavorite = (movieId) => {
    const username = localStorage.getItem('user');
    console.log(username);
    console.log(movieId);
    axios
      .delete(
        `https://imbd-movies.herokuapp.com/users/${username}/movies/${movieId}`,
        {
          // headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        // Assign the result to the state
        window.location.reload(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    const { movies } = this.props;
    const { FavoriteMovies } = this.state;

    const myFavoritesMovies = [];
    for (let index = 0; index < movies.length; index++) {
      const movie = movies[index];
      if (FavoriteMovies.includes(movie._id)) {
        myFavoritesMovies.push(movie);
      }
    }

    console.log(myFavoritesMovies.length);
    if (myFavoritesMovies.length===0)
    {return (<h4 style={{ paddingLeft: '30px' }}> No movies in Favorite. Go back to add Movies</h4>)}
    return (
      <>
        {myFavoritesMovies.map((movie) => (
          <Card border="light" body style={{ width: '18rem' }}>
            <Card.Body key={movie._id}>
              <>
                <Card.Img
                  variant="top"
                  src={movie.image}
                  crossOrigin="anonymous"
                />

                <Card.Title>{movie.Title}</Card.Title>
                <Button
                  className="remove"
                  variant="secondary"
                  onClick={() => {
                    this.onRemoveFavorite(movie._id);
                  }}
                >
                  Remove from the list
                </Button>
              </>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}
