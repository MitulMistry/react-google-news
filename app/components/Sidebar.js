import React from 'react';
import { Nav } from 'reactstrap';
import SidebarNavLink from './SidebarNavLink';

const Sidebar = () => (
  <div id="sidebar">
    <h4>Google News</h4>
    <Nav vertical>
      <SidebarNavLink to="/">Top Stories</SidebarNavLink>
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

export default Sidebar