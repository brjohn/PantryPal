import * as SpoonacularAPIUtil from "../util/spoonacular_api_util";

export const RECEIVE_INGREDIENTS = "RECEIVE_INGREDIENTS";

export const receiveIngredients = (ingredient) => {
  return {
    type: RECEIVE_INGREDIENTS,
    ingredient,
  };
};

export const fetchRecipes = (details) => (dispatch) => {
  return SpoonacularAPIUtil.getRecipesByIngredients(details).then((res) => {
    dispatch(receiveIngredients(res.data));
  });
};
