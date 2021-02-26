import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/pantry');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history)
  }

  renderErrors() {
    return (
      <ul className="form-errors" >
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="modal-container">
        <img className="nav-icon" src="/images/favicon.png" alt='nav-icon'/>
        <h1>Welcome to PantryPal</h1>
        <h2>Find new recipes to try!</h2>
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="modal-form">
          <div className="signup-form">
            <input type="text"
              className="modal-input"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <input type="text"
              className="modal-input"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
          
            <input type="password"
              className="modal-input"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
           
            <input type="password"
              className="modal-input"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
            <br />
              <button className="modal-button" type="submit" value="Log in">Continue</button>
            {this.renderErrors()}
          </div>
          <hr />
          <h6>By continuing, you agree to PantryPal’s <a className='tos' href="/">Terms of Service</a>, <a className='tos' href="/se">Privacy policy</a></h6>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);