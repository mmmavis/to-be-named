import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SessionCard from "../components/session-card.jsx";

// <NavLink to={props.to} activeClassName="active" className="nav-link open-sans px-4 py-2">{props.label}</NavLink>

class DaySchedule extends React.Component {
  renderTimesblocks() {
    if (this.props.timeblocks.length === 0) return null;

    let timeblocks = this.props.timeblocks.map(timeblock => {
      let path = timeblock[`start time`].replace(`:`,``).trim();

      return <div className="col-12 col-sm-8 mb-2">
        <Link
          to={`/${this.props.day.toLowerCase()}/${path}`}
          key={timeblock.key} 
          className="timeblock-link d-block open-sans py-1"
        >{timeblock[`start time`]}</Link>
      </div>;
    });

    return <div className="row justify-content-center text-center mt-4">{timeblocks}</div>
  }

  render() {
    console.log(`DaySchedule.jsx`, this.props);
    return <div className="row">
              <div className="col-12">
                <Helmet><title>{this.props.day}</title></Helmet>
              </div>
              <div className="col-12">
                {this.renderTimesblocks()}
              </div>
            </div>;
  }
}

DaySchedule.propTypes = {
  day: PropTypes.string.isRequired,
  timeblocks: PropTypes.array.isRequired,
};

DaySchedule.defaultProps = {
  day: ``,
  timeblocks: []
};

export default DaySchedule;
