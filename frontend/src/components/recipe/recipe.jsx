
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
    this.filterRecipes = this.filterRecipes.bind(this);


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
          let filteredRecipesArr = this.combine(returnedRecipeInformation, returnedRecipes)
          this.props.updateUser({ id: this.props.currentUser.id, recipes: filteredRecipesArr, preferences: [] })
          this.setState({ recipes: filteredRecipesArr })
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
    return (() => {
      this.setState({ view: chosenView })
    })
  }


  addRecipeToFavorite(recipeToBeSaved) {
    return () => {
      if (!this.props.saved_recipes.some(recipe => recipe.title === recipeToBeSaved.title)) {

        this.props.saved_recipes.push(recipeToBeSaved)
        this.props.updateUser({id: this.props.currentUser.id, saved_recipes: this.props.saved_recipes})
        // this.props.setRecipeHomeState({addedToFavorite: true})
      }
    }
  }


  filterRecipes(recipes) {
    const { exclusions, preferences } = this.props
    let filteredRecipes = [];

    recipes.forEach(recipe => {
      if (preferences.every(pref => recipe.diets.includes(pref))) {
        let recipeIngredients = recipe.extendedIngredients.map(ingrediet => ingrediet.name)
        if (!exclusions.some(exc => recipeIngredients.includes(exc))) {
          filteredRecipes.push(recipe)}
        }
        
    })
    return filteredRecipes
  }






  listview(recipesArray) {
    return (
      <div className="recipe">
        <h1 className="r-title">Recipes</h1>
          {this.switchButton()}

        <ul className="user-ingredients">


          {this.filterRecipes(recipesArray).map((recipe, idx) => {
            return (
              <li key={idx} className="recipe-results" >

                <div className="recipe-result-modal" onClick={() => this.props.openModal(recipe)}>
                  <img src={recipe.image} height="25" width="25" /> {recipe.title} - {recipe.missedIngredientCount}
                </div>

                <div className="recipe-main-add" onClick={this.addRecipeToFavorite(recipe)}> 
                  Save
                </div>

              </li>
            );
          })}


        </ul>
        <button onClick={this.updateRecipes()}>
          Update Recipes
        </button>

      </div>
    );
  }


  tilesView(recipesArray) {
    return (

    <div>
      <h1 className="r-title">RECIPE.JSX</h1>
      {this.switchButton()}
    </div>)
  }



  render() {
    const {recipes} = this.props;
    
    return (
      (this.state.view === 'list') ? this.listview(recipes) : this.tilesView(recipes))
  }

}

export default Recipe;