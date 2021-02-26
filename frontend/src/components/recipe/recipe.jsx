import React from "react";
import RecipeSearchContainer from './recipe_search_container'

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
        <hr></hr><h1>Recipe Component</h1>
        <h2>{this.props.currentUser.username}'s pantry:</h2>
        <ul className="user-ingredients">
          {["apple", "almonds"].map((ingredient, idx) => {
            return <li key={idx}>{ingredient}</li>;
          })}
        </ul>
        {/* above [].map is test until we can add ingredients to user's ingredients array */}
        <ul className="user-ingredients">
          {this.props.currentUser.ingredients.map((ingredient, idx) => {
            return <li key={idx}>{ingredient.name}</li>;
          })}
        </ul>
        
        <hr></hr><h1>Recipe Search Component</h1>
        <RecipeSearchContainer />
      </div>
    );
  }
}

export default Recipe;