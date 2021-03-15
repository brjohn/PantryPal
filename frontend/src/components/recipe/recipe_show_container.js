import { connect } from "react-redux";
import AlternateShow from "./alternate_show";
import {closeModal} from "../../actions/modal_actions";
import {updateUser} from '../../actions/user_actions';

const mapStateToProps = ({entities, session}) => ({
  currentUser: session.currentUser,
  recipes: entities.recipes || [],
  saved_recipes: entities.saved_recipes || []
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  updateUser: (data) => dispatch(updateUser(data)) 
 
});

export default connect(mapStateToProps, mapDispatchToProps)(AlternateShow);
