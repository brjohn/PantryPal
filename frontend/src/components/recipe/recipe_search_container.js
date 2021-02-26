import { connect } from "react-redux";
import { getUserInfo } from "../../actions/session_actions";
import RecipeSearch from "./recipe_search";

const mapStateToProps = (state) => ({
  currentUser: state.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearch);
