import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';
// Use NavLink for active styling, Link for without styling
import { NavLink } from 'react-router-dom';

// Use like this: <SidebarNavLink to="/top">Top Stories</SidebarNavLink>
// Spread operator (...) clones props - className to component
const SidebarNavLink = (props) => (
  <NavItem>
    <NavLink {...props} className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    } />
  </NavItem>
);

// Component needs a path to link to
SidebarNavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default SidebarNavLink;