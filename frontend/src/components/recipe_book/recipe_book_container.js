import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import RecipeBook from './recipe_book';

const mapStateToProps = (state) => {
  // debugger
  return {
    currentUser: state.session.currentUser,
    // saved_recipes: state.users.recipes
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: (data) => dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBook);