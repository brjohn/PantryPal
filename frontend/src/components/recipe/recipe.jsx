import React from "react";
import RecipeSearchContainer from './recipe_search_container'
import './recipe.css'

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  

  updateRecipes() {
    return () => {
      
      
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