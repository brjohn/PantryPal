import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveIngredients } from "../../actions/recipe_actions";
import RecipeSearch from "./recipe_search";

const mapStateToProps = (state) => {
  return ({
    ingredients: state.session.user.ingredients
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipe: (ingredients) => dispatch(receiveIngredients(ingredients))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeSearch));