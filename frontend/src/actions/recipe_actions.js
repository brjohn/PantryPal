import * as SpoonacularAPIUtil from "../util/spoonacular_api/spoonacular_api";

export const RECEIVE_INGREDIENTS = "RECEIVE_INGREDIENTS";

export const receiveIngredients = (ingredient) => {
  return {
    type: RECEIVE_INGREDIENTS,
    ingredient,
  };
};

export const fetchRecipes = (ingredients) => (dispatch) => {
  return SpoonacularAPIUtil.getRecipesByIngredients(ingredients).then((res) => {
    dispatch(receiveIngredients(res.data));
  });
};

