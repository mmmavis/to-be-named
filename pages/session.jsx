import React from 'react';
import { Helmet } from "react-helmet";

class Session extends React.Component {
  render() {
    let props = this.props;

    console.log(`session.jsx`, this.props);
    return <div className="row">
            <div className="col-12">
              <Helmet><title>{props.title}</title></Helmet>
            </div>
            <div className="col-12">
              <h5>{props.title}</h5>
              <div>{props.day} {props.start}</div>
              <div>{props.category}</div>
              <div>{props.location}</div>
              <p className="mt-3">{props.description}</p>
            </div>
          </div>;
  }
}

export default Session;
