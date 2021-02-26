import React from 'react';
import { getRecipeByIngredients } from './../../util/spoonacular_api/spoonacular_api'
import './recipe.css'

const INGREDIENT_LIST = ['apple', 'almond'];

export default class RecipeSearch extends React.Component {

  constructor(props) {
    super(props);
    this.recipes = [];
    this.ingredients = [];
  }

  componentDidMount() {
  }

  render() {

    return (
      <div id="recipe-search-container">
        <div>
          <input placeholder="Ingredient Name" />
          <button className="blue-button">Search</button>
          <br></br>
          Apple Ginger Kombucha Cocktail
          <br></br>
          <img src="https://spoonacular.com/recipeImages/987595-312x231.jpg" height="100" width="100" />
        </div>
      </div>
    )
  }
}