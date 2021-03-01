import React from 'react';
import "./recipe_book.css";
import { checkMark, loadingHourglass } from './recipe_book_icons';
import { removeIcon } from '../search/search_icon'

class RecipeBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { saved_recipes: this.props.saved_recipes }
    // debugger
  }

  recipeTriedStatus(status) {
    return (status === true) ? (checkMark): ''
    // return (loadingHourglass)
  }


  clickRemove(saved_recipe_index) {
    return e => {
      this.props.saved_recipes.splice(saved_recipe_index, 1)
      // this.setState({ saved_recipes: this.props.saved_recipes })

      // do not add the following line yet, or else it will modify the database
      this.props.updateUser({id: this.props.currentUser.id, saved_recipes: this.props.saved_recipes})
    }
  }


  render() {
    let saved_recipes = this.props.saved_recipes || [];

    return (
      <div id='saved-recipes'>
        <h1 className="rb-title">Recipe Book</h1>
        {saved_recipes.map((saved_recipe, saved_recipe_index) => {
          // debugger
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
                <span className='svg-circleminus' onClick={this.clickRemove(saved_recipe_index)}>
                  {removeIcon}
                </span>
              </div>


            </div>
          )})}
      </div>

    )
  }
}

export default RecipeBook;