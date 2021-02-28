import React from 'react';
// import { removeIcon } from '../search/search_icon';
import "./recipe_book.css";


class RecipeBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { saved_recipes: this.props.saved_recipes }
    // debugger
  }

  render() {

    let saved_recipes = this.props.saved_recipes || [];

    return (

      <div id='saved-recipes'>
        {saved_recipes.map(saved_recipe => {
          // debugger
          return (
            <div>
              {saved_recipe.recipe_tried.toString()}
            </div>
          )})}
      </div>

    )
  }
}

export default RecipeBook;