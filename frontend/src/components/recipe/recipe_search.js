import React from 'react';
import './recipe.css'

const INGREDIENT_LIST = ['apple', 'blueberry'];

export default class RecipeSearch extends React.Component {

  constructor(props) {
    super(props);
    this.recipes = [];
    this.ingredients = [];
  }

  componentDidMount() {

  }

  componentWillUnmount(){
    this.ingredients = []
  }

  showRecipes(){
    this.recipes = this.props.fetchRecipes("apple");
    return (
      <div>

      </div>
    )
  }

  //1. get user ingredients
  //2. 

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