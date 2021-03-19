import React from "react";
import './recipe.css'
import { getRecipeByIngredients, getRecipeInformationBulk } from "../../util/spoonacular_api/spoonacular_api"
import { listIcon, tilesIcon } from "./recipe_icons";


class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'list', updatingRecipes: false };
    this.updateRecipes = this.updateRecipes.bind(this);
    this.filterRecipes = this.filterRecipes.bind(this);
    this.setState = this.setState.bind(this);
    this.toggleUpdateSpinner = this.toggleUpdateSpinner.bind(this);
  }


  combine(recipeInfoArr, recipesArr) {
    let combinedArr = [];
    if (recipeInfoArr.every((el, idx) => el.id === recipesArr[idx].id)) {
      console.log(true)
      for (let i = 0; i < recipeInfoArr.length; i++) {
        combinedArr.push(Object.assign({}, recipeInfoArr[i], recipesArr[i]))
      }
    } else {
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
    this.toggleUpdateSpinner()
    let ingredientsString = (this.props.ingredients.map(el => el.name)).join(',');
    getRecipeByIngredients(ingredientsString, (returnedRecipes) => {
      let bulkRequestString = returnedRecipes.map(recipe => recipe.id.toString()).join()
      getRecipeInformationBulk(bulkRequestString, (returnedRecipeInformation) => {
        let filteredRecipesArr = this.combine(returnedRecipeInformation, returnedRecipes).map(({ title, image, instructions, extendedIngredients, diets }) => {
          return { title, image, instructions, extendedIngredients, diets }
        })
        this.props.updateUser({ id: this.props.currentUser.id, recipes: filteredRecipesArr, preferences: [] })
        this.toggleUpdateSpinner()
      })
    })
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

  toggleUpdateSpinner() {
    let updateButton = document.getElementById('loader')
    if (updateButton.innerHTML === 'Update Recipes') {
      updateButton.innerHTML = "";
      let spinner = document.createElement('div');
      spinner.classList.add('loader');
      updateButton.appendChild(spinner)
    } else {
      document.getElementsByClassName('loader')[0].remove();
      updateButton.innerHTML = "Update Recipes";
    }
  }



  clickSwitchButton(chosenView) {
    return (() => {
      this.setState({ view: chosenView })
    })
  }


  addRecipeToFavorite(recipeToBeSaved) {
    let { saved_recipes, updateUser, currentUser } = this.props;
    if (saved_recipes.map(recipe => recipe.title).includes(recipeToBeSaved.title)) {
      let newSavedRecipes = [];
      saved_recipes.forEach(recipe => {
        if (recipe.title !== recipeToBeSaved.title) newSavedRecipes.push(recipe)
      })
      updateUser({ id: currentUser.id, saved_recipes: newSavedRecipes })

    } else {
      updateUser({ id: currentUser.id, saved_recipes: saved_recipes.concat([recipeToBeSaved]) })
    }


  }


  filterRecipes() {
    const { exclusions, preferences, recipes } = this.props
    let filteredRecipes = [];

    recipes.forEach(recipe => {
      if (preferences.every(pref => recipe.diets.includes(pref))) {
        let recipeIngredients = recipe.extendedIngredients.map(ingrediet => ingrediet.name)
        if (!exclusions.some(exc => recipeIngredients.includes(exc))) {
          filteredRecipes.push(recipe)
        }
      }

    })
    return filteredRecipes
  }






  listview() {
    const { recipes, saved_recipes } = this.props
    const recipeTitle = saved_recipes.map(recipe => recipe.title)

    return (
      <div className="recipe">
        <h1 className="r-title">Recipes</h1>
        {this.switchButton()}

        <ul className="user-ingredients">


          {this.filterRecipes(recipes).map((recipe, idx) => {
            return (
              <li key={idx} className="recipe-results" >

                <div className="recipe-result-modal" onClick={() => this.props.openModal(recipe)}>
                  <div>
                    <img src={recipe.image} height="25" width="25" alt="RecipeImage" />
                  </div>
                  <div>
                    {recipe.title}
                  </div>
                </div>

                <div className="recipe-main-add" onClick={() => this.addRecipeToFavorite(recipe)}>
                  {(recipeTitle.includes(recipe.title)) ? (<div className="saved-indicator">Saved</div>) : (`Save`)}
                </div>

              </li>
            );
          })}


        </ul>
        <button onClick={this.updateRecipes} id="loader">
          Update Recipes
        </button>
      </div>
    );
  }


  tilesView() {
    const { recipes } = this.props
    const recipeTitle = this.props.saved_recipes.map(recipe => recipe.title)

    return (
      <div className="recipe">
        <h1 className="r-title">Recipes</h1>
        {this.switchButton()}

        <ul className="user-ingredients user-ingredients-tiles">
          {this.filterRecipes(recipes).map((recipe, idx) => {
            return (
              <li key={idx} className="recipe-results-tiles">
                <div className="recipe-result-modal-text" onClick={() => this.props.openModal(recipe)}>
                  {recipe.title}
                </div>

                <div className="recipe-result-modal-tiles">
                  <img src={recipe.image} alt="RecipeImage" onClick={() => this.props.openModal(recipe)} />
                </div>

                <div className="recipe-main-add-tiles" onClick={() => this.addRecipeToFavorite(recipe)}>
                  {(recipeTitle.includes(recipe.title)) ? (<div className="saved-indicator">Saved</div>) : (`Save`)}
                </div>

              </li>
            );
          })}


        </ul>
        <button onClick={this.updateRecipes} id="loader">
          Update Recipes
        </button>

      </div>
    );
  }



  render() {
    return (
      (this.state.view === 'list') ? this.listview() : this.tilesView())
  }

}

export default Recipe;