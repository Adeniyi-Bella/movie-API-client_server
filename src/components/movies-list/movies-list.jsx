import React from 'react';
<<<<<<< HEAD
import { Col, Row } from 'react-bootstrap';
=======
import Row from 'react-bootstrap/Col';
>>>>>>> main
import { connect } from 'react-redux';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
<<<<<<< HEAD
  let filteredMovies = movies;
  console.log(visibilityFilter);

  if (visibilityFilter !== '') {
=======
  console.log(visibilityFilter);
  let filteredMovies = movies;

  if (visibilityFilter !== '') { 
    console.log(18);
>>>>>>> main
    filteredMovies = movies.filter((m) =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }

  if (!movies) return <div className="main-view" />;

  return (
<<<<<<< HEAD
    <>
      <Col md={12} style={{ margin: '1em' }}>
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </Col>
      {filteredMovies.map((m) => (
        <Col md={3} key={m._id}>
          <MovieCard movie={m} />
        </Col>
      ))}
    </>
=======
    <Row xs={1} md={2}>
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      {filteredMovies.map((m) => (
        <MovieCard movie={m} key={m._id}/>
      ))}
    </Row>
>>>>>>> main
  );
}

export default connect(mapStateToProps)(MoviesList);
