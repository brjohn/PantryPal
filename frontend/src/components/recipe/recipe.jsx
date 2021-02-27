import React from "react";
import RecipeSearchContainer from './recipe_search_container'
import SearchFiltersContainer from '../search_filters/search_filters_container';
import './recipe.css'

const INGREDIENT_LIST = ['apple', 'blueberry'];

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.user = '';
  }

  componentDidMount() {
    this.props.getUserInfo();
  }


  render() {
    return (
      <div className="recipe">
        <h2>Your current pantry:</h2>

        <ul className="user-ingredients">
          {INGREDIENT_LIST.map((ingredient, idx) => {
            return <li key={idx}>{ingredient}</li>;
          })}
        </ul>
        {/* change above 4 lines to below 4 lines when we have user ingredients working 
        <ul className="user-ingredients">
          {this.props.currentUser.ingredients.map((ingredient, idx) => {
            return <li key={idx}>{ingredient.name}</li>;
          })}
        </ul> */}
        
        <RecipeSearchContainer />
        <SearchFiltersContainer />
      </div>
    );
  }
}

export default Recipe;