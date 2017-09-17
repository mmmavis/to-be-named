import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const TopNavLink = (props) => {
  return <NavLink to={props.to} activeClassName="active" className="nav-link open-sans px-4 py-2">{props.label}</NavLink>;
};

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let navItemClassnames = `nav-item mb-0`;

    return <div className="nav-bar mb-4">
            <div className="container">
              <div className="row justify-content-center">
                <div>
                  <ul className="nav">
                    <li className={navItemClassnames}><TopNavLink to="/friday" label="Fri" /></li>
                    <li className={navItemClassnames}><TopNavLink to="/saturday" label="Sat" /></li>
                    <li className={navItemClassnames}><TopNavLink to="/sunday" label="Sun" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  }
}

export default Nav;
