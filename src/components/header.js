import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";


  /* function Header() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Aks Sreenivasan</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/index.js">About</Nav.Link>
          <Nav.Link href="/contact.js">Contact</Nav.Link>
          <Nav.Link href="/portfolio.js">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
          )};

          import React from "react"; */


function Header(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Aks Sreenivasan
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/index">
                  About
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/portfolio2" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/portfolio2">
                  Portfolio
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Header);

      
  
