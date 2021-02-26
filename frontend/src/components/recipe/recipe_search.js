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
    this.recipes = getRecipeByIngredients(INGREDIENT_LIST[0]);
  }

  render() {

    return (
      <div id="recipe-search-container">
        <div>
          <input placeholder="Ingredient Name" />
          <button className="blue-button">Search</button>
          {console.log(this.recipes)}
        </div>
      </div>
    )
  }
}