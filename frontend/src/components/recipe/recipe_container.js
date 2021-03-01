import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions"
import Recipe from "./recipe";


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  ingredients: state.users.ingredients || [],
  recipes: state.users.recipes || [],
  saved_recipes: state.users.saved_recipes || []
});


const mapDispatchToProps = (dispatch) => ({
  updateUser: data => dispatch(updateUser(data)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);