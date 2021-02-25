import axios from "axios";

const API_KEY = "eb527cf585ea4f8f8e35d8b496da7862";

const INGREDIENT_LIST = ['apple', 'almond'];
const PREFERENCES_LIST = ['Vegetarian', 'Vegan'];
const EXCLUSIONS_LIST = ['Seafood', 'Shellfish'];

const apiString = "apiKey=" + API_KEY;

const ingredientsString = "ingredients=" + INGREDIENT_LIST.join('+');

const findByIngredientString = "https://api.spoonacular.com/recipes/findByIngredients?" + apiString + '&' + ingredientsString;

export const getRecipesByIngredients = (details) => {
  return axios.get(`${findByIngredientString}`, {
    headers: { Authorization: "" },
    params: {
      ...details,
      apiKey: API_KEY,
    },
  });
};

export const getRecipeInfo = (recipeId) => {
  return axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=eb527cf585ea4f8f8e35d8b496da786`, {
    headers: { Authorization: "" },
    params: {
      apiKey: API_KEY,
    },
  });
};
