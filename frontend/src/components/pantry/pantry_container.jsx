import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import Pantry from './pantry';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  ingredients: state.users.ingredients || []
})

const mapDispatchToProps = dispatch => {
  // debugger
  return {
  updateUser: (data) => dispatch(updateUser(data))
}}

export default connect(mapStateToProps, mapDispatchToProps)(Pantry);