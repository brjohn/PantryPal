import React from 'react';
import "./recipe_book.css";
import { checkMark, loadingHourglass } from './recipe_book_icons';


class RecipeBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { saved_recipes: this.props.saved_recipes }
    // debugger
  }

  recipeTriedStatus(status) {
    return (status === true) ? (checkMark): (loadingHourglass)
    // return (loadingHourglass)
  }


  clickRemove(saved_recipe_index) {
    return e => {
      this.props.saved_recipes.splice(saved_recipe_index, 1)
      this.setState({ saved_recipes: this.props.saved_recipes })
      this.props.updateUser({id: this.props.currentUser.id, saved_recipes: this.props.saved_recipes})
    }
  }


  render() {
    let saved_recipes = this.props.saved_recipes || [];

    return (
      <div id='saved-recipes'>
        {saved_recipes.map((saved_recipe, saved_recipe_index) => {
          // debugger
          return (
            <div className="saved-recipe" key={saved_recipe.title}>
              <div className="saved-recipe-left">

                <div className="saved-recipe-status">
                  {this.recipeTriedStatus(saved_recipe.recipe_tried)}
                </div>

                <div className="saved-recipe-title">
                  {saved_recipe.title}
                </div>
              </div>

              <div className="saved-recipe-right">
                <button onClick={this.clickRemove(saved_recipe_index)}>d</button>
              </div>


            </div>
          )})}
      </div>

    )
  }
}

export default RecipeBook;