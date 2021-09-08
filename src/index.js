import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { searchProduct } from './components/reducer';


const store = createStore(searchProduct)

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();

//redux
//react-redux
