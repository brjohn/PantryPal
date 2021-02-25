import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    // processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    // switchForm: (
    //   <h1 onClick={() => dispatch(openModal('signup'))} className="switch-form-link">
    //     Need an account? Sign up now
    //   </h1>
    // )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);