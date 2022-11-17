// imports react into the file
import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view.jsx';
import NavBar from '../navbar/navbar';
import {FavmovieView} from '../favoriteMovieView/favoriteMovieView';
import ProfileView from '../profile-view/profile-view';
// create a MainView class component, exporting it so that it can be used
// by other components, modules, files
export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      userDetails: {},
      // favoriteMovies: [],
      user: null,
      // favMovies: []
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
      });
      this.getMovies(accessToken);
      
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });
    // this.getUser(user)
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
    
    // this.getUserDetails(user);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null,
    });
  }
  getMovies(token) {
    axios
      .get('https://imbd-movies.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getUser(user){
    axios
    .get(`https://imbd-movies.herokuapp.com/users/${user}`, {
      // headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // Assign the result to the state
      console.log(response.data);
      this.setState({
        userDetails: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const { movies, user} = this.state;
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => {
            if (!user)
              return (
                <LoginView
                  // movies={movies}
                  onLoggedIn={(user) => this.onLoggedIn(user)}
                />
              );

            if (movies.length === 0)
              return <div className="main-view" />;
            //       <Row xs={1} md={2} className="justify-content-md-left">

            return (
              <>
                <NavBar user={user} />
                <Row xs={1} md={2}>
                  {movies.map((m) => (
                    <MovieCard key={m._id} movie={m} />
                  ))}
                </Row>
              </>
            );
          }}
        />

        <Route exact
          path="/register"
          render={() => {
            if (user) return <Redirect to="/" />;
            return (
              <Col>
                <RegistrationView 
                onBackClick={() => history.goBack()}/>
                
              </Col>
            );
          }}
        />
        <Route
          path="/movies/:id"
          render={({ match, history }) => {
            if (!user)
              return (
                <Col>
                  <LoginView
                    onLoggedIn={(user) => this.onLoggedIn(user)}
                  />
                </Col>
              );
            if (movies.length === 0)
              return <div className="main-view" />;
            return (
              <Col md={8}>
                <MovieView
                  movie={movies.find(
                    (m) => m._id === match.params.id
                  )}
                  onBackClick={() => history.goBack()}
                  user={user}
                />
              </Col>
            );
          }}
        />
        <Route
          exact
          path={`/users/${user}/favoriteMovies`}
          render={({ history }) => {
            if (!user)
              return (
                <LoginView
                  movies={movies}
                  onLoggedIn={(user) => this.onLoggedIn(user)}
                />
              );

            if (movies.length === 0)
              return <div className="main-view" />;
            return (
              <>
              <div style={{ fontSize: 'x-large',background: 'lightgrey', height: '50px', textAlign: 'center'}}> Favourites movie section</div>
              <Row xs={1} md={2}>
                <FavmovieView
                  movies={movies}
                  // user={user}
                  onBackClick={() => history.goBack()}
                />
              </Row>
              </>
            );
          }}
        />
        <Route
          exact
          path={`/users/${user}`}
          render={({ history }) => {
            if (!user) return <Redirect to="/" />;
            return (
              <Col>
                <ProfileView
                  user={user}
                  onBackClick={() => history.goBack()}
                />
              </Col>
            );
          }}
        />

        {/* </Routes> */}
      </Router>
    );
  }
}
