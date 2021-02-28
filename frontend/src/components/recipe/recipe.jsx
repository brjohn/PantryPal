import React from "react";
import SearchFiltersContainer from '../search_filters/search_filters_container';
import './recipe.css'
import { getRecipeByIngredients } from "../../util/spoonacular_api/spoonacular_api"
import { listIcon, tilesIcon } from "./recipe_icons";
import RecipeShow from './recipe_show'

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { recipes: this.props.recipes, view: 'list' }
    this.updateRecipes = this.updateRecipes.bind(this);
  }

  componentDidMount() {
    this.setState({ recipes: this.props.recipes})
  }
  

  updateRecipes() {
    
    return () => {

      let ingredientsString = (this.props.ingredients.map(el => el.name)).join(',');
      getRecipeByIngredients(ingredientsString, (returnedRecipes) => { 
        this.props.updateUser({ id: this.props.currentUser.id, recipes: returnedRecipes })
        this.setState({ recipes: returnedRecipes})
      })
      
      // this.props.updateUser({ id: this.props.currentUser.id, recipes: this.props.recipes })
    } 
  }

  switchButton() {
    return (
      <div id="view-switch-buttons">
        <div id="list-view-button" onClick={this.clickSwitchButton('list')}>
          {listIcon}
        </div>

        <div id="tiles-view-button" onClick={this.clickSwitchButton('tiles')}>
          {tilesIcon}
        </div>
      </div>
    )
  }


  clickSwitchButton(chosenView) {
    return (e => {
      this.setState({ view: chosenView })
    })
  }



  listview(recipesArray) {
    let newRecipeShow = new RecipeShow();
    return (
      <div className="recipe">
        <h2>Your current recipes:</h2>

        <ul className="user-ingredients">
          {recipesArray.map((recipe, idx) => {
            return (                          
              <li key={idx} className="recipe-results" onClick={newRecipeShow.showRecipe(recipe.id)}>
                <img src={recipe.image} height="25" width="25"></img> {recipe.title} - {recipe.missedIngredientCount}
             </li>
            );
          })}
        </ul>
        <button onClick={this.updateRecipes()}>
          Update Recipes
        </button>
        {this.switchButton()}
      </div>
    );
  }


  tilesView(recipesArray){
    return (<div>
      {this.switchButton()}
    </div>)
  }



  render() {
    let recipesArray;

    // debugger
    if (this.state.recipes.length === 0) {
      recipesArray = this.props.recipes
    } else {
      recipesArray = this.state.recipes
    }

    // debugger
    return ((this.state.view === 'list')? this.listview(recipesArray) : this.tilesView(recipesArray))
  }
  
}

export default Recipe;