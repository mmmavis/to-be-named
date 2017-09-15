import React from 'react';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';
import { Helmet } from "react-helmet";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pageTitle = `Site Name`;
  }

  render() {
    return (
      <div>
        <Helmet titleTemplate={`%s - ${this.pageTitle}`}
                defaultTitle={this.pageTitle}>
        </Helmet>
        <div id="main" className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = (
  <Route path="/" component={App}>
  </Route>
);
