import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions"
import Recipe from "./recipe";


const mapStateToProps = ({session, entities}) => ({
  currentUser: session.currentUser,
  ingredients: entities.ingredients || [],
  recipes: entities.recipes || [],
  saved_recipes: entities.saved_recipes || [],
  exclusions: entities.exclusions || [],
  preferences: entities.preferences || []
});


const mapDispatchToProps = (dispatch) => ({
  updateUser: data => dispatch(updateUser(data)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);