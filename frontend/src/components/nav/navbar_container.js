import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);