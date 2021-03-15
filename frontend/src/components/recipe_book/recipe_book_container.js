import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import RecipeBook from './recipe_book';
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  // debugger
  return {
    currentUser: state.session.currentUser,
    saved_recipes: state.entities.saved_recipes || []
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (data) => dispatch(updateUser(data)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBook);