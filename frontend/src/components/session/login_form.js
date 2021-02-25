import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

// TBD: Replace / with Pantry component (not yet created) to redirect to after user is authenticated
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
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
      password: this.state.password
    };

    this.props.login(user)
    // debugger

    .then(() => {
      if (this.props.isAuthenticated) this.props.closeModal()})
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const user = Object.assign({}, this.state);
  //   this.props.processForm(user)
  //     .then(this.props.closeModal)
  //     .then(() => this.props.history.push('/users/:userId/pins'));
  // }

  renderErrors() {
    return (
      <ul className="form-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li  key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  demoButton() {
    return (
      <button type="submit" className="demo-button"
        onClick={() => this.setState({ email: "demo@gmail.com", password: '123456' })}>
        Try a Demo
      </button>
    )
  }

  render() {
    return (
      <div className="modal-container">
            <img className="nav-icon" src="/images/favicon.png" />
            <h1>Welcome to PantryPal</h1>
            
            <div className="form-container">
        <form onSubmit={this.handleSubmit} className="modal-form">
          <div className="login-container">
            <input type="text"
              className="modal-input"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <input type="password"
              className="modal-input"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <button className="modal-button" type="submit" value="submit">Log in</button>
            <h5>OR</h5>
            <div className="demo-button-div">
              {this.demoButton()}
            </div>
            {this.renderErrors()}
          </div>
              <hr />
              <h6>By continuing, you agree to PantryPal’s <a className='tos' href="">Terms of Service</a>, <a className='tos' href="#">Privacy policy</a></h6>
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);