import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Analytics from './js/analytics.js';
import sessionsData from './data/sessions.json';

import Nav from './components/nav.jsx';

import Home from './pages/home.jsx';
import DaySchedule from './pages/day-schedule.jsx';
import TimeblockSchedule from './pages/timeblock-schedule.jsx';

Analytics.initialize();

let routerUpdateHandler = function() {
  Analytics.logPageView();
};

function generateTimeRoutes(day, timeblocks) {
  return sessionsData.timeblocks.filter(timeblock => {
    return timeblock.day === day;
  }).sort((a, b) => {
    return a.order - b.order;
  }).map(timeblock => {
    let sessions = sessionsData.sessions.filter(session => session.timeblock === timeblock.key);
    let createComponent = (props) => <TimeblockSchedule {...props} timeblock={timeblock} sessions={sessions} />;
    let path = timeblock[`start time`].replace(`:`,``).trim();

    return <Route path={`/${day.toLowerCase()}/${path}`} component={createComponent} key={timeblock.key} />;
  });
}

function generateScheduleRoutes(day) {
  let timeblocks = sessionsData.timeblocks.filter(timeblock => {
    return timeblock.day === day;
  }).sort((a, b) => {
    return a.order - b.order;
  });

  return [
    <Route 
      exact
      path={`/${day.toLowerCase()}`} 
      component={() => <DaySchedule day={day} timeblocks={timeblocks} />} 
      key={`${day}-schedule`}
    />
  ].concat(generateTimeRoutes(day, timeblocks))
}

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
            <Nav />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-8">
                  <Switch>
                    { generateScheduleRoutes(`Friday`) }
                    { generateScheduleRoutes(`Saturday`) }
                    { generateScheduleRoutes(`Sunday`) }
                  </Switch>
                </div>
              </div>
            </div>
          </div>;
  }
}


ReactDOM.render((
  <Router basename="/" onUpdate={routerUpdateHandler}>
    <App />
  </Router>
), document.getElementById(`app`));
