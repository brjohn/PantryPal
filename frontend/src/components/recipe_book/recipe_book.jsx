import React from 'react';
import "./recipe_book.css";
import { checkMark } from './recipe_book_icons';
import { removeIcon } from '../search/search_icon'

class RecipeBook extends React.Component {

  recipeTriedStatus(status) {
    return (status === true) ? (checkMark) : ''
  }


  clickRemove(saved_recipe_index) {
    let newSavedRecipes = [];
    this.props.saved_recipes.forEach((savedRecipe, idx) => {
      if (idx !== saved_recipe_index) newSavedRecipes.push(savedRecipe)
    })
    this.props.updateUser({id: this.props.currentUser.id, saved_recipes: newSavedRecipes})
  }


  render() {
    const {saved_recipes} = this.props;

    return (
      <div id='saved-recipes'>
        <h1 className="rb-title">Recipe Book</h1>
        {/* <div className="saved-list"> */}
        {saved_recipes.map((saved_recipe, saved_recipe_index) => {
          return (
            <div className="saved-recipe" key={saved_recipe.title}>
              <div className="saved-recipe-left">

                <div className="saved-recipe-status">
                  {this.recipeTriedStatus(saved_recipe.recipe_tried)}
                </div>

                <div className="saved-recipe-title"
                  onClick={() => this.props.openModal(saved_recipe)}>
                  {saved_recipe.title}
                </div>
              </div>

              <div className="saved-recipe-right">
                <span className='svg-circleminus' onClick={() => this.clickRemove(saved_recipe_index)}>
                  {removeIcon}
                </span>
              </div>


            </div>
          )})}
          {/* </div> */}
      </div>

    )
  }
}

export default RecipeBook;