import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions"


import Recipe from "./recipe";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  ingredients: state.users.ingredients || [],
  recipes: state.users.recipes || []
});


const mapDispatchToProps = (dispatch) => ({
  updateUser: data => dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);