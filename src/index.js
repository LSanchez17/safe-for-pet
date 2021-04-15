import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route to='/' component={HomePage}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

