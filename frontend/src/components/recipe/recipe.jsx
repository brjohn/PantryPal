import React from "react";
import RecipeSearchContainer from './recipe_search_container'
import './recipe.css'
import { getRecipeByIngredients } from "../../util/spoonacular_api/spoonacular_api"

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  

  updateRecipes() {
    
    return () => {
      let ingredientsString = (this.props.ingredients.map(el => el.name)).join(',');
      getRecipeByIngredients(ingredientsString, )
      // this.props.updateUser({ id: this.props.currentUser.id, recipes: this.props.recipes })
    } 
  }


  render() {

    return (
      <div className="recipe">
        <h2>Your current recipes:</h2>

        <ul className="user-ingredients">
          {this.props.recipes.map((recipe, idx) => {
            return <li key={idx}>{recipe.title}</li>;
          })}
        </ul>

        <button onClick={this.updateRecipes()}>
          Update Recipes
        </button>
        
        {/* <RecipeSearchContainer /> */}
      </div>
    );
  }
  
}

export default Recipe;