import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'; //NavLink for active styling, Link for without

//use like this: <SidebarNavLink to="/top">Top Stories</SidebarNavLink>
//spread operator (...) clones props - className to component
export class SidebarNavLink extends React.Component {
  render() {
    return (
      <NavItem>
        <NavLink {...this.props} className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        } />
      </NavItem>
    );
  }
}

SidebarNavLink.propTypes = {
  to: PropTypes.string.isRequired //needs a path to link to
};
