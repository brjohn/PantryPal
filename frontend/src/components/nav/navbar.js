import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import '../modal/modal.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    // debugger
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  // TBD: Replace /test with Pantry nav components (not yet created)



  indicatorAnimation() {
    const indicator = document.querySelector('.nav-indicator');
    const items = document.querySelectorAll('.nav-item');

    // debugger
    return (e) => {

      
      // const el = e.target.parentElement.parentElement;
      // debugger

      const el = (e.target) ? (e.target.parentElement.parentElement) : (e.parentElement.parentElement)

      items.forEach(function (item) {
        item.classList.remove('is-active');
        item.removeAttribute('style');
      });
      indicator.style.width = "".concat(el.offsetWidth, "px");
      indicator.style.left = "".concat(el.offsetLeft, "px");
      indicator.style.backgroundColor = el.getAttribute('active-color');
      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color');


    }
  }



  componentDidMount() {
    // this.indicatorAnimation()(document.getElementById('pantry'))
    this.indicatorAnimation()(document.getElementById(window.location.hash.slice(2)))
    // debugger
  }








  getLinks() {
    const { openModal } = this.props;
    // let url = (window.location.href).slice(24);
    // if (url === "recipe"){
    //   url = "/pantry"
    // }
    // else {
    //   url = "/recipe"
    // }


    if (this.props.loggedIn) {

      return (
        <div className="nav-box">
        <div className="nav-left">
            <img className="nav-icon" src="/images/favicon.png" alt='nav-icon'/>
            <div className="nav-title-box">
              <h3 className="nav-title">PantryPal</h3>
            </div>
        </div>
        <div className="nav-right">{/* <div className="nav-right"></div> */}
          {/* <Link to={url}><button className="grey-button">{url[1].toUpperCase() + url.slice(2)}</button></Link> */}
          


  
            <div className="nav-item is-active" active-color="orange">
              <Link to='/pantry'><button id="pantry" onClick={this.indicatorAnimation()} className="grey-button" >Pantry</button></Link>
            </div>

            <div  className="nav-item" active-color="green">
              <Link to='/recipe'><button id="recipe" onClick={this.indicatorAnimation()} className="grey-button" >Recipes</button></Link>
            </div>
            <span className="nav-indicator"></span>




          <button className="blue-button" onClick={this.logoutUser}>Logout</button>
        </div>
        </div>
      );
    } 
    
    
    
    else {
      return (
         <div className="splash">
          <div className="nav-box">
            <div className="nav-left">
              <img className="nav-icon" src="/images/favicon.png" alt='nav-icon'/>
              <div className="nav-title-box"></div>
              <Link to='/'><h3 className="nav-title">PantryPal</h3></Link>
            </div>
          <div className="nav-right">
              <button className="grey-button" onClick={() => openModal('signup')}>Sign up</button>
              <button className="blue-button" onClick={() => openModal('login')}>Log in</button>
            </div>
          </div>
            <div className="splash-ani-container">
                <img className="splash-ani" src="/images/pantrypal.png" />
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