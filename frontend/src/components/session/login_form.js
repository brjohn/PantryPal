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
      this.props.history.push('/');
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

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
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
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="modal-container">
            <img className="nav-icon" src="/images/favicon.png" />
            <h1>Welcome to PantryPal</h1>

            <div className="form-container">

            <input type="text"
              className="modal-input"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <input type="password"
              className="modal-input"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br />
            <input className="modal-submit-button" type="submit" value="Submit" />
            <br />
            <div className="demo-button-div">
              {this.demoButton()}
            </div>
            <br />
            {this.renderErrors()}
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);