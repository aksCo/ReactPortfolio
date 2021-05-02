import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


  function Header() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <title>Header</title>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
          {/*div containing toggable navigation*/}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*navigation menu*/}
            <ul className="nav navbar-nav ml-auto text-right">
              <li className="nav-item">
                <a className="nav-link" href="index.js">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio2.js">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.js">Contact</a>
              </li>
            </ul>
          </div></div>
          )};
  export default Header;
  