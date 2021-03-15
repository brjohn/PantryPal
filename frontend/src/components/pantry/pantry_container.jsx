import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import Pantry from './pantry';

const mapStateToProps = ({session, entities}) => ({
  currentUser: session.currentUser,
  ingredients: entities.ingredients || []
})

const mapDispatchToProps = dispatch => {
  // debugger
  return {
  updateUser: (data) => dispatch(updateUser(data))
}}

export default connect(mapStateToProps, mapDispatchToProps)(Pantry);