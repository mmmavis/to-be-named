import React from 'react';
import { Helmet } from "react-helmet";
import SessionCard from "../components/session-card.jsx";

class TimeblockSchedule extends React.Component {
  renderSessions() {
    if (!this.props.sessions) return null;

    return this.props.sessions.map(session => <SessionCard {...session} key={session.id} />);
  }

  render() {
    console.log(`timeblock-schedule.jsx`, this.props);
    return <div className="row">
            <div className="col-12">
              <Helmet><title>{`Saturday ${this.props.timeblock[`start time`]}`}</title></Helmet>
            </div>
            <div className="col-12">
              <div className="my-4">Timeblock: <span>{this.props.timeblock.key}</span></div>
              {this.renderSessions()}
            </div>
          </div>;
  }
}

export default TimeblockSchedule;
