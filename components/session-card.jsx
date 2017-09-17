import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class SessionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };

    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  renderActionPanel() {
    const SAMPLE_TWEET = this.props.title;
    const SAMPLE_TWEET_URL = ``;

    return <div className="action-panel d-flex flex-column text-center">
              <a href={`}`} >
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <span className="sr-only">Bookmark this session</span>
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${SAMPLE_TWEET}&url=${SAMPLE_TWEET_URL}`}>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">Share on Twitter</span>
              </a>
            </div>;
  }

  renderExpandToggle() {
    return <div className="expand-toggle text-center">
              <button className="btn btn-block btn-link" onClick={this.handleArrowClick}>
                <div>
                  <i className={classNames(`fa fa-chevron-down`, { "hidden-xs-up": this.state.expanded })} aria-hidden="true"></i>
                  <span className="sr-only">Expand detail section</span>
                </div>
                <div>
                  <i className={classNames(`fa fa-chevron-up`, { "hidden-xs-up": !this.state.expanded })} aria-hidden="true"></i>
                  <span className="sr-only">Collapse detail section</span>
                </div>
              </button>
            </div>;
  }

  render() {
    console.log(this.props);

    let props = this.props;
    let classnames = classNames(`session-card py-3 mb-4`, { expanded: this.state.expanded });

    return <div className={classnames} data-space={props.category.toLowerCase()}>
            <div className="content pl-4">
              <h5 className="mb-2"><Link to={`/session/${props.id}`}>{props.title}</Link></h5>
              <div>{props.day} {props.start}</div>
              <div>[{props.category}] {props.location}</div>
              <div className="expandable-section pt-2 mt-2">
                <p>{props.description}</p>
              </div>
            </div>
            { this.renderActionPanel() }
            { this.renderExpandToggle() }
          </div>
  }
}

export default SessionCard;
