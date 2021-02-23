import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  // TBD: Replace /test with Pantry nav components (not yet created)
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="NavBar">
          <Link to={'/test'} className="Links1">Nav TBD</Link>
          <Link to={'/test'} className="Links1">Nav TBD</Link>
          <Link to={'/test'} className="Links1">Nav TBD</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'} className="Links2">Signup</Link>
          <Link to={'/login'} className="Links2">Login</Link>
          <br />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1><Link to={'/'}>PantryPal</Link></h1>
        { this.getLinks()}
      </div>
    );
  }
}

export default NavBar;