import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <h4>Google News</h4>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Top Stories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Ars Technica</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Associated Press</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CNN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">ESPN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Fortune</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Reuters</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">TechCrunch</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Wall Street Journal</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Time</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">USA Today</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
