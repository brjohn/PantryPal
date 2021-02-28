import React from 'react';
import './recipe.css'
import { getRecipeInformation } from "../../util/spoonacular_api/spoonacular_api"

class RecipeShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { recipeObject: {} }
    // this.showRecipe = this.showRecipe.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount(){
    // this.ingredients = []
  }

  showRecipe(recipeId) {
    // getRecipeInformation
    return (e => {
      alert("recipeId " + recipeId)
    })
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

export default RecipeShow;