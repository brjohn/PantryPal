import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions"
import Recipe from "./recipe";


const mapStateToProps = ({session, users}) => ({
  currentUser: session.currentUser,
  ingredients: users.ingredients || [],
  recipes: users.recipes || [],
  saved_recipes: users.saved_recipes || [],
  exclusions: users.exclusions || [],
  preferences: users.preferences || []
});


const mapDispatchToProps = (dispatch) => ({
  updateUser: data => dispatch(updateUser(data)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);