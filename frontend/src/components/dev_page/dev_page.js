import React from 'react';
import About from './Dev_team_page_icon_2.png'; // see alternative dev-team icons to choose from in /dev_page/
import Cole from './cole.jpg';
import Tului from './tului.png';
import Brynn from './brynn.png';
import Alex from './alex.jpg';
import Top from './top.png';
import './dev_page.css'

class DevPage extends React.Component {

  scrollToBottom = function () {
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
  }

  scrollToTop = function () {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="dev-page">
        <div id="dev-tobottom-container">
          <img className="scroll-logo" src={About} alt="Team Logo" onClick={() => this.scrollToBottom()} />
        </div>
        <div className="footer">
          <div className="about-us">
            <p id="team-intro">MEET THE TEAM</p>
            <div className="dev-container">
              <div className="developer">
                <div className="dev-pic">
                  <img src={Cole} alt="Cole" />
                </div>                
                <p className="developer-name">Cole Wendling</p>
                <ul className="about-us-links">
                  <li>
                    <a href="https://github.com/colewendling" target="_blank" rel="noreferrer">
                      <i className="fa fa-github fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/colewendling/" target="_blank" rel="noreferrer">
                      <i className="fa fa-linkedin-square fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://angellist.com/" target="_blank" rel="noreferrer">
                      <i className="fa fa-angellist fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://progress.appacademy.io/me/students" target="_blank" rel="noreferrer">
                      <i className="fa fa-user-circle fa-icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="developer">
                <div className="dev-pic">
                  <img src={Tului} alt="Tului" />
                </div>
                <p className="developer-name">Tului Gantulga</p>
                <ul className="about-us-links">
                  <li>
                    <a href="https://github.com/Tului2020" target="_blank" rel="noreferrer">
                      <i className="fa fa-github fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/tului/" target="_blank" rel="noreferrer">
                      <i className="fa fa-linkedin-square fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://angel.co/u/tului-gantulga" target="_blank" rel="noreferrer">
                      <i className="fa fa-angellist fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://progress.appacademy.io/me/students" target="_blank" rel="noreferrer">
                      <i className="fa fa-user-circle fa-icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="developer">
                <div className="dev-pic">
                  <img src={Brynn} alt="Brynn" />
                </div>
                <p className="developer-name">Brynn Johnson</p>
                <ul className="about-us-links">
                  <li>
                    <a href="https://github.com/brjohn" target="_blank" rel="noreferrer">
                      <i className="fa fa-github fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/brynn-j-6906051ba/" target="_blank" rel="noreferrer">
                      <i className="fa fa-linkedin-square fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://angel.co/u/brynn-johnson-2" target="_blank" rel="noreferrer">
                      <i className="fa fa-angellist fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://progress.appacademy.io/me/students" target="_blank" rel="noreferrer">
                      <i className="fa fa-user-circle fa-icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="developer">
                <div className="dev-pic">
                  <img src={Alex} alt="Alex" />
                </div>
                <p className="developer-name">Alex Lang</p>
                <ul className="about-us-links">
                  <li>
                    <a href="https://github.com/droid4alex" target="_blank" rel="noreferrer">
                      <i className="fa fa-github fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/alexander-lang-28847749/" target="_blank" rel="noreferrer">
                      <i className="fa fa-linkedin-square fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://angel.co/u/alex-lang-7" target="_blank" rel="noreferrer">
                      <i className="fa fa-angellist fa-icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://my.indeed.com/p/alexl-l2zu58g" target="_blank" rel="noreferrer">
                      <i className="fa fa-user-circle fa-icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            <div id="dev-totop-container">
              <img id="top-logo" src={Top} alt="Back" onClick={() => this.scrollToTop()} className="top-scroll-logo" />
            </div>
        </div>
      </div>

    )
    // return (
    //   <div>
    //     <footer>
    //       {/* Dev Team: Cole Wendling, Tului Gantulga, Alex Lang,	Brynn Johnson. */}
    //     </footer>
    //   </div>
    // );
  }
}


export default DevPage;