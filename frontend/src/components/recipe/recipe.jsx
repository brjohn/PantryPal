import React from "react";
import SearchFiltersContainer from '../search_filters/search_filters_container';
import './recipe.css'
import { getRecipeByIngredients, getRecipeInformationBulk } from "../../util/spoonacular_api/spoonacular_api"
import { listIcon, tilesIcon } from "./recipe_icons";


// import { openModal } from "../../actions/modal_actions";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: this.props.recipes, view: 'list' }
    this.updateRecipes = this.updateRecipes.bind(this);
  }


  combine(recipeInfoArr, recipesArr) {
    let combinedArr = [];
    if (recipeInfoArr.every((el, idx) => el.id === recipesArr[idx].id)) {
      console.log(true)
      for (let i = 0; i < recipeInfoArr.length; i++) {
        combinedArr.push(Object.assign({}, recipeInfoArr[i], recipesArr[i]))
      }
    } else {
      console.log(false)
      for (let i = 0; i < recipeInfoArr.length; i++) {
        for (let j = 0; j < recipeInfoArr.length; j++) {
          if (recipeInfoArr[i].id === recipesArr[j].id) {
            combinedArr.push(Object.assign({}, recipeInfoArr[i], recipesArr[j]))
            j = recipeInfoArr.length // breakts current loop
          }
        }
      }
    }
    return combinedArr
  }


  updateRecipes() {
    return () => {
      let ingredientsString = (this.props.ingredients.map(el => el.name)).join(',');
      getRecipeByIngredients(ingredientsString, (returnedRecipes) => {
        let bulkRequestString = returnedRecipes.map(recipe => recipe.id.toString()).join()
        getRecipeInformationBulk(bulkRequestString, (returnedRecipeInformation) => {
          let combinedRecipesArr = this.combine(returnedRecipeInformation, returnedRecipes)
          this.props.updateUser({ id: this.props.currentUser.id, recipes: combinedRecipesArr })
          this.setState({ recipes: combinedRecipesArr })
        })
      })
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


  addRecipeToFavorite(recipeToBeSaved) {
    // let that = this
    return () => {
      this.props.saved_recipes.push(recipeToBeSaved)
      console.log(this.props.saved_recipes)
    }
  }




  listview(recipesArray) {
    return (
      <div className="recipe">
        <h2>RECIPE.JSX</h2>
        <h2>Your current recipes:</h2>

        <ul className="user-ingredients">
          {recipesArray.slice(0, 15).map((recipe, idx) => {
            return (
              <li key={idx} className="recipe-results" >

                <div className="recipe-result-modal" onClick={() => this.props.openModal(recipe)}>
                  <img src={recipe.image} height="25" width="25" /> {recipe.title} - {recipe.missedIngredientCount}
                </div>

                <div className="recipe-main-add" onClick={this.addRecipeToFavorite(recipe)}> 
                  Add to Favorite
                </div>

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


  tilesView(recipesArray) {
    return (
      <div>
        <h2>RECIPE.JSX</h2>
        {this.switchButton()}
      </div>)
  }



  render() {
    let recipesArray;

    if (this.state.recipes.length === 0) {
      recipesArray = this.props.recipes
    } else {
      recipesArray = this.state.recipes
    }

    return (
      (this.state.view === 'list') ? this.listview(recipesArray) : this.tilesView(recipesArray))
  }

}

export default Recipe;