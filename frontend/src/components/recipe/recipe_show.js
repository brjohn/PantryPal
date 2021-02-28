import React from 'react';
import './recipe.css'
import { getRecipeInformation } from "../../util/spoonacular_api/spoonacular_api"

class RecipeShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {recipe: {}};
    this.recipe = {};
  }

  getRecipe(recipeId) {
    return (e => {
      getRecipeInformation(recipeId, (returnedRecipe) => {
        // this.props.updateRecipe({  })
        this.setState({ recipe: returnedRecipe });
        this.recipe = returnedRecipe;
      })
    })
  }

  showRecipe(){
    if (this.recipe === {}){
      return(
        <>
          Click a recipe.        
        </>
      )
    } else {
      return (
        <>
          <img src="{this.recipe.image}"></img>
        </>
      )
    }    
  }

  render() {
    return (
      <div>
        {this.showRecipe()}
      </div>
    )
  }
}

export default RecipeShow;