import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import List from './components/List';
import ItemFullWrapper from './components/ItemFullWrapper';

import NoMatch from './components/NoMatch';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={List}/>
      <Route path="/:link" component={ItemFullWrapper} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);
const root = document.getElementById('root');

ReactDOM.render(
  routes,
  root
);
