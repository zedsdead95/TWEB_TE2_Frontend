import React from 'react';
import './index.css';
import App from './App';
import Movie from './Movie';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/movies" component={Movie} />
    <Route exact path="/newmovies" component={Movie} />
  </Switch>
)

export default Routes
