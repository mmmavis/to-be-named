import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Analytics from './js/analytics.js';
import routes from './routes.jsx';

Analytics.initialize();

let routerUpdateHandler = function() {
  Analytics.logPageView();
};

ReactDOM.render((
  <Router routes={routes} onUpdate={routerUpdateHandler} />
), document.getElementById(`app`));
