import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'; //NavLink for active styling, Link for without
import { SidebarNavLink } from './SidebarNavLink';

export class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <h4>Google News</h4>
        <Nav vertical>
          <SidebarNavLink to="/top">Top Stories</SidebarNavLink>
          <SidebarNavLink to="/arstechnica">Ars Technica</SidebarNavLink>
          <SidebarNavLink to="/associatedpress">Associated Press</SidebarNavLink>
          <SidebarNavLink to="/cnn">CNN</SidebarNavLink>
          <SidebarNavLink to="/espn">ESPN</SidebarNavLink>
          <SidebarNavLink to="/fortune">Fortune</SidebarNavLink>
          <SidebarNavLink to="/reuters">Reuters</SidebarNavLink>
          <SidebarNavLink to="/techcrunch">TechCrunch</SidebarNavLink>
          <SidebarNavLink to="/wallstreetjournal">Wall Street Journal</SidebarNavLink>
          <SidebarNavLink to="/time">Time</SidebarNavLink>
          <SidebarNavLink to="/usatoday">USA Today</SidebarNavLink>
        </Nav>
      </div>
    );
  }
}
