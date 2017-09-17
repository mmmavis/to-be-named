import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class SessionCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);

    let props = this.props;

    return <div className="session-card p-3 pl-4 mb-4" data-space={props.category.toLowerCase()}>
            <h5><Link to={`/session/${props.id}`}>{props.title}</Link></h5>
            <div>{props.day} {props.start}</div>
            <div>[{props.category}] {props.location}</div>
            <div></div>
          </div>
  }
}

export default SessionCard;
