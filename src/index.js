import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { searchProduct } from './components/reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(searchProduct, applyMiddleware(logger))

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();

//redux
//react-redux
