/*

*/
import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './store';
/*
We will use react, redux, and also the browser, to have the possibility to extend the application if necessary.
-
Provider and Store creation
*/
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals();
