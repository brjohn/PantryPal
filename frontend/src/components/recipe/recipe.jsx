import React from "react";
import RecipeSearchContainer from './recipe_search_container'
import './recipe.css'

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  
  render() {

    return (
      <div className="recipe">
        <h2>Your current pantry:</h2>

        <ul className="user-ingredients">
          {this.props.ingredients.map((ingredient, idx) => {
            return <li key={idx}>{ingredient.name}</li>;
          })}
        </ul>
        
        <RecipeSearchContainer />
      </div>
    );
  }
  
}

export default Recipe;