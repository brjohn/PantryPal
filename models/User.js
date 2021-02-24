const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ingredients: {   //Array stores ingredients as string names for user's pantry.
    type: Array,    // Recipes searched & found with findByIngredients https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients
    "default": []
    // type: Schema.Types.ObjectId,
    // ref: 'ingredients'
  },
  preferences: {   //Array stores diet preferences as strings. Returned recipes MUST include. Full list: https://spoonacular.com/food-api/docs#Diets
    type: Array,    // ?? May need "ComplexSearch" rather than just "findByIngredients" ?? https://api.spoonacular.com/recipes/complexSearch
    "default": []
  },
  exclusions: {    //Array stores intolerances as strings. Returned recipes MUST avoid. Full list: https://spoonacular.com/food-api/docs#Intolerances
    type: Array,    // ?? May need  "ComplexSearch" rather than just "findByIngredients" ?? https://api.spoonacular.com/recipes/complexSearch
    "default": []
  },
  recipes: {       //Array stores recipes as spoonacular recipe IDs for user's saved recipes.
    type: Array,
    "default": []
    // references recipes
  },

}, {
  timestamps: true
})

// Decide later:
// add booleans for user's dietary preferences
// create an association for user's saved recipe IDs here
// create an association for user's pantry

module.exports = User = mongoose.model('User', UserSchema);