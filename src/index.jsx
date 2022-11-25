import React from 'react';
import { Container} from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import  MainView  from './components/main-view/main-view';
import { createRoot } from 'react-dom/client';
import { devToolsEnhancer } from 'redux-devtools-extension';
// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
// import your icons
import { faStar as faStarFull, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf, faStar } from '@fortawesome/free-regular-svg-icons';

library.add(
  faStarHalf,
  faStar,
  faStarFull,
  faCircleChevronLeft
  // more icons go here
);

const store = createStore(moviesApp, devToolsEnhancer());
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
        <MainView />
        </Container>
      </Provider>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];
const root = createRoot(container);
// Tells React to render your app in the root DOM element
// ReactDOM.render(React.createElement(MyFlixApplication), container);
root.render(React.createElement(MyFlixApplication));
