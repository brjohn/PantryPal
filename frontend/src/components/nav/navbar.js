import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import '../modal/modal.css'

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
    const { openModal } = this.props;

    if (this.props.loggedIn) {
      return (
        <div className="nav-box">
        <div className="nav-left">
            <img className="nav-icon" src="/images/favicon.png" />
            <div className="nav-title-box">
              <h3 className="nav-title">PantryPal</h3>
            </div>
        </div>
        <div className="nav-right">
          {/* <Link to={'/test'} className="text-link">Nav TBD</Link>
          <Link to={'/test'} className="text-link">Nav TBD</Link>
        <Link to={'/test'} className="text-link">Nav TBD</Link> */}
          <button className="blue-button" onClick={this.logoutUser}>Logout</button>
        </div>
        </div>
      );
    } else {
      return (
        
          <div className="nav-box">
            <div className="nav-left">
              <img className="nav-icon" src="/images/favicon.png" />
              <div className="nav-title-box"></div>
              <Link to='/'><h3 className="nav-title">PantryPal</h3></Link>
            </div>
          <div className="nav-right">
              <button className="grey-button" onClick={() => openModal('signup')}>Sign up</button>
              <button className="blue-button" onClick={() => openModal('login')}>Log in</button>
            </div>
          </div>
        
      );
    }
  }

  render() {
    return (
      <div>
        {/* <h1><Link to={'/'}>PantryPal</Link></h1> */}
        { this.getLinks()}
      </div>
    );
  }
}

export default NavBar;