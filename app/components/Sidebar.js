import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h4>Google News</h4>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Top Stories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">World</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">US</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Business</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Technology</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Entertainment</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Sports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Science</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Health</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
