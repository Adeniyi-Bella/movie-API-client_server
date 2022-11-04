// imports react into the file
import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
// create a MainView class component, exporting it so that it can be used
// by other components, modules, files
export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: 'Underground',
          Description: "Sylvana looks after Sam's granddad. Sam arrives at granddad's house, excited to show him a bug... but something has happened to granddad that unites Sam with Sylvana in unexpected ways.",
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BNjAxYmU4MTItYWIwMy00MzZkLWIzZGMtOTE2M2ZmYjUwM2JmXkEyXkFqcGdeQXVyNDY5OTc4OA@@._V1_QL75_UY281_CR97,0,190,281_.jpg',
        },
        {
          _id: 2,
          Title: 'Grown Ups',
          Description: 'In 1978, five 12-year-olds win a CYO basketball championship. Thirty years later, they gather with their families for their coachs funeral and a weekend at a house on a lake where they used to party. By now, each is a grownup with problems and challenges: Marcus is alone and drinks too much. Rob, with three daughters he rarely sees, is always deeply in love until he turns on his next ex-wife. Eric is overweight and out of work. Kurt is a househusband, henpecked by wife and mother-in-law. Lenny is a successful Hollywood agent married to a fashion designer with three kids and his two sons take their privilege for granted. Can the outdoors help these grownups rediscover connections or is this chaos in the making?',
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BMjA0ODYwNzU5Nl5BMl5BanBnXkFtZTcwNTI1MTgxMw@@._V1_QL75_UX190_CR0,0,190,281_.jpg'
        },
        {
          _id: 3,
          Title: 'Inception',
          Description: 'Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobbs rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.',
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg'
        },
      ],
      selectedMovie: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }
  // This render function is what returns the visual representation
  // of the component, in other words, it renders what will be
  // displayed on the screen.
  render() {
    const { movies, selectedMovie } = this.state;

    // if (selectedMovie) return <MovieView movie={selectedMovie} />;

    if (movies.length === 0)
      return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
