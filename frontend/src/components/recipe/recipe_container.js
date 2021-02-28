import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions"



import Recipe from "./recipe";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  ingredients: state.users.ingredients || [],
  recipes: state.users.recipes || []
});


const mapDispatchToProps = (dispatch) => ({
  updateUser: data => dispatch(updateUser(data)),
  openModal: (modal, prop) => dispatch(openModal(modal, prop))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);