import React from 'react';
import { Card, Button } from 'react-bootstrap';

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;
    console.log(movie);
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
          <Card.Title>
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
          </Card.Title>
          <Card.Text>
            <span className="label">Description: </span>
            <span className="value">{movie.description}</span>
          </Card.Text>
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
