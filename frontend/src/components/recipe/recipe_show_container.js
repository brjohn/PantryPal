import { connect } from "react-redux";
import AlternateShow from "./alternate_show";
import {closeModal} from "../../actions/modal_actions";
import {updateUser} from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  recipes: state.users.recipes || [],
  saved_recipes: state.users.saved_recipes || []
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  updateUser: (data) => dispatch(updateUser(data)) 
 
});

export default connect(mapStateToProps, mapDispatchToProps)(AlternateShow);
