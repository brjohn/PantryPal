import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import RecipeBook from './recipe_book';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (data) => dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBook);