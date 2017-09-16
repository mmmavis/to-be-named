import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Analytics from './js/analytics.js';
import { Helmet } from 'react-helmet';
import Home from './pages/home.jsx';
import Friday from './pages/friday.jsx';

Analytics.initialize();

let routerUpdateHandler = function() {
  Analytics.logPageView();
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pageTitle = `Site Name`;
  }

  render() {
    return <div>
            <Helmet titleTemplate={`%s - ${this.pageTitle}`}
                      defaultTitle={this.pageTitle}>
            </Helmet>
            <div>hi</div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/friday">Friday</Link></li>
            </ul>
            <hr/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/friday" component={Friday} />
            </Switch>
          </div>;
  }
}


ReactDOM.render((
  <Router basename="/" onUpdate={routerUpdateHandler}>
    <App />
  </Router>
), document.getElementById(`app`));
