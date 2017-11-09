import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'; //NavLink for active styling, Link for without

export class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <h4>Google News</h4>
        <Nav vertical>
          <NavItem>
            <NavLink to="/top" className="nav-link" activeClassName="active">Top Stories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/arstechnica" className="nav-link" activeClassName="active">Ars Technica</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/associatedpress" className="nav-link" activeClassName="active">Associated Press</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cnn" className="nav-link" activeClassName="active">CNN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/espn" className="nav-link" activeClassName="active">ESPN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/fortune" className="nav-link" activeClassName="active">Fortune</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/reuters" className="nav-link" activeClassName="active">Reuters</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/techcrunch" className="nav-link" activeClassName="active">TechCrunch</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/wallstreetjournal" className="nav-link" activeClassName="active">Wall Street Journal</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/time" className="nav-link" activeClassName="active">Time</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/usatoday" className="nav-link" activeClassName="active">USA Today</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
