import React from 'react';
import Row from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  console.log(visibilityFilter);
  let filteredMovies = movies;

  if (visibilityFilter !== '') { 
    console.log(18);
    filteredMovies = movies.filter((m) =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }

  if (!movies) return <div className="main-view" />;

  return (
    <Row xs={1} md={2}>
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      {filteredMovies.map((m) => (
        <MovieCard movie={m} key={m._id}/>
      ))}
    </Row>
  );
}

export default connect(mapStateToProps)(MoviesList);
