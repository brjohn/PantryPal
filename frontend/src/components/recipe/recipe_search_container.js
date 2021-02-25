import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import RecipeSearch from "./recipe_search";

const mapStateToProps = (state) => ({
  user: state.session.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearch);
