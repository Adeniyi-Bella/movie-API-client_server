// imports react into the file
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
<<<<<<< HEAD
import MoviesList from '../movies-list/movies-list';
import { setMovies, setUser, setFavorite } from '../../actions/actions';
=======
import { setMovies, setUser, setFavorite, deleteFavorite } from '../../actions/actions';
import MoviesList from '../movies-list/movies-list';
>>>>>>> main
// import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view.jsx';
import NavBar from '../navbar/navbar';
import { FavmovieView } from '../favoriteMovieView/favoriteMovieView';
import ProfileView from '../profile-view/profile-view';
// create a MainView class component, exporting it so that it can be used
// by other components, modules, files
<<<<<<< HEAD
=======

let mapStateToProps = state => {
  console.log(state);
  return {
    movies: state.movies,
    user: state.user
  }
}
>>>>>>> main
class MainView extends React.Component {
  constructor() {
    super();
    // this.state = {
<<<<<<< HEAD
    //   user: null,
=======
    //   // movies: [],
    //   // userDetails: {},
    //   // favoriteMovies: [],
    //   user: null,
    //   // favMovies: []
>>>>>>> main
    // };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    console.log(accessToken);
    if (accessToken !== null) {
      // this.setState({
      //   user: localStorage.getItem('user'),
      // });
      this.getMovies(accessToken);
      this.getUser(accessToken);
<<<<<<< HEAD
=======
      
>>>>>>> main
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    // this.setState({
    //   user: authData.user.Username,
    // });
<<<<<<< HEAD
=======

>>>>>>> main
    this.props.setUser(authData.user);
    // this.getUser(user)
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);

    // this.getUserDetails(user);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  getMovies(token) {
    axios
      .get('https://imbd-movies.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.props.setMovies(response.data);
<<<<<<< HEAD
      })
=======
        })
      // })
>>>>>>> main
      .catch(function (error) {
        console.log(error);
      });
  }

<<<<<<< HEAD
  getUser(token) {
    const user = localStorage.getItem('user');
    console.log(user);
    axios
      .get(`https://imbd-movies.herokuapp.com/users/${user}`, {
        // headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        console.log(response.data);
        this.props.setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    let { movies, user } = this.props;
    console.log(movies);
    console.log(user);

    // const single = this.props.setMovies()
    const username = user.Username;
    console.log(username);
=======
  render() {
    // const { movies, user} = this.state;
    let { movies, user } = this.props;
    console.log(movies);
>>>>>>> main
    // let { user } = this.state;
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => {
            if (!username)
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
<<<<<<< HEAD
                <Row xs={1} md={2}>
                  <MoviesList movies={movies} />;
                  {/* {movies.map((m) => (
                    <MovieCard key={m._id} movie={m} />
                  ))} */}
                </Row>
=======
                 {/* <Row xs={1} md={2}> */}
                  {/* {movies.map((m) => (  */}
                  <MoviesList movies={movies}/>
                    {/* <MovieCard key={m._id} movie={m} /> */}
                  {/* ))} */}
                {/* </Row> */}
>>>>>>> main
              </>
            );
          }}
        />

        <Route
          exact
          path="/register"
          render={() => {
            if (username) return <Redirect to="/" />;
            return (
              <Col>
                <RegistrationView
                  onBackClick={() => history.goBack()}
                />
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
            if (!username)
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
                <div
                  style={{
                    fontSize: 'x-large',
                    background: 'lightgrey',
                    height: '50px',
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  Favourites movie section
                </div>
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
            if (!username) return <Redirect to="/" />;
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

<<<<<<< HEAD
let mapStateToProps = (state) => {
  return { movies: state.movies, user: state.user };
};

// #8
export default connect(mapStateToProps, { setMovies, setUser, setFavorite })(MainView);
=======


// let mapStateToProps = state => {
//   return { movies: state.movies }
// }

// #8
export default connect(mapStateToProps, { setMovies, setUser, setFavorite, deleteFavorite })(MainView);
// export default connect(mapStateToProps, { setMovies } )(MainView);
>>>>>>> main
