import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Project from './components/Project';
import "./css/style.css";

const Routes = (
  <Router>
  <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/project/:id" component={ Project } />
      </Switch>
  </Router>





  );

export default Routes;
