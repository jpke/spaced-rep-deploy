import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './Landing';
import Redirect from './Redirect.js'
import Quiz from './Quiz.js'
import CardPage from './CardPage.js'
import './index.css';
import { Provider } from 'react-redux'
import store from './configureStore'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import RequireAuth from './requireAuth'
import {LOGGED_IN} from './actions.js'

const token = localStorage.getItem('token')
if(token) {
  store.dispatch({type: LOGGED_IN})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="access_token" component={Landing} />
        <Route path="quiz" component={RequireAuth(Quiz)} />
        <Route path="print-cards" component={CardPage} printable='true' />
        <Route path="study-cards" component={CardPage} printable='false' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
