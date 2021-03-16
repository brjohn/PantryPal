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

  indicatorAnimation() {
    // debugger
    return (e) => {
      const indicator = document.querySelector('.nav-indicator');
      const items = document.querySelectorAll('.nav-item');
      if (!e) return;
      // debugger
      const el = (e.currentTarget) ? (e.currentTarget.parentElement) : (e.parentElement.parentElement)

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



  handleSubmit() {
    return () => {
      // console.log('clicked')
      let user = {
        email: "demo@gmail.com",
        password: '123456'
      };
  
      this.props.login(user)
    }
   
  }



  componentDidUpdate() {
  
    let url = window.location.hash.slice(2)
    if (url === "" && this.props.loggedIn) {
      // debugger
      url = 'pantry'
    }
    // console.log(url)
    // debugger
    if (['pantry', 'recipe'].includes(url)) this.indicatorAnimation()(document.getElementById(url))
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
      const url = window.location.hash.slice(2)
      if (['pantry', 'recipe'].includes(url)) this.indicatorAnimation()(document.getElementById(window.location.hash.slice(2)))
      return (
        <div className="nav-box">
          <div className="nav-left">
            <img className="nav-icon" src="/images/favicon.png" alt='nav-icon' />
            <div className="nav-title-box">
              <h3 className="nav-title">PantryPal</h3>
            </div>
          </div>
          <div className="nav-right">{/* <div className="nav-right"></div> */}
            {/* <Link to={url}><button className="grey-button">{url[1].toUpperCase() + url.slice(2)}</button></Link> */}




            <div className="nav-item is-active" active-color="#1c4966">
              <Link to='/pantry' onClick={this.indicatorAnimation()} ><button id="pantry" className="grey-button" >Pantry</button></Link>
            </div>

            <div className="nav-item" active-color="#1c4966">
              <Link to='/recipe' onClick={this.indicatorAnimation()} ><button id="recipe" className="pink-button" >Recipes</button></Link>
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
              <img className="nav-icon" src="/images/favicon.png" alt='nav-icon' />
              <div className="nav-title-box"></div>
              <Link to='/'><h3 className="nav-title">PantryPal</h3></Link>
            </div>
            <div className="nav-right">
              <button className="grey-button" onClick={() => openModal('signup')}>Sign up</button>
              <button className="blue-button" onClick={() => openModal('login')}>Log in</button>
              <button className="pink-button" onClick={this.handleSubmit()}>Demo</button>
              {/* <div>
                {this.demoButton()}
              </div> */}
            </div>
          </div>
          <div className="splash-ani-container">
            <img className="splash-ani" src="/images/pantrypal.png" alt=""/>
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