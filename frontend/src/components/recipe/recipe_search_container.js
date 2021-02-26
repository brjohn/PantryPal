import { connect } from "react-redux";
import { fetchRecipes } from "../../actions/recipe_actions";
import RecipeSearch from "./recipe_search";

const mapStateToProps = (state) => ({
  currentUser: state.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: (ingredients) => dispatch(fetchRecipes(ingredients)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearch);
