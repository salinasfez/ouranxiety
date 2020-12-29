import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import storiesReducer from './store/reducers/stories';
import storyReducer from './store/reducers/story';
import createNewStoryReducer from './store/reducers/createNewStory';
import deleteStoryReducer from './store/reducers/deleteStory';


// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
  stories: storiesReducer,
  story: storyReducer,
  create: createNewStoryReducer,
  delete: deleteStoryReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
);


ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);


