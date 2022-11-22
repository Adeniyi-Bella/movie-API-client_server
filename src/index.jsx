import React from 'react';
// import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import  MainView  from './components/main-view/main-view';
import { createRoot } from 'react-dom/client';
import { devToolsEnhancer } from 'redux-devtools-extension';
// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());
// const store = createStore(moviesApp, devToolsEnhancer());
// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />
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
