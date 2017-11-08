import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <h4>Google News</h4>
        <Nav vertical>
          <NavItem>
            <Link to="/top" className="nav-link">Top Stories</Link>
          </NavItem>
          <NavItem>
            <Link to="/arstechnica" className="nav-link">Ars Technica</Link>
          </NavItem>
          <NavItem>
            <Link to="/associatedpress" className="nav-link">Associated Press</Link>
          </NavItem>
          <NavItem>
            <Link to="/cnn" className="nav-link">CNN</Link>
          </NavItem>
          <NavItem>
            <Link to="/espn" className="nav-link">ESPN</Link>
          </NavItem>
          <NavItem>
            <Link to="/fortune" className="nav-link">Fortune</Link>
          </NavItem>
          <NavItem>
            <Link to="/reuters" className="nav-link">Reuters</Link>
          </NavItem>
          <NavItem>
            <Link to="/techcrunch" className="nav-link">TechCrunch</Link>
          </NavItem>
          <NavItem>
            <Link to="/wallstreetjournal" className="nav-link">Wall Street Journal</Link>
          </NavItem>
          <NavItem>
            <Link to="/time" className="nav-link">Time</Link>
          </NavItem>
          <NavItem>
            <Link to="/usatoday" className="nav-link">USA Today</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
