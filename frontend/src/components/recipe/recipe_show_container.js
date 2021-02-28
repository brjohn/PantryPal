import { connect } from "react-redux";
import RecipeShow from "./recipe_show";

const mapStateToProps = (state) => ({
  recipes: state.users.recipes || []
});

const mapDispatchToProps = (dispatch) => ({
 //import updateRecipe from Recipe actions (to be created)
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);
